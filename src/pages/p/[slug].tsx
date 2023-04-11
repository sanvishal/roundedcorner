import { useRef } from "react"
import { GetStaticProps, GetStaticPropsResult } from "next"
import Head from "next/head"
import { Post, allPosts } from "contentlayer/generated"
import dayjs from "dayjs"
import { motion, useInView, useScroll } from "framer-motion"

import { FloatingNavbar } from "@/components/FloatingNavbar"
import { Logo } from "@/components/Logo"
import { MainContainer } from "@/components/MainContainer"
import { Mdx } from "@/components/Mdx"
import { SmallLogo } from "@/components/SmallLogo"
import { ThemeToggle } from "@/components/ThemeToggle"

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
  const iconRef = useRef(null)
  const isIconInView = useInView(iconRef, {
    once: false,
  })

  return (
    <MainContainer>
      <FloatingNavbar showIcon={iconRef.current ? !isIconInView : false} />
      <Head>
        <title>{post.title}</title>
      </Head>
      <article className="mx-auto mt-2 max-w-[820px] pb-16">
        <div ref={iconRef} className="flex items-center justify-between">
          <Logo size="sm" />
          <div className="block lg:hidden">
            <ThemeToggle />
          </div>
        </div>
        <div className="my-10 mt-14">
          <h5 className="mb-2 font-mono text-zinc-400 dark:text-zinc-500 md:text-lg">
            {dayjs(post.date).format("MMM DD, YYYY")}
          </h5>
          <h1 className="font-serif text-5xl font-semibold md:text-6xl">
            {post.title}
          </h1>
          <h5 className="mt-4 font-sans leading-7 text-zinc-500 dark:text-zinc-400 md:text-lg">
            {post.subtitle}
          </h5>
        </div>
        <Mdx code={post.body.code} />
      </article>
    </MainContainer>
  )
}

export default PostLayout
