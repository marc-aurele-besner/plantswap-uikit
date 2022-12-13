import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {

  return (
    <Svg viewBox="0 0 80 80" {...props}>
      <path
        d="M72.969 65.938H49.53a7.022 7.022 0 00-7.031 7.auction03V80H80v-7.031c0-3.891-3.14-7.031-7.031-7.031z"
        fill="#994C0F"
      />
    </Svg>
  );
};

export default Icon;
