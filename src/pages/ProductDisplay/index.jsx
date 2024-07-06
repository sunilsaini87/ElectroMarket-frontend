import Helmet from "react-helmet";
import HomepageHeader from "../../components/HomepageHeader";
import Footer from "../../components/Footer";
import Chatbot from "../ChatBot";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
// import { backend_route } from "../../config";
import { useAuthContext } from "../../Context/AuthContext";
import { toast } from "react-hot-toast";

function ProductDisplay() {
  const [productdetails, setproductdetails] = useState({
    Title: "",
    Description: "",
    AdminName: "",
    Image: "",
    YoutubeLink: "",
    AdminEmail: "",
    Price: "",
    AdminPhoneNumber: "",
  });
  const { isauthenticated } = useAuthContext();
  const navigate = useNavigate();
  const [addfavorite, setaddfavorite] = useState(false);

  const [params] = useSearchParams();
  const productid = params.get("id");
  const userid = localStorage.getItem("user_id");

  useEffect(() => {
    async function getproductdetails() {
      const response = await axios.get(
        `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/v1/product/${productid}`
      );
      const details = response.data.product;
      setproductdetails({
        Title: details.Title,
        Description: details.Description,
        Image: details.ImageLink,
        Price: details.Price,
        YoutubeLink: details.YoutubeLink,
        AdminName: details.Admin.AdminName,
        AdminEmail: details.Admin.Email,
        AdminPhoneNumber: details.Admin.PhoneNumber,
      });
      console.log(response.data);
    }
    getproductdetails();
  }, []);

  const handlebuyclick = async () => {
    if (!isauthenticated) {
      navigate("/user/signin");
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/product/buy`,
        {
          ProductId: productid,
          UserId: userid,
        }
      );
      toast.success(response.data.message);
      navigate("/cart");
    } catch (error) {
      console.error(error);
    }
  };

  const handleclick = async () => {
    if (!isauthenticated) {
      navigate("/user/signin");
      return;
    }

    if (!addfavorite) {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/user/wishlist`,
          {
            ProductId: productid,
            UserId: userid,
          },
          {
            headers: {
              Authorization: `${localStorage.getItem("token")}`,
            },
          }
        );
        toast.success(response.data.message);
        setaddfavorite(!addfavorite);
        return;
      } catch (error) {
        console.error(error);
        return;
      }
    } else {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/user/deletewishlist`,
          {
            ProductId: productid,
            UserId: userid,
          },
          {
            headers: {
              Authorization: `${localStorage.getItem("token")}`,
            },
          }
        );
        toast.success(response.data.message);
        setaddfavorite(!addfavorite);
      } catch (error) {
        console.error(error);
        return;
      }
    }
  };
  if (!productdetails) {
    return <div>Loading</div>;
  }
  return (
    <>
      <Helmet>
        <title>ElectroMarket</title>
        <meta name="description" content="Product details page" />
      </Helmet>

      <div className="flex w-full flex-col items-center gap-10 bg-white dark:bg-gray-800 min-h-screen">
        <HomepageHeader shopOne="Sign in" className="self-stretch" />
        <section className="py-8 bg-white md:py-16 dark:bg-gray-800 antialiased self-stretch flex flex-col md:flex-row gap-4 w-full">
          <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 w-full md:basis-3/4">
            <div className="flex gap-20 items-start">
              <div className="shrink-0 max-w-md lg:max-w-lg ">
                <img
                  className="w-96 h-80 z-20"
                  src={`http://localhost:3001/${productdetails.Image}`}
                  alt={productdetails.Title}
                />
              </div>

              <div className="mt-6 sm:mt-8 lg:mt-0">
                <h1 className="text-xl font-semibold text-gray-900 sm:text-4xl tracking-tight dark:text-white">
                  {productdetails.Title}
                </h1>
                <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                  <p className="text-2xl font-semibold text-gray-900 sm:text-3xl dark:text-white">
                    Rs. {productdetails.Price}/-
                  </p>
                </div>

                <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                  <button
                    onClick={handleclick}
                    className={`flex items-center justify-center py-2.5 px-5 text-sm font-medium  focus:outline-none bg-white rounded-lg border  hover:bg-gray-100 hover:text-primary-700    dark:bg-gray-800  dark:hover:bg-gray-700  ${addfavorite ? "text-red-500 border-red-500 dark:hover:text-red-400" : "text-gray-200 border-gray-600 dark:hover:text-white"}`}
                  >
                    <svg
                      className="w-5 h-5 -ml-2 mr-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                      />
                    </svg>
                    Add to favorites
                  </button>

                  <button
                    onClick={handlebuyclick}
                    className="text-white bg-violet-700 mt-4 sm:mt-0 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-7 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center justify-center"
                    role="button"
                  >
                    Interested
                  </button>
                </div>
              </div>
            </div>
            <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
            <div className="">
              <div>
                <div className="mb-6 text-gray-500 dark:text-gray-200">
                  <div className="text-4xl font-semibold text-gray-100 my-2">
                    Description
                  </div>
                  {productdetails.Description}
                </div>
                <div className="mb-6 text-gray-500 dark:text-gray-200">
                  <div className="text-4xl font-semibold text-gray-100 my-2">
                    Youtube Link
                  </div>
                  <a
                    className="underline underline-offset-1 text-blue-500"
                    href={productdetails.YoutubeLink}
                  >
                    {productdetails.YoutubeLink}
                  </a>
                </div>
              </div>

              <div>
                <div className="mb-6 text-gray-500 dark:text-gray-200">
                  <div className="text-2xl font-semibold text-gray-100 my-2">
                    Seller Email
                  </div>
                  <a href={`mailto:${productdetails.AdminEmail}`}>
                    {productdetails.AdminEmail}
                  </a>
                </div>
                <div className="mb-6 text-gray-500 dark:text-gray-200">
                  <div className="text-2xl font-semibold text-gray-100 my-2">
                    Seller Name
                  </div>

                  <p>{productdetails.AdminName}</p>
                </div>
                <div className="mb-6 text-gray-500 dark:text-gray-200">
                  <div className="text-2xl font-semibold text-gray-100 my-2">
                    Seller PhoneNumber
                  </div>

                  <p>{productdetails.AdminPhoneNumber}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex flex-col items-center md:basis-1/4">
            <Chatbot />
          </div>
        </section>
        <Footer className="self-stretch" />
      </div>
    </>
  );
}

export default ProductDisplay;
