import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 80 80" {...props}>
      <path d="M47.274 0h-14.55l-2.51 15.063h19.57L47.275 0zM74.86 1.602A2.344 2.344 0 0072.636 0H52.028l2.51 15.063h24.808L74.86 1.602zM50.21 19.75H29.791v15.063h20.417V19.75z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M54.896 19.75v15.062h15.396v15.396H9.708V34.812h15.396V19.75H0v12.719a2.344 2.344 0 002.344 2.343H5.02V77.656A2.344 2.344 0 007.365 80h65.27a2.344 2.344 0 002.344-2.344V34.812h2.677A2.344 2.344 0 0080 32.47V19.75H54.896zM7.363 0A2.344 2.344 0 005.14 1.603L.653 15.063h24.808L27.971 0H7.364z"
      />
    </Svg>
  );
};

export default Icon;
