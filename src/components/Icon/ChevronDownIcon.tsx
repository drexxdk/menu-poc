import { SVGProps } from "react";
const ChevronDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M8 12.533c-.452 0-.817-.165-1.2-.52L.409 5.81A1.312 1.312 0 0 1 0 4.853c0-.759.652-1.386 1.443-1.386.4 0 .774.165 1.07.446l5.496 5.386 5.478-5.386a1.547 1.547 0 0 1 1.07-.446c.79 0 1.443.627 1.443 1.386 0 .38-.13.685-.409.949L9.2 12.013c-.365.355-.74.511-1.2.52Z"
      clipRule="evenodd"
    />
  </svg>
);
export default ChevronDownIcon;
