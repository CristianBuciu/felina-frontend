import React, { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";

import { Link } from "react-router-dom";
import { SidebarData } from "./sidebarData";

function Sidebar({ currentUser }) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div className="sidebar-container">
      <div className="navbar-button">
        <Hamburger
          className="hamburger-react-style"
          hideOutline
          color="rgb(55, 55, 55)"
          size={50}
          toggled={sidebar}
          toggle={setSidebar}
        />

        <nav className={`${sidebar ? "nav-menu active" : "nav-menu"}`}>
          <ul className="nav-menu__items" onClick={showSidebar}>
            {SidebarData.map((item) => {
              return (
                <div key={item.id} style={{ width: "100%" }}>
                  <li className="list-item">
                    <Link to={item.path} className={item.cName}>
                      <span>{item.title}</span>
                    </Link>
                  </li>
                </div>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
