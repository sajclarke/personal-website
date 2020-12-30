import { fetchEntries } from '@utils/contentfulPosts'
import BlogPost from '@components/BlogPost'
import RotatingHeading from '@components/RotatingHeading'

export default function Home({ posts }) {

  // console.log(posts)

  const words = ['small businesses', 'churches', 'doctors', 'lawyers', 'Governments', 'your next big idea']

  // useEffect(() => {

  //   const tempIndex = wordIndex

  //   setTimeout(() => {
  //     if (wordIndex < words.length - 1) {
  //       setWordIndex(tempIndex + 1)
  //     } else {
  //       setWordIndex(0)
  //     }
  //   }, 1000)
  // }, [wordIndex])

  return (
    <div className="mx-auto px-4">
      <main>

        {/* <section className="text-gray-700 body-font overflow-hidden">
          <svg viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <clipPath id="user-space" clipPathUnits="userSpaceOnUse">
                <path fill="#FF0066" d="M49.5,-65.4C58.2,-51.8,55.1,-30.5,54.2,-12.9C53.4,4.7,54.7,18.5,49.1,28.6C43.6,38.6,31.1,44.8,17.6,50.9C4.1,57,-10.5,62.8,-22.5,59.5C-34.5,56.1,-44.1,43.5,-53.7,29.7C-63.3,15.8,-73,0.6,-73.4,-15.7C-73.8,-32,-65,-49.4,-51.2,-62.2C-37.4,-75,-18.7,-83.1,0.9,-84.1C20.4,-85.2,40.9,-79.1,49.5,-65.4Z" transform="translate(100 100)"></path>
              </clipPath>
            </defs>
            <image width="150" height="150" preserveAspectRatio="xMidYMid slice" xlinkHref="/headshot_transp02.png" clipPath="url(#user-space)" />
          </svg>
        </section> */}
        <section className="container mb-10 text-gray-700 body-font overflow-hidden">

          <div className="flex flex-col flex-col-reverse md:flex-row md:items-center">

            <div className="md:p-6 md:w-1/2 flex flex-col items-start">
              <div className="mx-auto"
              // style={{ height: 500, width: 500 }}
              >
                <img src="/assets/images/headshot_4x.png" className="object-cover h-64 w-64 md:h-96 md:w-96 rounded-full bg-blue-100" />
              </div>
              {/* <img src="/headshot_transp02.png" className="object-none object-left bg-blue-100 h-auto w-auto" style={{ paddingTop: 100, marginRight: 0 }} /> */}
              {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <defs>
                  <clipPath id="myClip">
                    <path id="blob" d="M426.5,357Q374,464,261.5,444.5Q149,425,95,337.5Q41,250,103,176.5Q165,103,255.5,93Q346,83,412.5,166.5Q479,250,426.5,357Z" fill="#d1d8e0"></path>
                  </clipPath>
                </defs>
              </svg> */}
            </div>

            <div className="md:w-1/2 my-10 md:my-5 flex flex-col items-start">
              <span className="inline-block py-1 px-3 rounded bg-indigo-100 text-indigo-500 text-sm font-medium tracking-widest">Welcome to my corner of the internet</span>
              <RotatingHeading words={words} />
              {/* <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 my-4">I believe in a positive future of humans leveraging technology to live better lives</h2> */}
              <p className="leading-relaxed mb-8">I am a tech entrepreneur and passionate about a future where modern technology solutions are actively developed by the Caribbean to improve our quality of life.</p>
              <p className="leading-relaxed mb-8">I am currently developing custom business software at <a target="_blank" href="https://www.webstart101.com">Webstart</a> and <a target="_blank" href="https://www.carepoint.co">Carepoint.co</a>, a healthtech startup helping doctors to provide remote care to patients inbetween visits.</p>
              <span className="flex justify-center sm:justify-start">
                {/* Github icon */}
                <a target="_blank" href="https://github.com/sajclarke" className="ml-3 text-gray-500 hover:text-white hover:bg-blue-300 rounded-full w-10 h-10 p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 .5C5.37.5 0 5.78 0 12.292c0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56C20.565 21.917 24 17.495 24 12.292 24 5.78 18.627.5 12 .5z"></path></svg>
                </a>
                {/* <a className="ml-3 text-gray-500 hover:text-white hover:bg-blue-300 rounded-full w-10 h-10 p-2">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a> */}
                <a target="_blank" href="https://twitter.com/shannonajclarke" className="ml-3 text-gray-500 hover:text-white hover:bg-blue-300 rounded-full w-10 h-10 p-2">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                {/* <a className="ml-3 text-gray-500 hover:text-white hover:bg-blue-300 rounded-full w-10 h-10 p-2">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a> */}
                <a target="_blank" href="https://www.linkedin.com/in/shannonajclarke/" className="ml-3 text-gray-500 hover:text-white hover:bg-blue-300 rounded-full w-10 h-10 p-2">
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
            </div>

          </div>

        </section>

        <section className="max-w-5xl mx-auto divide-y divide-gray-200">
          <div className="pt-6 pb-8 space-y-2 md:space-y-5">
            <h1 className="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">Blog</h1>
            <p className="text-lg leading-7 text-gray-500">A collection of my thoughts along the journey of software development and entrepreneurship</p>
          </div>
          <ul className="divide-y divide-gray-200">
            <li className="py-12">
              {posts?.map((p, index) => (
                <BlogPost
                  key={index}
                  postData={
                    {
                      date: p.publishDate,
                      title: p.title,
                      body: p.body,
                      excerpt: p.description,
                      hrefLink: p.id
                    }
                  }
                />
              ))}


            </li>
          </ul>
        </section>

      </main>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetchEntries()
  // console.log(res)
  const posts = await res.map((p) => {
    return { ...p.fields, id: p.sys.id }
  })

  return {
    props: {
      posts,
    },
  }
}

