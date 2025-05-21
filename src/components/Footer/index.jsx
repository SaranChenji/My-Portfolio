import "./Footer.css";
import { menu } from "../../data";
import { Link } from "react-scroll";
import SocialHandles from "../../ui/SocialHandles";
const Footer = () => {
  return (
    <footer>
      <div className="section__wrapper">
        <ul className="flex__center nav">
          {menu.map((list, index) => (
            <Link
              to={list.name.toLowerCase()}
              smooth={true}
              duration={500}
              className="nav__item"
              key={index}
            >
              {list.name}
            </Link>
          ))}
        </ul>
        <SocialHandles />
        <div className="copyright">
          <h3>
            copyright &copy; All right reserved - | {new Date().getFullYear()}
          </h3>
          <p className="text__muted">Built with 💛 by Saran</p>
        </div>
        <div className="base__logo">
          <h1 className="full__name shine">Saran C</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
