import React from "react";
import "./Notifications.css";
import closeIcon from "./close-icon.png";
import { getLatestNotification } from "./utils";

export const Notifications = () => {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>

      <button
        style={{
          float: "right",
          background: "transparent",
          border: "none",
          cursor: "pointer",
        }}
        aria-label="close"
        onClick={() => console.log("Close button has been clicked")}
      >
        <img
          src={closeIcon}
          alt="close icon"
          style={{ width: "20px", height: "20px" }}
        />
      </button>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          data-priority="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        />
      </ul>
    </div>
  );
};
