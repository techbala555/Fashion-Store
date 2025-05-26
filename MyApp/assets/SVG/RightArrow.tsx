import * as React from "react";
import Svg, { Path } from "react-native-svg";

const RightArrow = (props) => (
  <Svg
    width="8"
    height="14"
    fill="none"
    viewBox="0 0 8 14"
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="m1 13 6-6-6-6"
    ></Path>
  </Svg>
);

export default RightArrow;
