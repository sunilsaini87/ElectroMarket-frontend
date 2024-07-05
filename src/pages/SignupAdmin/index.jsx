import { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../../components/Footer";
import HomepageHeader from "../../components/HomepageHeader";
import { useAuthContext } from "../../Context/AuthContext";
import toast from "react-hot-toast";
import { backend_route } from "../../config";

export default function SignUpPageAdmin() {
  // const [PhoneNumber, setPhoneNumber] = useState("+91");

  const [data, setData] = useState({
    AdminName: "",
    Email: "",
    Password: "",
    PhoneNumber: "+91",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { isauthenticated, login } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!data.Email.includes("@sliet.ac.in")) {
      toast.error("Signup with your SLIET's Email-Id");
      return;
    }
    if (isNaN(data.PhoneNumber) || data.PhoneNumber.length !== 10) {
      toast.error("Not a number");
      return;
    }

    try {
      const url = `${backend_route}/admin/signup`;
      const response = await axios.post(url, data);
      toast.success("Signed up successfully.");
      login(response.data.token, response.data.admin);
      navigate("/admin/createproduct");
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
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
              href="#"
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
                <form
                  className="space-y-4 md:space-y-6"
                  onSubmit={handleSubmit}
                  action="#"
                >
                  <div>
                    <label
                      htmlFor="adminname"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      AdminName
                    </label>
                    <input
                      type="text"
                      name="username"
                      value={data.AdminName}
                      onChange={(e) => {
                        setData({ ...data, AdminName: e.target.value });
                      }}
                      id="username"
                      placeholder="AdminName"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={data.Email}
                      onChange={(e) => {
                        setData({ ...data, Email: e.target.value });
                      }}
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="email"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your phone number
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="1234567890"
                      onChange={(e) => {
                        setData({ ...data, PhoneNumber: e.target.value });
                      }}
                      className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 
                        
                      `}
                      required=""
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      onChange={(e) => {
                        setData({ ...data, Password: e.target.value });
                      }}
                      value={data.Password}
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        aria-describedby="terms"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
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
                  {error && <div>{error}</div>}
                  <button
                    type="submit"
                    className="w-full text-white bg-primary-600 border-[1px] border-gray-400 shadow-sm shadow-white/50 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Create an account
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account?{" "}
                    <a
                      href="/admin/signin"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Login here as Admin
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
