import { Link } from "react-router-dom";

const EnterButton = () => {
  return (
    <Link to={"/connect"}>
      <div className="button-container">
        {" "}
        <button className="enter-button"> ENTER </button>{" "}
      </div>
    </Link>
  );
};
export default EnterButton;
