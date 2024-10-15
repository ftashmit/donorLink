const Featured = () => {
    return (
      <div className="flex px-[200px] mt-[100px]">
        <div className="bg-gray-200 h-[400px] w-[500px] z-10 mt-[20px] ">
          <div className="m-10">
            <h3 className="text-[25px]">Who We Are?</h3>
            <hr className="bg-red-500 w-[100px] h-[3px] my-[20px]" />
            <span className="mt-[20px]">
              DonorLink serves as a community hub, bringing together blood donors and recipients, while adapting to the dynamic healthcare landscape.
            </span>
            <ul>
              <li className="mt-3">
                1. Expert blood donors with oversight from medical professionals.
              </li>
              <li className="mt-3">
                2. Enhancing engagement with our community members.
              </li>
              <li className="mt-3">
                3. Comprehensive evaluation, diagnosis, and treatment of the highest standard.
              </li>
              <li className="mt-3">
                4. Thoroughly analyze to ensure consistency and alignment.
              </li>
              <li className="mt-3">
                5. Specialized support from a diverse healthcare team.
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default Featured;
  