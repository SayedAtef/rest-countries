import { FaArrowLeft } from "react-icons/fa";

const BackButton = ({ click }) => {
  return (
    <button
      onClick={click}
      className="px-8 py-2 bg-white flex justify-center gap-3 w-32 mt-5 shadow-md font-semibold dark:bg-[#2b3945] dark:text-white"
    >
      <span className="self-center">
        <FaArrowLeft />
      </span>{" "}
      Back
    </button>
  );
};

export default BackButton;
