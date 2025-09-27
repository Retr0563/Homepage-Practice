// import { useState } from "react";
import Data from "./Data";
import "./Sidebar.css";

const Sidebar = () => {
  // const [open, setOpen] = useState(false);

  return (
    <div className="sidebar-container">
      <button className="side-toggle"> x </button>

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
                {/* <div>{value.link}</div> */}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
