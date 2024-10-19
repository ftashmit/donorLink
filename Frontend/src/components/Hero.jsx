import illustration from "../assets/illustration.png";
import { Link } from "react-scroll";
const Hero = () => {
	return (
		<div className="flex justify-between items-center  mx-auto container">
			<div className=" text-white w-1/2">
				<span className="text-2xl mt-3 text-red-500 font-bold">
					Donate blood, Save life!
				</span>
				<h1 className="text-6xl leading-normal font-bold mt-3 text-black">
					Your <span className="text-red-500 font-bold">Link 🩸</span> to a life
					saving moment.
				</h1>

				<div className="flex items-center gap-10 my-10">
					<button className="bg-red-500 p-4 w-[200px] rounded-lg text-white cursor-pointer">
						<Link to="contact">Donate Now</Link>
					</button>
					<button className="bg-gray-500 p-4 w-[200px] rounded-lg text-white cursor-pointer">
						CALL : (+125) 262 728
					</button>
				</div>
			</div>
			<img className="w-[500px]" src={illustration} alt="" />
		</div>
	);
};

export default Hero;
