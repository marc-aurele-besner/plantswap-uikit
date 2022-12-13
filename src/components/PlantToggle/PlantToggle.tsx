import React from "react";
import { PlantStack, PlantInput, PlantLabel } from "./StyledPlantToggle";
import { PlantToggleProps, scales } from "./types";

const PlantToggle: React.FC<PlantToggleProps> = ({ checked, scale = scales.MD, ...props }) => (
  <PlantStack scale={scale}>
    <PlantInput id={props.id || "plant-toggle"} scale={scale} type="checkbox" checked={checked} {...props} />
    <PlantLabel scale={scale} checked={checked} htmlFor={props.id || "plant-toggle"}>
      <div className="plants">
        <div className="plant" />
      </div>
    </PlantLabel>
  </PlantStack>
);

PlantToggle.defaultProps = {
  scale: scales.MD,
};

export default PlantToggle;
