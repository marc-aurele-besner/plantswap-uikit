import React, { useState } from "react";
import PlantToggle from "./PlantToggle";

export default {
  title: "Components/PlantToggle",
  component: PlantToggle,
};

export const Default: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggle = () => setIsChecked(!isChecked);

  return (
    <>
      <div style={{ marginBottom: "32px" }}>
        <PlantToggle checked={isChecked} onChange={toggle} />
      </div>
      <div>
        <PlantToggle checked={isChecked} onChange={toggle} scale="sm" />
      </div>
    </>
  );
};
