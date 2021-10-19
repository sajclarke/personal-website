import Link from "next/link";
import { useTheme } from "next-themes";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

export default function Header({ title }) {
  const { theme, setTheme } = useTheme();
  // console.log(theme);
  return (
    <nav className="bg-transparent text-gray-600 dark:text-gray-200">
      <div className="max-w-5xl mx-5 md:mx-auto flex justify-between items-center py-3 ">
        <ul className="flex items-center space-x-6 list-none">
          <li>
            <Link href="/" passHref>
              <a className="text-gray-600 hover:bg-indigo-100 hover:text-indigo-500  rounded p-2">
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about" passHref>
              <a className="text-gray-600 hover:bg-indigo-100 hover:text-indigo-500  rounded p-2">
                About
              </a>
            </Link>
          </li>
        </ul>
        <button>
          {theme === "light" ? (
            <HiOutlineMoon
              className="w-5 h-5"
              onClick={() => setTheme("dark")}
            />
          ) : (
            <HiOutlineSun
              className="w-5 h-5"
              onClick={() => setTheme("light")}
            />
          )}
        </button>
      </div>
    </nav>
  );
}
