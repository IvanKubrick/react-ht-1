import React from "react";

const userInput = props => {
  const styles = {
    padding: "10px",
    borderColor: "red"
  };
  return (
    <input
      value={props.value}
      onChange={props.change}
      type="text"
      style={styles}
    />
  );
};

export default userInput;
