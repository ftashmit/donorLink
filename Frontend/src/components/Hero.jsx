const Hero = () => {
  return (
    <div className="relative bg-[url('/BloodPressurCheck900x450.jpg')] bg-no-repeat bg-cover bg-center h-[85vh] px-[200px]">
      <div className="absolute inset-0 bg-black opacity-50"></div> 
      <div className="flex flex-col text-white w-[50%] pt-[10%] relative"> 
        <span className="text-[30px] mt-3 font-bold">Donate blood, and gift life a chance to thrive.</span>
        <h1 className="text-[38px] mt-3 font-bold">
          Your Donation Can Create Smiles In The Lives of Others.
        </h1>
        <div className="flex items-center mt-[20px]">
          <button className="bg-blue-500 p-[10px] w-[200px] text-white cursor-pointer mr-9 font-bold">
            Donate Now!
          </button>
          <button className="bg-blue-300 p-[10px] w-[200px] text-white cursor-pointer font-bold">
            CALL: +91 9876543210
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
