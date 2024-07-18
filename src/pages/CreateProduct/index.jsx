import { useState } from "react";
import Helmet from "react-helmet";
import Footer from "../../components/Footer";
import HomepageHeader from "../../components/HomepageHeader";
import { toast } from "react-hot-toast";
import axios from "axios"; // Import Axios

const CreateProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState("");
  const [youtubeLink, setYoutubeLink] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!localStorage.getItem("token")) {
        toast.error("Please log in to create a product.");
        return;
      }

      const formData = new FormData();
      formData.append("Title", title);
      formData.append("Description", description);
      formData.append("file", image);
      formData.append("Price", price);
      formData.append("YoutubeLink", youtubeLink);

      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/v1/admin/createproduct`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data", // Set content type for FormData
          },
        }
      );

      const data = response.data;

      if (response.status !== 201) {
        toast.error(data.message || "Something went wrong.");
        return;
      }

      toast.success(data.message);

      // Clear form fields
      setTitle("");
      setDescription("");
      setImage(null);
      setPrice("");
      setYoutubeLink("");

      console.log(data);
    } catch (error) {
      console.error("Error while creating product:", error);
      toast.error(
        "An error occurred while creating the product. Please try again."
      );
    }
  };

  return (
    <>
      <Helmet>
        <title>ElectroMarket - Add Product</title>
        <meta
          name="description"
          content="Add a new product to the ElectroMarket"
        />
      </Helmet>
      <div className="flex flex-col items-center gap-10 bg-white min-h-screen dark:bg-gray-300">
        <HomepageHeader shopOne="Sign in" className="w-full" />
        <section className="py-8 bg-white dark:bg-gray-800 antialiased w-full">
          <div className="flex items-center justify-center w-full">
            <div className="relative p-4 w-full max-w-2xl h-full md:h-auto dark:bg-gray-900">
              <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-900 sm:p-5">
                <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Add Product
                  </h3>
                </div>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                  <div className="grid gap-4 mb-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="image"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Image
                      </label>
                      <input
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                        onChange={(e) => setImage(e.target.files[0])}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="title"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Title
                      </label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="price"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Price
                      </label>
                      <input
                        type="number"
                        id="price"
                        name="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="youtubeLink"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        YouTube Link
                      </label>
                      <input
                        type="url"
                        id="youtubeLink"
                        name="youtubeLink"
                        value={youtubeLink}
                        onChange={(e) => setYoutubeLink(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        required
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="description"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Description
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows="4"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Write product description here"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    <svg
                      className="mr-1 -ml-1 w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Add new product
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer className="w-full" />
    </>
  );
};

export default CreateProduct;
