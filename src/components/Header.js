import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const navHandler = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1650px] mx-auto px-2  text-white">
      <h1 className=" mx-10 text-3xl font-bold text-[#00df9a] justify-start">
        TARUN SACHAN
      </h1>
      <ul className="hidden md:flex ">
        <li className="p-4">Home</li>
        <li className="p-4"><AnchorLink href="#about">About</AnchorLink></li>
        <li className="p-4"><AnchorLink href="#projects">Projects</AnchorLink></li>
        <li className="p-4"><AnchorLink href="#footer">Contact</AnchorLink></li>
      </ul>
      <div onClick={navHandler} className="block md:hidden" >
        {!nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
      <div className={!nav ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300eb] ease-in-out duration-500" : "fixed left-[-100%]" } >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
          TARUN SACHAN
        </h1>
        <ul className="p-4 uppercase">
          <li className="p-4 border-b border-gray-600"><AnchorLink href="#about">About</AnchorLink></li>
          <li className="p-4 border-b border-gray-600"><AnchorLink href="#projects">Projects</AnchorLink></li>
          <li className="p-4 border-b border-gray-600"><AnchorLink href="#footer">Contact</AnchorLink></li>
          
          
        </ul>
      </div>
    </div>
  );
};

export default Navbar;