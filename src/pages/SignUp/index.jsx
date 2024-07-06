import { Helmet } from "react-helmet";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../../components/Footer";
import HomepageHeader from "../../components/HomepageHeader";
import { useAuthContext } from "../../Context/AuthContext";

export default function SignUpPage() {
  const [userData, setUserData] = useState({
    UserName: "",
    Email: "",
    Password: "",
  });
  const [statusMessage, setStatusMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const changeInputHandler = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    setStatusMessage("");
    setIsSuccess(false);
  };

  const { login } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/v1/user/signup`,
        {
          UserName: userData.UserName,
          Email: userData.Email,
          Password: userData.Password,
        }
      );

      setIsSuccess(true);
      setStatusMessage("Registration successful");
      login(response.data.token, response.data.user);
      navigate("/");
    } catch (error) {
      setIsSuccess(false);
      if (error.response) {
        setStatusMessage(error.response.data.msg || "An error occurred");
      } else if (error.request) {
        setStatusMessage("No response from the server. Please try again.");
      } else {
        setStatusMessage("An error occurred. Please try again.");
      }
      console.error("Error during signup:", error);
    }
  };

  return (
    <>
      <Helmet>
        <title>ElectroMarket</title>
        <meta name="description" content="Web site" />
      </Helmet>
      <div className="flex w-full flex-col items-center gap-10 bg-gray-600 dark:bg-gray-800">
        <HomepageHeader shopOne="Sign Up" className="self-stretch" />
        <section className="bg-gray-50 dark:bg-gray-800 self-stretch">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a
              href="/"
              className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
            >
              <img
                className="w-8 h-8 mr-2"
                src="/ElectroMarket.svg"
                alt="logo"
              />
              ElectroMarket
            </a>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create an account
                </h1>

                {statusMessage && (
                  <p
                    className={`${
                      isSuccess ? "text-green-500" : "text-red-500"
                    } text-lg italic mb-4`}
                  >
                    {statusMessage}
                  </p>
                )}

                <form
                  className="space-y-4 md:space-y-6"
                  onSubmit={handleSubmit}
                >
                  <div>
                    <label
                      htmlFor="UserName"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      name="UserName"
                      onChange={changeInputHandler}
                      placeholder="Username"
                      value={userData.UserName}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="Email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="Email"
                      id="Email"
                      value={userData.Email}
                      onChange={changeInputHandler}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="email"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="Password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="Password"
                      placeholder="••••••••"
                      onChange={changeInputHandler}
                      value={userData.Password}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        aria-describedby="terms"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="terms"
                        className="font-light text-gray-500 dark:text-gray-300"
                      >
                        I accept the{" "}
                        <a
                          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                          href="#"
                        >
                          Terms and Conditions
                        </a>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Create an account
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account?{" "}
                    <a
                      href="/user/signin"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Login here
                    </a>
                  </p>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Sign Up As Admin{" "}
                    <a
                      href="/admin/signup"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Sign Up here
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
        <Footer className="self-stretch" />
      </div>
    </>
  );
}
