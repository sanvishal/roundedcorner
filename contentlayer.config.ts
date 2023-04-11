// @ts-ignore
import remarkFigureCaption from "@microflash/remark-figure-caption"
import { defineDocumentType, makeSource } from "contentlayer/source-files"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode, { Options } from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"
import { HighlighterOptions, getHighlighter } from "shiki"
import { visit } from "unist-util-visit"

const theme: Record<string, HighlighterOptions["theme"]> = {
  dark: "github-dark-dimmed",
  light: "solarized-light",
}

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
    subtitle: {
      type: "string",
      description: "The subtitle of the post",
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => "/p/" + doc._raw.sourceFileName.replace(/\.mdx$/, ""),
    },
  },
}))

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm, remarkFigureCaption],
    rehypePlugins: [
      rehypeAutolinkHeadings,
      rehypeSlug,
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === "element" && node?.tagName === "pre") {
            const [codeEl] = node.children
            if (codeEl.tagName !== "code") {
              return
            }

            node.__rawString__ = codeEl.children?.[0].value
            node.__src__ = node.properties?.__src__
          }
        })
      },
      [
        rehypePrettyCode,
        {
          theme,
          onVisitLine(node: any) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }]
            }
          },
          onVisitHighlightedLine(node: any) {
            node.properties.dataHighlighted = "true"
          },
          onVisitHighlightedWord(node: any) {
            node.properties.className = ["word--highlighted"]
          },
        },
      ],
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === "element" && node?.tagName === "code") {
            if (node.children) {
              const linesToHide: any[] = []
              let shouldHighlight = false
              node.children.forEach((child: any) => {
                if (child?.properties?.className?.includes("line")) {
                  if ("dataHighlighted" in child?.properties) {
                    shouldHighlight = true
                  } else {
                    linesToHide.push(child)
                  }
                }
              })

              if (shouldHighlight) {
                linesToHide.forEach((line) => {
                  line.properties.dataHighlighted = "false"
                })
              }
            }
          }
        })
      },
    ],
  },
})
