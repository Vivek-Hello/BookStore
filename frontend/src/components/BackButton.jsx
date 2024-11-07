import { Link } from "react-router-dom";
import { BsArrowBarLeft } from "react-icons/bs";

const BackButton = ({ dest = "/" }) => {
  return (
    <div>
      <Link to={dest} aria-label="Go back">
        <BsArrowBarLeft className="bg-sky-800 text-2xl text-white px-4 py-1 rounded-lg w-fit" />
      </Link>
    </div>
  );
};

export default BackButton;
