import React from "react";
import ChildCompoent from "./ChildComponent";
const ParentComponent = () => {
  const name = "Anish";
  const age = 24;
  return (
    <div>
      <ChildCompoent name={name} age={age} />
    </div>
  );
};
export default ParentComponent;
