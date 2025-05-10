import * as React from "react";
import Svg, { Circle, Path, SvgProps } from "react-native-svg";

const SearchIcon = (props: SvgProps) => (
  <Svg
    width={34}
    height={34}
    fill="none"
    viewBox="0 0 34 34"
    {...props} // ✅ Allow passing additional props like color, size
  >
    <Circle cx={17} cy={17} r={16.5} fill="#fff" stroke="#F16023" />
    <Path
      fill="#F16023"
      d="M14.5 21q-2.725 0-4.612-1.888T8 14.5t1.888-4.612Q11.778 8 14.5 8t4.613 1.888T21 14.5a6.1 6.1 0 0 1-1.3 3.8l5.6 5.6a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275l-5.6-5.6q-.75.6-1.725.95T14.5 21m0-2q1.875 0 3.188-1.312T19 14.5t-1.312-3.187T14.5 10t-3.187 1.313T10 14.5q-.003 1.871 1.313 3.188Q12.629 19.004 14.5 19"
    />
  </Svg>
);

export default SearchIcon;
