import { useState, useEffect } from "react";
import "odometer/themes/odometer-theme-default.css";
import "./Facts.css";

import Odometer from "react-odometerjs";

const Facts = () => {
  const [experience, setExperience] = useState("");
  const [projects, setProjects] = useState(0);
  // const [clients, setClients] = useState(0);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setExperience(6);
      setProjects(4);
      // setClients(2.5);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <div className="flex__center fact__container">
      <div className="fact__items">
        <div className="flex__center">
          <Odometer value={experience} className="title" />
          <h3 className="">&nbsp; Months</h3>
        </div>
        <p className="label">Experience</p>
      </div>

      <div className="fact__items">
        <div className="flex__center">
          <Odometer value={projects} className="title" />
          <h3 className="title"></h3>
        </div>
        <p className="label">Completed Projects</p>
      </div>
      {/* 
      <div className="fact__items">
        <div className="flex__center">
          <Odometer value={clients} className="title" />
          <h3 className="title">K</h3>
        </div>
        <p className="label">Satisfied Clients</p>
      </div> */}
    </div>
  );
};

export default Facts;
