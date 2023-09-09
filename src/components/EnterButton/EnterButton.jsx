import { Link } from "react-router-dom";

const EnterButton = () => {
  return (
    <Link>
      <div className="button-container">
        {" "}
        <button className="enter-button"> ENTER </button>{" "}
      </div>
    </Link>
  );
};
export default EnterButton;
