import classNames from "classnames";
import { ReactNode } from "react";

const Icon = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <i
      className={classNames(
        "pointer-events-none flex shrink-0 [&>*]:h-full [&>*]:w-full w-4 h-4",
        className
      )}
    >
      {children}
    </i>
  );
};
export default Icon;
