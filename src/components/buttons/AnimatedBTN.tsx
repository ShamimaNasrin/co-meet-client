import { Link } from "react-router-dom";

const AnimatedBTN = ({ str, path }: { str: string; path: string }) => {
  return (
    <div className="max-w-screen-xl mx-12 z-10">
      <Link to={path}>
        <button className="relative border-2 border-violet-700 bg-transparent py-2.5 px-5 font-medium uppercase text-violet-700 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-violet-700 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">
          {str}
        </button>
      </Link>
    </div>
  );
};

export default AnimatedBTN;
