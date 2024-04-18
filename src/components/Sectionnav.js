import { React, useState } from "react";
import Collections from "./Collection.js";
import Events from "./Events.js";

export default function Sectionnav() {
  const [activeTab, setActiveTab] = useState("collections");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div id="sectionNavContainer">
      <nav id="sectionNav">
        <ul className="sectionNavList">
          <li>
            <button
              className="sectionBtn"
              onClick={() => handleTabChange("collections")}
            >
              Collection
            </button>
          </li>
          <li>
            <span className="sectionBtn">|</span>
          </li>
          <li>
            <button
              className="sectionBtn"
              onClick={() => handleTabChange("events")}
            >
              Events
            </button>
          </li>
        </ul>
      </nav>
      <div className="tab-content">
        {activeTab === "collections" ? <Collections /> : <Events />}
      </div>
    </div>
  );
}
