import "./Header.css";
import "../../ui/HeaderTitle/HeaderTitle.css";
import HeaderTitle from "../../ui/HeaderTitle";
import { profile1 } from "../../assets";
import CodeBlock from "../../ui/CodeBlock";
import Facts from "../../ui/Facts";
import SocialHandles from "../../ui/SocialHandles";
import BreathCircle from "../../ui/BreathCircle";
const code = `const developer={
    firstName:"Saran",
    lastName:"Chenji",
    role:"Frontend Developer",
    skills:["HTML5","CSS3",
            "JavaScript",
            "React JS",
            "Git"],
     hobby:repeat=()=>{
       //learn();
       //code();
       //build();
       //repeat();
       }
    };`;
const Header = () => {
  return (
    <header id="header">
      <BreathCircle />
      <div className="section__wrapper">
        <div className="grid upper">
          <div className="column">
            <HeaderTitle />
          </div>
          <div className="column">
            <img src={profile1} className="profile__photo" alt="" />
          </div>
        </div>
        <div className="card grid lower">
          <CodeBlock language={"javascript"} code={code} />
          <div>
            <p className="text__muted description">
              Passionate Frontend Developer with a strong foundation in HTML,
              CSS, JavaScript, and React. I specialize in building responsive,
              user-friendly web interfaces and love turning creative ideas into
              clean, functional code. Always eager to learn, improve, and
              deliver high-quality digital experiences.
            </p>
            <Facts />
            <SocialHandles />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
