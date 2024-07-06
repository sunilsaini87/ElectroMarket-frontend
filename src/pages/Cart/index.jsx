// import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import HomepageHeader from "../../components/HomepageHeader";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
// import { backend_route } from "../../config";
// import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext";

export default function CartPage() {
  const [lockedproduct, setlockedproduct] = useState([]);
  const userid = localStorage.getItem("user_id");
  const { isauthenticated } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    async function lockedItems() {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/user/lockedproduct`,
          {
            UserId: userid,
          }
        );
        console.log(response.data.product.Product[0].ImageLink);
        setlockedproduct(response.data.product.Product);
      } catch (error) {
        console.error(error);
      }
    }
    lockedItems();
  }, []);

  if (!isauthenticated) {
    navigate("/user/signin");
    return;
  }
  if (!lockedproduct) {
    return (
      <div className="py-20 flex justify-center text-2xl">Loading....</div>
    );
  }
  return (
    <>
      <Helmet>
        <title>ElectroMarket</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <HomepageHeader />
      <section className="bg-white py-8 antialiased dark:bg-gray-800 md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 className="text-xl font-semibold py-10 text-gray-900 dark:text-white sm:text-2xl">
            Shopping Cart
          </h2>

          <div className="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-4">
            {lockedproduct.length > 0 ? (
              lockedproduct.map((details) => {
                {
                  return (
                    <Link to={`/aboutproduct?id=${details.id}`}>
                      <div className="relative group">
                        <div className="overflow-hidden aspect-w-1 aspect-h-1">
                          <img
                            className="object-cover  rounded-xl transition-all duration-300 group-hover:scale-125"
                            src={`http://localhost:3001/${details.ImageLink}`}
                            alt=""
                          />
                        </div>
                        <div className="flex items-start justify-between mt-4 ">
                          <div className=" flex flex-col gap-1">
                            <h3 className="text-xs font-normal dark:text-white sm:text-sm md:text-base line-clamp-2">
                              <a href="#" title="">
                                {details.Title}
                                <span
                                  className="absolute inset-0"
                                  aria-hidden="true"
                                ></span>
                              </a>
                            </h3>
                          </div>

                          <div className="text-right w-3/4 flex-grow">
                            <p className="text-xs font-semibold dark:text-white sm:text-sm md:text-base ">
                              Rs. {details.Price}/-
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                }
              })
            ) : (
              <div className="text-2xl font-semibold text-white flex justify-center items-center">
                {" "}
                No Products to Display. &nbsp;
                <Link
                  to={"/productgrid"}
                  className="text-violet-600 font-bold text-3xl"
                >
                  Shop Now...
                </Link>{" "}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-8 p-8 w-full">
            {lockedproduct.length > 0 ? (
              lockedproduct.map((product) => {
                <div className="border-[1px] rounded-xl p-4 flex gap-10">
                  <img
                    className="rounded-lg w-80 h-full"
                    src={`http://localhost:3001/${product.ImageLink}`}
                  ></img>
                  <div>{product.Title}</div>
                  <div>{product.Description}</div>
                </div>;
              })
            ) : (
              <div className="text-2xl font-semibold text-white flex justify-center items-center">
                {" "}
                No Products to Display. &nbsp;
                <Link
                  to={"/productgrid"}
                  className="text-violet-600 font-bold text-3xl"
                >
                  Shop Now...
                </Link>{" "}
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
