import { Link } from "react-router-dom";

const BlackButton = ({ str, path }: { str: string; path: string }) => {
  return (
    <div className="max-w-screen-xl mx-12 z-10">
      <Link to={path}>
        <button className="relative border-2 border-black bg-transparent py-2.5 px-5 font-medium uppercase text-black transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-black before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">
          {str}
        </button>
      </Link>
    </div>
  );
};

export default BlackButton;
