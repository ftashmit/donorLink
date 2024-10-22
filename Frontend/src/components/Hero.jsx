import { scroller } from 'react-scroll';
import illustration from "../assets/illustration.png";

const Hero = () => {
  const scrollToContact = () => {
    scroller.scrollTo('contact', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <div className="flex justify-between items-center mx-auto container">
      <div className="text-white w-1/2 ml-20">
        <span className="text-2xl mt-3 text-red-500 font-bold">
          Donate blood, Save life!
        </span>
        <h1 className="text-5xl leading-normal mt-3 text-black font-extrabold ">
          Your <span className="text-red-500 font-extrabold gradient-text ">Link</span> to
          a life-saving moment.
        </h1>

        <div className="flex items-center gap-10 my-10">
          <button
            className="bg-red-500 p-4 w-[200px] rounded-lg text-white cursor-pointer font-bold hover:bg-blue-500"
            onClick={scrollToContact}
          >
            Donate Now
          </button>
          <button className="bg-gray-500 p-4 w-[250px] rounded-lg text-white cursor-pointer font-medium hover:bg-gray-600">
            CALL : (+125)262728
          </button>
        </div>
      </div>
      <img className="w-[600px] h-[500px] mr-20 px-[-20]" src={illustration} alt="" />
    </div>
  );
};

export default Hero;
