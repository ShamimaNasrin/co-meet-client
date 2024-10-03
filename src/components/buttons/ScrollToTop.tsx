import React, { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkScrollPosition = () => {
    setIsVisible(window.scrollY > 250);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition);

    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <button
        onClick={goToTop}
        className={`fixed bg-violet-600 text-white right-5 bottom-5 rounded-full shadow-md p-3 transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        } hover:bg-violet-700 sm:bottom-7 sm:right-7`}
        aria-label="Back to top"
      >
        <IoIosArrowUp />
      </button>
    </div>
  );
};

export default ScrollToTop;
