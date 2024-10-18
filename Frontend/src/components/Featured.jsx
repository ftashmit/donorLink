const Featured = () => {
  return (
    <div className="flex px-[200px] mt-[100px]">
      <div className="bg-blue-200 h-[450px] w-[470px] z-10 mt-[20px] ">
        <div className="m-10">
          <h3 className="text-[25px] text-blue-800">Who We Are?</h3>
          <hr className="bg-blue-500 w-[100px] h-[3px] my-[20px]" />
          <span className="mt-[20px]">
            DonorLink serves as a public donation center that connects individuals willing to donate blood within the evolving healthcare landscape.
          </span>
          <ul>
            <li className="mt-3">1. Expert blood donors supported by clinical oversight.</li>
            <li className="mt-3">2. Enhancing communication with our members.</li>
            <li className="mt-3">3. Comprehensive evaluation, diagnosis, and treatment.</li>
            <li className="mt-3">4. Conduct thorough reviews to ensure alignment.</li>
            <li className="mt-3">5. Specialized care from a multidisciplinary team.</li>
          </ul>
        </div>
      </div>
      <div className="h-[450px] w-[500px] ml-[-30px]">
        <video
          src="/video.mp4"
          height="450px"
          width="500px"
          loop
          muted
          autoPlay
        />
      </div>
    </div>
  );
};

export default Featured;
