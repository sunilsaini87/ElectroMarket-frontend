// import React from 'react'
import HomepageHeader from "../../components/HomepageHeader";
import Footer from "../../components/Footer";

function About() {
  return (
    <>
      <HomepageHeader shopOne="Shop" className="self-stretch" />
      <section className="bg-white dark:bg-gray-800">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Welcome to ElectroMarket: Your Premier Destination for Electrical
              Goods
            </h2>
            <p className="mb-6">
              ElectroMarket isn&apos;t just another online store; it&apos;s an
              immersive experience crafted to redefine how you shop for
              electrical goods. As you step into our digital world, you&apos;re
              greeted with an extensive catalog of top-tier products curated to
              meet the diverse needs of professionals and enthusiasts alike.
            </p>
            <p className="mb-6">
              Our commitment to excellence permeates every aspect of our
              platform. From the moment you arrive, our user-centric design
              guides you effortlessly through a rich tapestry of offerings. Each
              product page is a treasure trove of information, adorned with
              detailed descriptions, specifications, and authentic customer
              reviews, empowering you to make well-informed decisions.
            </p>
            <p className="mb-6">
              Security and efficiency are the cornerstones of our service. Our
              robust payment infrastructure ensures your transactions are safe
              and secure, while our streamlined logistics network guarantees
              swift delivery to your doorstep. We take pride in providing a
              seamless shopping experience, allowing you to focus on what
              matters most&mdash;exploring your passion for electronics.
            </p>
            <p className="mb-6">
              But ElectroMarket is more than just a marketplace; it&apos;s a
              vibrant community of like-minded individuals bound by a shared
              love for innovation and technology. Our real-time chat support
              isn&apos;t merely a feature; it&apos;s a lifeline connecting you
              with our team of experts, ready to assist you every step of the
              way.
            </p>
            <p>
              Whether you&apos;re a seasoned professional or an aspiring DIY
              enthusiast, ElectroMarket invites you to embark on a journey of
              discovery. Join us as we push the boundaries of what&apos;s
              possible and redefine the future of electrical shopping together.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src="/aa.jpeg"
              alt="ElectroMarket user interface"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="\public\Images\bb.png"
              alt="ElectroMarket customer support"
            />
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white">
              Meet Our Team
            </h2>
            <p className="font-light text-gray-600 lg:mb-16 sm:text-lg dark:text-gray-400">
              Get to know the dedicated individuals powering Electromarket. Our
              team is committed to providing exceptional service and support for
              all your electrical product needs.
            </p>
          </div>
        </div>
      </section>
      <Footer className="self-stretch" />
    </>
  );
}

export default About;
