import { FaCircle, FaBan } from "react-icons/fa";
export default function GreyMark() {
  return (
    <span className="me-1 position-relative">
        <FaBan style={{ top: "2px" }} className="text-grey me-1 position-absolute fs-5" />
      <FaCircle className="text-white me-1 fs-6" />
    </span>
);}