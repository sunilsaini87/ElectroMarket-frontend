import { useAuthContext } from "../../Context/AuthContext";

function HomepageHeader() {
  const { isauthenticated, logout } = useAuthContext();
  const user = localStorage.getItem("user_email");
  if (isauthenticated) {
    return (
      <div>
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src="/ElectroMarket.svg" className="h-8" alt="Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Electromarket
              </span>
            </a>
            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a
                    href="/"
                    className="block py-2 px-3 text-white bg-cyan-700 rounded md:bg-transparent md:text-cyan-700 md:p-0 md:dark:text-cyan-500"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/productgrid"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cyan-700 md:p-0 md:dark:hover:text-cyan-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Shop
                  </a>
                </li>
                <li>
                  <a
                    href="/About"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cyan-700 md:p-0 md:dark:hover:text-cyan-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/Contact"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cyan-700 md:p-0 md:dark:hover:text-cyan-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      logout();
                    }}
                    className="block cursor-pointer py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cyan-700 md:p-0 md:dark:hover:text-cyan-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Logout
                  </a>
                </li>
                <li>
                  <a
                    href="/userdetails"
                    className="block cursor-pointer py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cyan-700 md:p-0 md:dark:hover:text-cyan-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    {user}
                  </a>
                </li>

                <li>
                  <a
                    href="/Cart"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cyan-700 md:p-0 md:dark:hover:text-cyan-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    <img
                      src="/cart-shopping-svgrepo-com.svg"
                      alt="Cart"
                      className="object-contain h-[50px] sm:h-[40px] md:h-[30px] lg:h-[30px] w-auto"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
  return (
    <div>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="/ElectroMarket.svg" className="h-8" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Electromarket
            </span>
          </a>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="/"
                  className="block py-2 px-3 text-white bg-cyan-700 rounded md:bg-transparent md:text-cyan-700 md:p-0 md:dark:text-cyan-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/productgrid"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cyan-700 md:p-0 md:dark:hover:text-cyan-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="/About"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cyan-700 md:p-0 md:dark:hover:text-cyan-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/Contact"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cyan-700 md:p-0 md:dark:hover:text-cyan-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/user/signup"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cyan-700 md:p-0 md:dark:hover:text-cyan-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Sign Up
                </a>
              </li>
              <li>
                <a
                  href="/user/signin"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cyan-700 md:p-0 md:dark:hover:text-cyan-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Sign in
                </a>
              </li>
              <li>
                <a
                  href="/Cart"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cyan-700 md:p-0 md:dark:hover:text-cyan-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <img
                    src="/cart-shopping-svgrepo-com.svg"
                    alt="Cart"
                    className="object-contain h-[50px] sm:h-[40px] md:h-[30px] lg:h-[30px] w-auto"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HomepageHeader;
