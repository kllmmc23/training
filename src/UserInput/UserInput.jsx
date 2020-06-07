import React from "react";

const UserInput = (props) => {
    const inStyle = {
      border: "2px solid red",
    };
    return (
      <div>
        Input{" "}
        <input
          style={inStyle}
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
