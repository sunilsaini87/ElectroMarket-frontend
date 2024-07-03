function HomepageHerosection() {
  return (
    <>
      <div className="bg-gray-800 py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 lg:w-2/3">
              <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-6">
                Welcome to SLIET&apos;s <br className="hidden md:block" />
                <span className="text-cyan-700">ElectroMarket</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-8">
                Your one-stop shop for the best electrical Products. Fast,
                secure, and reliable shopping experience.
              </p>
              <div className="flex gap-2">
                <a
                  href="/productgrid"
                  className="bg-cyan-700 hover:bg-cyan-800 text-white font-bold py-3 px-6 rounded-md"
                >
                  Shop Now
                </a>
                <a
                  href="/about"
                  className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-md"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="md:w-1/2 lg:w-1/3 mt-8 md:mt-0">
              <img
                src="/ieengineer26.jpg"
                alt="Electrical Products Hero Image"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomepageHerosection;
