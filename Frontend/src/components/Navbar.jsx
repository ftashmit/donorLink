import { Link } from "react-scroll";

const Navbar = () => {
	return (
		<div className="flex items-center gap-10 h-[100px] px-[200px] mb-16">
			<img src="/IMG_7495.PNG" alt="logo"  height={200} width={200} />

			<div className="flex items-center mx-12 gap-10 cursor-pointer">
				<Link
					to="hero"
					smooth={true}
					duration={1000}
					className="mr-3 text-[18px] font-medium"
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
			</div>
		</div>
	);
};

export default Navbar;
