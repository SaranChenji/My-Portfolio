import Hole from "../../ui/Hole";
import "./About.css";
import { skills } from "../../data";
import CardUi from "../../assets/CardUi";

const About = () => {
  return (
    <section id="about">
      <div className="card section__wrapper">
        <Hole />
        <div className="column left__column">
          <h3 className="skill__title">My Skills</h3>
          <div className="skills__container">
            {skills.map((skill, index) => (
              <div className="flex skill__group" key={index}>
                {skill.data.map((list, key) => (
                  <div className="blur__overlay flex__center skill" key={key}>
                    <div className="skill__logo">
                      <img src={list.logo} alt="" />
                    </div>
                  </div>
                ))}
              </div>
            ))}
            <CardUi className="card__ui-item" color={"var(--color-primary)"} />
          </div>
        </div>
        <div className="column right-column">
          <h2 className="shine">About Me</h2>
          <h1 className="title">
            I am <span className="color__primary">Saran</span>
          </h1>
          <p className="text__muted description">
            Passionate Frontend Developer with a strong foundation in HTML, CSS,
            JavaScript, and React. I specialize in building responsive,
            user-friendly web interfaces and love turning creative ideas into
            clean, functional code. Always eager to learn, improve, and deliver
            high-quality digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
