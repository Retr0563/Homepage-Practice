import { useState } from "react";
import Data from "./Data";
import "./Sidebar.css";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <button className="side-toggle" onClick={handleClick}>
        {open ? "x" : "☰"}
      </button>

      <div className="sidebar-container">
        <div className="sidebar-links">
          <ul>
            {Data.map((value, key) => {
              return (
                <li
                  key={key}
                  onClick={() => {
                    window.location.pathname = value.link;
                  }}
                >
                  <div> {value.title} </div>
                  <div>{value.icon}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
