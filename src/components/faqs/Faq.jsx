import { useState } from "react";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";

const Faq = ({ title, description }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="mx-auto flex-col px-2 py-[2px] sm:max-w-screen-md">
      <div className="my-[2px] flex justify-between bg-[#303030] px-[20px] py-4 sm:px-6 sm:py-5">
        <h1 className="text-lg sm:text-2xl">{title}</h1>
        {show ? (
          <AiOutlineClose
            className="h-8 w-8 cursor-pointer"
            onClick={() => setShow(!show)}
          />
        ) : (
          <AiOutlinePlus
            className="h-8 w-8 cursor-pointer"
            onClick={() => setShow(!show)}
          />
        )}
      </div>
      {show && (
        <div className="bg-[#303030]">
          <p className="px-2 py-4 text-lg sm:px-6 sm:py-6 sm:text-2xl">
            {description}
          </p>
        </div>
      )}
    </div>
  );
};

export default Faq;
