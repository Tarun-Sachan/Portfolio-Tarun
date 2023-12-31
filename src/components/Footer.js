// import React from "react";
// import {
//   FaDribbbleSquare,
//   FaFacebookSquare,
//   FaGithubSquare,
//   FaInstagram,
//   FaTwitterSquare,
// } from "react-icons/fa";

// function Footer() {
//   return (
//     <div className="max-w-[1240px] mx-auto py-16 px-4 flex flex-col justify-between lg:flex-row gap-8 text-gray-300 border-t border-gray-600">
//       <div className="max-w-[400px] ">
//         <h1 className="text-3xl font-bold text-[#00df9a] mx-auto">
//           TARUN SACHAN
//         </h1>
//         <p className="text-justify my-4">
//           A Frontend focused Web Developer building the Frontend of Websites and
//           Web Applications that leads to the success of the overall product
//         </p>
//       </div>
//       <div className="flex flex-col  ">
//       <h1 className="text-3xl font-bold text-[#00df9a]  ">
//           SOCIAL
//         </h1>
//         <div className="flex md:w-[75%] my-4">
//           <FaFacebookSquare size={40} className="mx-4"/>
//           <FaInstagram size={40} className="mx-4" />
//           <FaTwitterSquare size={40} className="mx-4" />
//           <FaGithubSquare size={40} className="mx-4" />
//           <FaDribbbleSquare size={40} className="mx-4" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Footer;

import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

function Footer() {
  return (
    // <div
    //   className="w-full py-1 px-4 text-gray-300"
    //   id="footer"
    // >
    //   <div>
    //     <h1 className="w-full text-3xl font-bold flex-[0.1] text-[#00df9a]">REACT.</h1>
    //     <p className="py-4">
    //       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
    //       ullam iste repellat consequatur libero reiciendis, blanditiis
    //       accusantium.
    //     </p>
    //   </div>
    //   <div className="lg:col-span-2 flex justify-between mt-6">
    //     <div className="flex justify-between md:w-[75%] my-6">
    //       <a href="https://www.facebook.com/tarun.sachan.1/">
    //         <FaFacebookSquare size={30} />{" "}
    //       </a>
    //       <FaInstagram size={30} />
    //       <FaTwitterSquare size={30} />
    //       <FaGithubSquare size={30} />
    //       <FaDribbbleSquare size={30} />
    //     </div>
    //   </div>
    //   {/* <div className="lg:col-span-2 flex justify-between mt-6">
    //     <div>
    //       <h6 className="font-medium text-gray-400">Solutions</h6>
    //       <ul>
    //         <li className="py-2 text-sm">Analytics</li>
    //         <li className="py-2 text-sm">Marketing</li>
    //         <li className="py-2 text-sm">Commerce</li>
    //         <li className="py-2 text-sm">Insights</li>
    //       </ul>
    //     </div>
    //     <div>
    //       <h6 className="font-medium text-gray-400">Support</h6>
    //       <ul>
    //         <li className="py-2 text-sm">Pricing</li>
    //         <li className="py-2 text-sm">Documentation</li>
    //         <li className="py-2 text-sm">Guides</li>
    //         <li className="py-2 text-sm">API Status</li>
    //       </ul>
    //     </div>
    //     <div>
    //       <h6 className="font-medium text-gray-400">Company</h6>
    //       <ul>
    //         <li className="py-2 text-sm">About</li>
    //         <li className="py-2 text-sm">Blog</li>
    //         <li className="py-2 text-sm">Jobs</li>
    //         <li className="py-2 text-sm">Press</li>
    //         <li className="py-2 text-sm">Careers</li>
    //       </ul>
    //     </div>
    //     <div>
    //       <h6 className="font-medium text-gray-400">Legal</h6>
    //       <ul>
    //         <li className="py-2 text-sm">Claim</li>
    //         <li className="py-2 text-sm">Policy</li>
    //         <li className="py-2 text-sm">Terms</li>
    //       </ul>
    //     </div>
    //   </div> */}
    // </div>

    <div className="flex bg-[#98ba7d] ">
      <div className="w-2">
        <h1>Tarun Sachan</h1>
        <p>Hello There welcome to my profile</p>
      </div>
      <div className="flex justify-between md:w-[75%] my-6 w-1">
        <a href="https://www.facebook.com/tarun.sachan.1/">
          <FaFacebookSquare size={30} />
        </a>
        <FaInstagram size={30} />
        <FaTwitterSquare size={30} />
        <FaGithubSquare size={30} />
        <FaDribbbleSquare size={30} />
      </div>
    </div>
  );
}

export default Footer;
