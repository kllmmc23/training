import React from "react";

const UserInput = (props) => {
  return (
    <div>
      Input{" "}
      <input
        type="text"
        name="text"
        id="text"
        onChange={props.changed}
        value={props.currentName}
      />
    </div>
  );
};

export default UserInput;
