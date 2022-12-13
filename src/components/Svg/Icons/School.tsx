import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {

  return (
    <Svg viewBox="0 0 80 80" {...props}>
      <path d="M6.68 19.118h66.64v52.404H6.68V19.118z" fill="#FE8A71" />
      <path d="M31.109 50.23H48.89v21.292H31.11V50.23z" fill="#FAF5E4" />
      <path
        d="M61.524 14.582h14.534v4.536H61.524v-4.536zM3.941 14.582h14.535v4.536H3.94v-4.536z"
        fill="#3DA4AB"
      />
      <path
        d="M18.477 8.478v55.418h6.715V40h29.616v23.896h6.716V8.478H18.477z"
        fill="#F6CD61"
      />
      <path
        d="M36.267 26.666h7.468v7.468h-7.468v-7.468zM23.949 26.666h7.468v7.468h-7.468v-7.468zM48.583 26.666h7.468v7.468h-7.468v-7.468zM36.267 14.344h7.468v7.468h-7.468v-7.468zM23.949 14.344h7.468v7.468h-7.468v-7.468zM48.583 14.344h7.468v7.468h-7.468v-7.468z"
        fill="#FAF5E4"
      />
      <path
        d="M15.738 71.522l2.738-7.626h6.716l2.738 7.626H15.738zM52.07 71.522l2.738-7.626h6.716l2.738 7.626H52.07zM3.941 71.522h72.117v4.536H3.941v-4.536zM15.738 3.941h48.524v4.536H15.738V3.941zM38.907 50.23h2.187v21.292h-2.187V50.23z"
        fill="#3DA4AB"
      />
    </Svg>
  );
};

export default Icon;
