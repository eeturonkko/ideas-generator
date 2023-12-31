"use client";
import { UserButton, SignInButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { responseFromPromptAtom } from "@/atoms/atoms";
import { useAtom } from "jotai";

function Header() {
  const { isSignedIn } = useUser();
  const router = useRouter();
  const [, setResponseFromPrompt] = useAtom(responseFromPromptAtom);

  function handleOnClick() {
    router.push("/generate-ideas");
    setResponseFromPrompt(null);
  }

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            IdeasGenerator
          </span>
        </Link>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            {isSignedIn ? (
              <>
                <li>
                  <button
                    onClick={handleOnClick}
                    className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                    aria-current="page"
                  >
                    Generate ideas
                  </button>
                </li>
                <li>
                  <Link
                    href="/dashboard"
                    className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                    aria-current="page"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <UserButton afterSignOutUrl="/" />
                </li>
              </>
            ) : (
              <li className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">
                <SignInButton />
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
