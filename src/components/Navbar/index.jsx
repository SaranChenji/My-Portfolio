import "./Navbar.css";
import Logo from "../../assets/Logo";
import { FaTimes } from "react-icons/fa";
import { menu } from "../../data";
import { Link, animateScroll as scroll } from "react-scroll";
import { FaArrowUpRightFromSquare, FaBarsStaggered } from "react-icons/fa6";
import { useState } from "react";

const Navbar = () => {
  const [showSidebar, setShowsidebar] = useState(false);

  return (
    <nav className="card flex__center navbar">
      {showSidebar && (
        <div
          className="aside__overlay"
          onClick={() => setShowsidebar(!showSidebar)}
        />
      )}
      <div
        className="flex__center logo"
        onClick={() => scroll.scrollToTop({ duration: 500 })}
      >
        <Logo />
      </div>
      <aside className={`flex__center sidebar ${showSidebar && "visible"}`}>
        <div className="flex sidebar__top">
          <span
            className="icon__container close__btn"
            onClick={() => setShowsidebar(!showSidebar)}
          >
            <FaTimes />
          </span>
        </div>
        <div className="flex sidebar__middel">
          {menu.map((list, index) => (
            <Link
              to={list.name.toLowerCase()}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="tab"
              activeClass="btn__shine"
              key={index}
            >
              {list.name}
            </Link>
          ))}
        </div>
      </aside>
      <div className="flex__center button__wrapper">
        <Link to="contact" className="btn flex__center hire__btn">
          Hire Me{" "}
          <div className="flex__center icon">
            <FaArrowUpRightFromSquare />
          </div>
        </Link>
        <FaBarsStaggered
          className="menu"
          onClick={() => setShowsidebar(!showSidebar)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
