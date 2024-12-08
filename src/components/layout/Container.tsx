import { ReactNode } from "react";

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={`mx-auto max-w-[2720px] px-2 md:px-10 xl:px-20 p-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
