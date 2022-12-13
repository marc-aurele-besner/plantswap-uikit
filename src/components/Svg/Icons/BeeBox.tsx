import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {

  return (
    <Svg viewBox="0 0 80 80" {...props}>
      <path d="M2.5 16.25h75v5h-75v-5z" fill="#A34B33" />
      <path d="M73.75 16.25l-5-13.75h-57.5l-5 13.75" fill="#E7B541" />
      <path
        d="M68.75 2.5H16.926c-.59 5.834 3.979 11.25 10.205 11.25h45.71L68.75 2.5z"
        fill="#F9CB6E"
      />
      <path d="M6.25 21.25h67.5v25H6.25v-25z" fill="#662A12" />
      <path
        d="M10 36.25a6.25 6.25 0 006.25 6.25h57.5V21.25H10v15z"
        fill="#893B20"
      />
      <path
        d="M40 32.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM62.5 32.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM17.5 32.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
        fill="#969696"
      />
      <path d="M6.25 51.25V77.5h5V51.25" fill="#777" />
      <path
        d="M8.75 51.25V72.5a2.5 2.5 0 002.5 2.5V51.25h-2.5z"
        fill="#969696"
      />
      <path d="M11.25 65h57.5v5h-57.5v-5z" fill="#5A5B5D" />
      <path d="M16.25 67.5h52.5V65h-55a2.5 2.5 0 002.5 2.5z" fill="#777" />
      <path
        d="M27.5 21.25H30v25h-2.5v-25zM50 21.25h2.5v25H50v-25z"
        fill="#A34B33"
      />
      <path
        d="M13.75 38.75h7.5v2.5h-7.5v-2.5zM36.25 38.75h7.5v2.5h-7.5v-2.5zM58.75 38.75h7.5v2.5h-7.5v-2.5z"
        fill="#969696"
      />
      <path
        d="M8.75 18.75H77.5v-2.5H6.25a2.5 2.5 0 002.5 2.5z"
        fill="#C6644E"
      />
      <path d="M2.5 46.25h75v5h-75v-5z" fill="#777" />
      <path
        d="M8.75 48.75H77.5v-2.5H6.25a2.5 2.5 0 002.5 2.5z"
        fill="#969696"
      />
      <path d="M73.75 51.25V77.5h-5V51.25" fill="#777" />
      <path
        d="M71.25 51.25V72.5a2.5 2.5 0 01-2.5 2.5V51.25h2.5z"
        fill="#969696"
      />
    </Svg>
  );
};

export default Icon;
