import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {

  return (
    <Svg viewBox="0 0 80 80" {...props}>
      <path
          d="M51.142 78.052c-2.611 2.597-6.827 2.597-9.424 0l-36.71-34.43C2.956 41.697.51 38.05.333 35.241c-.472-7.597-.14-22.144.092-29.856C.508 2.574 2.87.217 5.684.153c9.853-.23 30.729-.474 32.67 1.468l40.425 36.574c2.595 2.597.24 9.167-2.375 11.778L51.142 78.052zM18.973 11.325a5.63 5.63 0 100 7.958 5.626 5.626 0 000-7.958z"
        />
    </Svg>
  );
};

export default Icon;
