import video1 from "../assets/1.mp4";
import video2 from "../assets/2.mp4";


const HeroSection = () => {
 
  return (
    <div id="home" className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-center tracking-wide text-white hover:scale-105 transform transition-all duration-300">
        Unlock Your Full
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text hover:from-yellow-500 hover:to-pink-600 transition duration-300 ease-in-out">
          {" "}Trading Potential
        </span>
      </h1>

      <p className="mt-10 text-lg text-center text-gray-300  max-w-4xl">
        Empower your trading journey and turn your ambitions into profits with our mentorship. Get started today with our guidance to help you become a successful trader!
      </p>
      <div className="flex justify-center my-10">
        <a
          href="https://t.me/futuretrader02"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md hover:scale-105 transform transition-all duration-300"
        >
          Start for free
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4 hover:scale-105 transform transition-all duration-300"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4 hover:scale-105 transform transition-all duration-300"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
