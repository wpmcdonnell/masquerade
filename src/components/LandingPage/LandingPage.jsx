import MasqueradeImg from "../../assets/andreas-altomonte-masked-ball-bohemia-1748-oil-canvas-19-x-38-483-x-965-cm-metropolitan-museum-art.jpg";
import "./LandingPage.scss";
import EnterButton from "../EnterButton/EnterButton";

const LandingPage = () => {

  return (
    <div className="landing-page">
      <div className="cover-image">
    <img alt="Masquerade" src={MasqueradeImg} />
  </div>
  <EnterButton className="enter-button"/>
    </div>
  );
}

export default LandingPage;