import { fetchEntries, fetchEntry } from '@utils/contentfulPosts'
import dayjs from "dayjs";
import Markdown from "react-markdown"
import gfm from "remark-gfm"

import Head from 'next/head'

const Post = ({ post }) => {
    // console.log(post)
    const photoURL = post.heroImage.fields.file?.url.replace('//', 'http://')
    return (
        <div className="w-full mx-auto px-4">
            <Head>
                <title>{post.title}</title>
                {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" /> */}
            </Head>
            <main>
                <section className="w-full mx-auto overflow-hidden">

                    <div className="pt-6 pb-8 space-y-2 md:space-y-5 text-center border-b border-gray-100">
                        <p className="text-lg leading-7 text-gray-500">{dayjs(post.publishDate).format("MMMM D, YYYY")}</p>
                        <h1 className="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">{post.title}</h1>
                    </div>

                    <div className="flex flex-col md:flex-row">

                        <div className="md:w-1/4 flex md:justify-center md:justify-start mt-10 items-center md:items-start space-x-2 space-y-2">
                            <img src="/assets/images/headshot_4x.png" className="w-16 h-16 bg-blue-100 rounded-full" />
                            <div>
                                <p className="text-gray-500 font-medium">Shannon Clarke</p>
                                <a href="https://twitter.com/shannonajclarke" target="_blank">@shannonajclarke</a>
                            </div>
                        </div>

                        <div className="md:w-3/4 overflow-x-auto h-full md:px-10 md:border-l border-gray-100 prose text-gray-500 my-3 md:my-10 space-y-5">
                            {photoURL && <img className="rounded mx-auto" src={`${photoURL}`} alt={post.title} />}
                            <Markdown plugins={[gfm]} children={post.body} escapeHtml={true} />
                        </div>
                    </div>

                </section>

            </main>
        </div>
    )
}

export default Post

export async function getStaticPaths() {

    // Query Contentful for all blog posts in the space
    const res = await fetchEntries()

    // Map the result of that query to a list of slugs.
    // This will give Next the list of all blog post pages that need to be
    // rendered at build time.
    const paths = res.map(post => ({
        params: { id: post.sys.id },
    }))

    return {
        paths,
        fallback: false,
    }
}


export async function getStaticProps({ params }) {

    // Fetch necessary data for the blog post using params.id
    const res = await fetchEntry(params.id)
    const post = { ...res.fields, id: res.sys.id }

    return {
        props: {
            post,
        },
    }
}