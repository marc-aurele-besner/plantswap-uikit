import styled from "styled-components";
import { scales, PlantToggleProps, HandleProps, InputProps, ScaleKeys } from "./types";

const scaleKeyValues = {
  sm: {
    plantSize: "16px", // The size of a plant (the handle)
    travelDistance: "16px", // How far plants should travel horizontally
    toggleHeight: "20px", // General Height and
    toggleWidth: "36px", // Width of a toggle box
    plantThickness: "1px", // Bottom shadow of a plant
    plantTwoOffset: "0px", // Plants don't look good when they are concentric
    plantThreeOffset: "-3px", // so plant 2 and 3 are shifted a little bit
    butterTop: "3px", // Fine adjustments for butter position
    butterLeft: "10px",
    butterWidth: "6px", // Widht and
    butterHeight: "5px", // Height of a butter block on top of plants
    butterThickness: "0.5px", // Shadow on the bottom of the butter block
    butterRadius: "2px", // Rounded corners for the butter
    butterSmearOneTop: "10px", // There is melted butter
    butterSmearOneLeft: "2.5px", // next to the butter block
    butterSmearTwoTop: "11px", // implemented with :before and :after
    butterSmearTwoRight: "2.5px", // these values adjust the position of it
  },
  md: {
    plantSize: "32px",
    travelDistance: "34px",
    toggleHeight: "40px",
    toggleWidth: "72px",
    plantThickness: "2px",
    plantTwoOffset: "-3px",
    plantThreeOffset: "-8px",
    butterTop: "3px",
    butterLeft: "16px",
    butterWidth: "12px",
    butterHeight: "11px",
    butterThickness: "1px",
    butterRadius: "4px",
    butterSmearOneTop: "20px",
    butterSmearOneLeft: "5px",
    butterSmearTwoTop: "22px",
    butterSmearTwoRight: "5px",
  },
};

const getScale =
  (property: ScaleKeys) =>
  ({ scale = scales.MD }: PlantToggleProps) => {
    return scaleKeyValues[scale][property];
  };

export const PlantStack = styled.div<HandleProps>`
  position: relative;
  display: inline-block;

  &:label:before {
    content: none;
  }

  .plants {
    transition: 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .plant {
    background: #2B6E37;
    border-radius: 50%;
    width: ${getScale("plantSize")};
    height: ${getScale("plantSize")};
    position: absolute;
    transition: 0.4s ease;
    top: 2px;
    left: 4px;
    box-shadow: 0 ${getScale("plantThickness")} 0 ${getScale("plantThickness")} #399349;
  }

  .plant:nth-child(1) {
    background: ${({ theme }) => theme.plantToggle.handleBackground};
    box-shadow: 0 ${getScale("plantThickness")} 0 ${getScale("plantThickness")}
      ${({ theme }) => theme.plantToggle.handleShadow};
  }

  .plant:nth-child(2) {
    left: 0;
    top: ${getScale("plantTwoOffset")};
    transform: scale(0);
    transition: 0.2s ease 0.2s;
  }

  .plant:nth-child(3) {
    top: ${getScale("plantThreeOffset")};
    transform: scale(0);
    transition: 0.2s ease 0.2s;
  }

  .plant:nth-child(3):before,
  .plant:nth-child(3):after {
    content: "";
    position: absolute;
    background: #2B6E37;
    border-radius: 20px;
    width: 50%;
    height: 20%;
  }

  .plant:nth-child(3):before {
    top: ${getScale("butterSmearOneTop")};
    left: ${getScale("butterSmearOneLeft")};
  }

  .plant:nth-child(3):after {
    top: ${getScale("butterSmearTwoTop")};
    right: ${getScale("butterSmearTwoRight")};
  }
`;

export const PlantInput = styled.input<InputProps>`
  height: 40px;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 40px;

  &:focus + label {
    box-shadow: ${({ theme }) => theme.shadows.focus};
  }

  &:checked + label .plants {
    transform: translateX(${getScale("travelDistance")});
  }

  &:checked + label .plant:nth-child(1) {
    background: #FFFFFF;
    box-shadow: 0 ${getScale("plantThickness")} 0 ${getScale("plantThickness")} #399349;
    transition-delay: 0.2s;
  }

  &:checked + label .plant:nth-child(2) {
    transform: scale(1);
    transition-delay: 0.2s;
  }

  &:checked + label .plant:nth-child(3) {
    transform: scale(1);
    transition-delay: 0.4s;
  }

  &:checked + label .butter {
    transform: scale(1);
    transition-delay: 0.6s;
  }
`;

export const PlantLabel = styled.label<PlantToggleProps>`
  width: ${getScale("toggleWidth")};
  height: ${getScale("toggleHeight")};
  background: ${({ theme, checked }) => theme.colors[checked ? "success" : "input"]};
  box-shadow: ${({ theme }) => theme.shadows.inset};
  display: inline-block;
  border-radius: 50px;
  position: relative;
  transition: all 0.3s ease;
  transform-origin: 20% center;
  cursor: pointer;
`;
