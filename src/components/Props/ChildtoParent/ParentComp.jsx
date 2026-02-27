import React, { useState } from "react";
import ChildComp from "./ChildComp";
const ParentComp = () => {
  let [childData, setChildData] = useState(null);
  let handleChildData = (data) => {
    setChildData(data);
  };

  return (
    <div>
      <ChildComp sendDataToParent={handleChildData} />
      {childData && (
        <p style={{ textAlign: "center", fontWeight: "bold" }}>
          Data Received from Child Component:{childData}
        </p>
      )}
    </div>
  );
};
export default ParentComp;
