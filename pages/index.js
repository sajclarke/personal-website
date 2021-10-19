import { fetchEntries } from "@utils/contentfulPosts";
import BlogPost from "@components/BlogPost";
import Subscribe from "@components/Subscribe";

import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Home({ posts }) {
  // console.log(posts)

  const projects = [
    {
      title: "Carepoint",
      description:
        "Carepoint is used by healthcare providers to engage their patients inbetween appointments with scheduled and automated reminders for remote check-ins",
      url: "https://www.carepoint.co",
      image: "/assets/images/carepoint-promo.png",
    },
    {
      title: "Webstart101",
      description:
        "Webstart is a series of tools and course materials that helps businesses to establish their digital real estate so they can serve customers online and not inline",
      url: "https://www.webstart101.com",
      image: "/assets/images/webstart-promo.png",
    },
    {
      title: "Gutaperk",
      description:
        "Gutaperk is the Bajan term for a slingshot. This app is coming soon",
      url: "",
      image:
        "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ];

  return (
    <div className="mx-auto px-4">
      <main>
        <section className="px-5 py-6">
          <div className="w-full md:max-w-5xl  mx-auto  flex flex-col items-center md:flex-row">
            <div className="md:w-2/3 xl:mr-20 md:pr-24 md:mb-0">
              <h1 className="mb-8 text-2xl md:text-5xl font-bold title-font">
                Shannon Clarke
              </h1>
              <p className="mb-8 text-base leading-relaxed text-left text-gray-600">
                I am an electrical and computer engineer who after seven years
                in the utility and construction industry decided to focus on
                building technology products to empower individuals and build
                communities.
              </p>
              <div className="mt-0 lg:mt-6 flex flex-col md:flex-row md:space-x-6 space-y-3 md:space-y-0">
                <span className="relative inline-flex rounded-md shadow-sm">
                  <a
                    href="https://calendly.com/shannonclarke-developer/letschat"
                    target="_blank"
                    className="w-full flex items-center px-6 py-3 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-lg  hover:bg-blue-800 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
                  >
                    Book 30 min Chat
                  </a>
                  <span className="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-800 opacity-75"></span>
                    <span className="animate-pulse relative inline-flex rounded-full h-3 w-3 bg-green-600"></span>
                  </span>
                </span>

                <a
                  href="mailto:hello@shannonclarke.com"
                  className="px-6 py-3 mt-auto font-semibold text-blue-600 transition duration-500 ease-in-out transform bg-white rounded-lg hover:bg-blue-600 hover:text-gray-100 border border-gray-100 shadow-lg focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
                >
                  Get in Touch
                </a>
              </div>
              <div className="flex items-center space-x-6 my-6 text-gray-600">
                <p className="hidden md:inline-block">
                  Find me on social media:
                </p>
                <a
                  href="https://github.com/sajclarke"
                  target="_blank"
                  className="p-2 hover:text-white hover:bg-yellow-600 hover:bg-opacity-50 rounded-full"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
                <a
                  href="https://twitter.com/shannonajclarke"
                  target="_blank"
                  className="p-2 hover:text-white hover:bg-yellow-600 hover:bg-opacity-50 rounded-full"
                >
                  <FaTwitter className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shannonajclarke/"
                  target="_blank"
                  className="p-2 hover:text-white hover:bg-yellow-600 hover:bg-opacity-50 rounded-full"
                >
                  <FaLinkedinIn className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <div className="relative group  h-96">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg filter blur opacity-75 animate-pulse group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <div className="overflow-hidden rounded-lg">
                  <img
                    className="relative h-96 object-cover object-center transform hover:scale-110 duration-500"
                    alt="hero"
                    src="/assets/images/shannon_block.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="w-full md:max-w-5xl mx-auto items-center py-12 ">
            <div className="flex items-center justify-between pb-5 border-b border-black dark:border-gray-100">
              <h3 className="text-2xl font-semibold leading-6">My Portfolio</h3>

              <a
                href="https://github.com/sajclarke"
                target="_blank"
                className="text-gray-600 hover:bg-indigo-100 hover:text-indigo-500  rounded p-2"
              >
                View more on Github
              </a>
            </div>
            <div className="relative mx-auto max-w-7xl">
              <div className="grid max-w-lg gap-12 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
                {projects.map(({ title, url, description, image }, index) => (
                  <div
                    key={index}
                    className="flex flex-col mb-12 overflow-hidden cursor-pointer"
                  >
                    <a href={url} target="_blank">
                      <div className="flex-shrink-0">
                        <img
                          className="object-fill object-top w-auto h-48 rounded-lg mx-auto"
                          src={image}
                          alt=""
                        />
                      </div>
                    </a>
                    <div className="flex flex-col justify-between flex-1">
                      <div className="flex-1">
                        <a
                          href={url}
                          target="_blank"
                          className="block mt-6 space-y-6"
                        >
                          <h3 className="text-2xl font-semibold leading-none tracking-wider ">
                            {title}
                          </h3>

                          <p className="text-base leading-relaxed text-gray-600">
                            {description}
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Subscribe />

        {/* <section className="max-w-5xl mx-auto divide-y divide-gray-200">
          <div className="pt-6 pb-8 space-y-2 md:space-y-5">
            <h1 className="text-2xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
              Blog
            </h1>
            <p className="text-lg leading-7 text-gray-500">
              A collection of my thoughts along the journey of software
              development and entrepreneurship
            </p>
          </div>
          <ul className="list-none divide-y divide-gray-200">
            <li className="py-12">
              {posts?.map((p, index) => (
                <BlogPost
                  key={index}
                  postData={{
                    date: p.publishDate,
                    title: p.title,
                    body: p.body,
                    excerpt: p.description,
                    hrefLink: p.id,
                  }}
                />
              ))}
            </li>
          </ul>
        </section> */}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetchEntries();
  // console.log(res)
  const posts = await res.map((p) => {
    return { ...p.fields, id: p.sys.id };
  });

  return {
    props: {
      posts,
    },
  };
}
