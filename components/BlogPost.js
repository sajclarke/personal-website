import dayjs from "dayjs";

function BlogListItem({ postData }) {
  const { date, title, excerpt, hrefLink } = postData;

  return (
    <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline mb-10">
      <dl>
        <dt className="sr-only">Published on</dt>
        <dd className="text-base leading-6 font-medium text-gray-500">
          <time dateTime={date}>{dayjs(date).format("MMMM D, YYYY")}</time>
        </dd>
      </dl>
      <div className="space-y-5 xl:col-span-3">
        <div className="space-y-6">
          <h2 className="text-2xl leading-8 font-bold tracking-tight">
            {title}
          </h2>
        </div>
        <div className="prose max-w-none text-gray-500">
          <p>{excerpt}</p>
        </div>
        <div className="text-base leading-6 font-medium"><a className="text-teal-500 hover:text-teal-600" aria-label="Read &quot;Tailwind CSS v2.0&quot;" href={`/posts/${hrefLink}`}>Read more →</a></div>
      </div>
    </article>
  );
}

export default BlogListItem;
