import React from "react";

import "./CourseContentItem.css";

const CourseContentItem = (props) => {
  return (
    <div className="d-flex justify-content-start mb-3">
      <img src="images/tick.png" alt="tick" className="mr-3 tick-icon" />
      <p className="mb-0">{props.description}</p>
    </div>
  );
};

export default CourseContentItem;
