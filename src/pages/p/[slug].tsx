import { GetStaticProps, GetStaticPropsResult } from "next"
import Head from "next/head"
import { Post, allPosts } from "contentlayer/generated"

import { MainContainer } from "@/components/MainContainer"
import { Mdx } from "@/components/Mdx"

interface PageProps {
  params: {
    slug: string
  }
}

export async function getStaticPaths() {
  const paths = allPosts.map((post) => post.slug)
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({
  params,
}: PageProps): Promise<GetStaticPropsResult<{ post: Post | undefined }>> {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  return {
    props: {
      post,
    },
  }
}

const PostLayout = ({ post }: { post: Post }) => {
  // console.log(post)
  return (
    <MainContainer>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article>
        <Mdx code={post.body.code} />
      </article>
    </MainContainer>
  )
}

export default PostLayout
