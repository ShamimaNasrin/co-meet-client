import { Link } from "react-router-dom";

const CardButton = ({ str, path }: { str: string; path: string }) => {
  return (
    <>
      <Link to={path}>
        <button className="bg-black text-white text-sm px-3 py-2 transition-all duration-500 hover:bg-gray-800 hover:pr-5">
          <span className="relative inline-block transition-all duration-500 after:content-['\00bb'] after:absolute after:opacity-0 after:top-0 after:right-[-10px] after:transition-all after:duration-500 hover:after:opacity-100 hover:after:right-[-10]">
            {str}
          </span>
        </button>
      </Link>
    </>
  );
};

export default CardButton;
