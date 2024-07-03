import { Helmet } from "react-helmet";
import HomepageHeader from "../../components/HomepageHeader";
import Footer from "../../components/Footer";
import { useEffect } from "react";
import axios from "axios";
import { backend_route } from "../../config";
import { useState } from "react";
import { Link } from "react-router-dom";

const UserDetails = () => {
  const userEmail = localStorage.getItem("user_email");
  const userName = localStorage.getItem("user_name");
  const [wishlist, setwishlist] = useState([]);

  useEffect(() => {
    async function wishlist() {
      const response = await axios.get(
        `${backend_route}/user/wishlist/${userEmail}`
      );
      console.log(response.data.wishList.WishList);
      setwishlist(response.data.wishList.WishList);
    }
    wishlist();
  }, []);
  return (
    <>
      <Helmet>
        <title>ElectroMarket</title>
        <meta name="description" content="Web site" />
      </Helmet>
      <div className="flex w-full flex-col items-center gap-10 bg-gray-600 dark:bg-gray-800">
        <HomepageHeader shopOne="Sign Up" className="self-stretch" />
        <div className="text-white py-12 flex flex-col items-center">
          <div className="text-5xl text-violet-700 font-semibold my-3">
            Your Details
          </div>
          <div className="text-3xl text-gray-200">
            Name : <span className="text-2xl text-gray-100">{userName}</span>
          </div>
          <div className="text-3xl text-gray-200">
            Email : <span className="text-2xl text-gray-100">{userEmail}</span>
          </div>
          <div className="text-4xl text-violet-600 font-semibold my-3 mt-10">
            Your WishList
          </div>

          <div className="grid grid-cols-2 gap-6 mt-10 lg:mt-6 lg:gap-8 lg:grid-cols-4 px-6">
            {wishlist
              ? wishlist.map((details) => {
                  return (
                    // eslint-disable-next-line react/jsx-key
                    <Link to={`/aboutproduct?id=${details.Product.id}`}>
                      <div className="relative group">
                        <div className="overflow-hidden aspect-w-1 aspect-h-1">
                          <img
                            className="object-cover rounded-xl   transition-all duration-300 group-hover:scale-125"
                            src={`http://localhost:3001/${details.Product.ImageLink}`}
                            alt=""
                          />
                        </div>
                        <div className="flex items-start justify-between mt-4 ">
                          <div className=" flex flex-col gap-1">
                            <h3 className="text-xs font-normal dark:text-white sm:text-sm md:text-base line-clamp-2">
                              <a href="#" title="">
                                {details.Product.Title}
                                <span
                                  className="absolute inset-0"
                                  aria-hidden="true"
                                ></span>
                              </a>
                            </h3>
                          </div>

                          <div className="text-right w-3/4 flex-grow">
                            <p className="text-xs font-semibold dark:text-white sm:text-sm md:text-base ">
                              Rs. {details.Product.Price}/-
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })
              : ""}
          </div>
        </div>
        <Footer className="self-stretch" />
      </div>
    </>
  );
};

export default UserDetails;
