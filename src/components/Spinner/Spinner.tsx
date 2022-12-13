import React from "react";
import styled, { keyframes } from "styled-components";
import PlantIcon from "./PlantIcon";
import BeeIcon from "./BeeIcon";
import BeeIcon2 from "./BeeIcon2";
import SunIcon from "./SunIcon";
import { SproutIcon } from "../Svg";
import { SpinnerProps } from "./types";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const float = keyframes`
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(40px);
	}
	100% {
		transform: translatey(0px);
	}
`;

const float2 = keyframes`
	0% {
		transform: translatey(0px);
		transform: translateX(0px);
	}
	50% {
		transform: translatey(20px);
		transform: translateX(30px);
	}
	100% {
		transform: translatey(0px);
		transform: translateX(0px);
	}
`;

const Container = styled.div`
  position: relative;
  height: 100%;
`;

const RotatingSunIcon = styled(SunIcon)`
  position: absolute;
  top: 4;
  left: 0;
  animation: ${rotate} 2s linear infinite;
  transform: translate3d(0, 0, 0);
`;

const FloatingBeeIcon = styled(BeeIcon)`
  animation: ${float} 6s ease-in-out infinite;
  transform: translate3d(0, 0, 0);
`;

const FloatingBeeIcon2 = styled(BeeIcon2)`
  animation: ${float2} 6s ease-in-out infinite;
  transform: translate3d(20, 4, 0);
`;

const FixPlantIconLeft = styled(SproutIcon)`
  position: absolute;
  left: 8%;
  bottom: 0%;
  transform: translate3d(0, 0, 0);
`;

const FixPlantIconRight = styled(SproutIcon)`
  position: absolute;
  right: 3%;
  bottom: 0px;
  transform: translate3d(0, 0, 0);
`;

const Spinner: React.FC<SpinnerProps> = ({ size = 128 }) => {
  return (
    <Container>
      <RotatingSunIcon width={`${size * 2}px`} />
      <FloatingBeeIcon width={`${size * 4}px`} />
      <FloatingBeeIcon2 width={`${size * 4}px`} />
      <br />
      <FixPlantIconLeft width={`${size * 1.5}px`} />
      <FixPlantIconRight width={`${size * 2}px`} />
    </Container>
  );
};

export default Spinner;
