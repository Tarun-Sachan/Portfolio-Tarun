// import React from "react";
// import ContactForm from "./ContactForm";

// const Newsletter = () => {
//   return (
//     <div className="w-full py-10 text-white px-4 border-t border-gray-600 flex flex-row">
//       <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
//         <div className="lg:col-span-2 my-4 align-middle">
//           <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
//             Want tips & tricks to optimize your flow?
//           </h1>
//           <p>Sign up to our newsletter and stay up to date.</p>
//         </div>
//         {/* <div className="my-4">
//           <div className="flex flex-col sm:flex-row items-center justify-between w-full">
//             <input
//               className="p-3 flex w-full rounded-md text-black"
//               type="email"
//               placeholder="Enter Email"
//             />
//             <button className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3">
//               Notify Me
//             </button>
//           </div>
//           <p>
//             We care about the protection of your data. Read our{" "}
//             <span className="text-[#00df9a]">Privacy Policy.</span>
//           </p>
//         </div> */}
//       </div>
//       <ContactForm className="my-4" />
//     </div>
//   );
// };

// export default Newsletter;
import React from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const Newsletter = () => {
  const [isSent, setIsSent] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_aqfwtpo",
        "template_u51ctp5",
        e.target,
        "Gzk7dIbE8g16WFVZq"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    console.log(e.target.value);
    setIsSent(true);
    e.target.reset();
  }

  return (
    <div className="w-full py-16 text-white px-4 " id="footer">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want to know more about me?
          </h1>

          <p>
            View my{" "}
            <a
              href="https://drive.google.com/file/d/1YuH55VPYgowyFc93g33myB3x4rSYuY7A/view?usp=drive_link"
              className="text-[#00df9a]"
            >
              Resume
            </a>
            .
          </p>
        </div>
        <form onSubmit={sendEmail} className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex w-full rounded-md text-black"
              type="email"
              placeholder="Enter Email"
              name="email"
            />
            <button
              type="submit"
              className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3"
            >
              Notify Me
            </button>
          </div>
          {!isSent && <p>We care about the protection of your data.</p>}
          {isSent && <p>Your response has been recorded.</p>}
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
