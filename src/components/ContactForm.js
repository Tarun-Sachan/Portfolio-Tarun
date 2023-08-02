import React from 'react'

const ContactForm = () => {
  return (
    <div className="my-4 flex flex-col justify-between ">
          <div className="w-[300px]">
            <input
              className="p-3 flex w-full rounded-md text-black"
              type="text"
              placeholder="Enter Name"
              m-4
            />
            <input
              className="p-3 flex w-full rounded-md text-black my-2"
              type="email"
              placeholder="Enter Email"
            />
            <button className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-1 px-6 py-3">
              Notify Me
            </button>
          </div>
          <p>
            We care about the protection of your data.
          </p>
        </div>
  )
}

export default ContactForm