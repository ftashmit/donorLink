import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-[100px] px-[200px]">
      <img src="/logo.PNG" alt="" height={100} width={200} className="cursor-pointer"/>
      <div className="flex items-center justify-evenly cursor-pointer">
        <Link to="hero" smooth={true} duration={1000} className="mr-3 text-[18px]">
          Home
        </Link>
        <Link to="featured" smooth={true} duration={1000} className="mr-3 text-[18px]">
          About Us
        </Link>
        <Link to="contact" smooth={true} duration={1000} className="mr-3 text-[18px]">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Navbar;