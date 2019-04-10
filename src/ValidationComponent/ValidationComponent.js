import React from "react";

const validationComponent = props => {
  const message = props.length > 4 ? "text too long" : "text too short";

  return <p>{message}</p>;
};

export default validationComponent;
