import Link from "next/link";

export default function Header({ title }) {
  return (
    <nav className="bg-white shadow mt-0 sticky z-10 top-0">
      <div className="max-w-5xl mx-auto flex justify-between items-center py-2">
        <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-semibold">
          <Link href="/">
            <div className="flex text-gray-600  cursor-pointer">
              <span className="text-xl pl-2">
                <i className="em em-grinning"></i> Shannon Clarke
              </span>
            </div>
          </Link>
        </div>
        <div className="flex w-full md:w-1/2 justify-end">
          <ul className="list-none">
            {["About Me"].map((item, index) => (
              <li key={index} className="mr-1">
                <Link href={`/${item.toLowerCase()}`}>
                  <a className="inline-block text-gray-600 hover:bg-indigo-100 hover:text-indigo-500  rounded py-2 px-4">
                    {item}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
