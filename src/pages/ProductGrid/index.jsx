// import React from "react";
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet";
import HomepageHeader from "../../components/HomepageHeader";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { backend_route } from "../../config";


function FeaturedProducts() {

  const [allproductdetails,setallproductdetails] = useState([]);

  useEffect(()=>{
     async function getallProducts() {
           const response = await axios.get(`${backend_route}/product/bulk`)
           setallproductdetails(response.data.allproducts);
     }
     getallProducts();
  },[])


  if (!allproductdetails) {
    return <div>Loading....</div>
  }

  
  return (
    <>
      <Helmet>
        <title>ElectroMarket</title>
        <meta name="description" content="" />
      </Helmet>
      <section className="py-12 bg-white sm:py-16 lg:py-20 dark:bg-gray-800">
        <HomepageHeader shopOne="Sign in" className="self-stretch" />
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold dark:text-white sm:text-3xl">
              Our Featured Items
            </h2>
            <p className="mt-4 text-base font-normal leading-7 text-gray-600 dark:text-gray-400">
              Explore our wide range of high-quality electrical products,
              carefully selected to meet all your needs.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-4">
          {allproductdetails.map((details)=>{
            {
              return details.Lock===true ? "" :  <Link to={`/aboutproduct?id=${details.id}`}>
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
            }
              
          })}  
         
            

            
          </div>
        </div>
        
        
      </section>
      <Footer className="self-stretch" />
    </>
  );
}

export default FeaturedProducts;
