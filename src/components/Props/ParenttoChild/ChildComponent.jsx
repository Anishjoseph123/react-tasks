import React from "react";
const ChildCompoent = (props) => {
  const { name, age } = props;
  return (
    <div>
      <h4>Name:{name}</h4>
      <h5>Age:{age}</h5>
    </div>
  );
};
export default ChildCompoent;
