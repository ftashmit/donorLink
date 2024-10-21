import { Link } from "react-scroll";

const Navbar = () => {
	return (
			<div className="flex gap-10  h-[100px] ml-20 mb-10 mr-20 justify-between ">
			<img src="/IMG_7495.PNG" alt="logo"  height={200} width={200} />

			<div className="flex items-center mr-50 gap-10 cursor-pointer justify-end">
				<Link
					to="hero"
					smooth={true}
					duration={1000}
					className="mr-3 text-[18px] font-medium ml-10"
				>
					Home
				</Link>
				<Link
					to="featured"
					smooth={true}
					duration={1000}
					className="mr-3 text-[18px] font-medium"
				>
					About Us
				</Link>
				<Link
					to="footer"
					smooth={true}
					duration={1000}
					className="mr-3 text-[18px] font-medium"
				>
					Contact Us
				</Link>
				<Link
					to="footer"
					smooth={true}
					duration={1000}
					className="mr-3 text-[18px] font-medium"
				>
					Testimonials
				</Link>
			</div>
		</div>
		
	);
};

export default Navbar;
