import * as React from "react";
import Svg, { Circle, Path, SvgProps } from "react-native-svg";

const BagIcon = (props: SvgProps) => (
  <Svg
    width={34}
    height={34}
    fill="none"
    viewBox="0 0 34 34"
    {...props}
  >
    <Circle cx={17} cy={17} r={16.5} fill="#fff" stroke="#F16023" />
    <Path
      fill="#F16023"
      fillRule="evenodd"
      d="M13.25 11.015V10a3.75 3.75 0 0 1 7.5 0v1.015c1.287.039 2.075.177 2.676.676.833.692 1.053 1.862 1.492 4.203l.75 4c.617 3.292.925 4.938.026 6.022C24.794 27 23.119 27 19.77 27h-5.54c-3.35 0-5.024 0-5.924-1.084s-.59-2.73.026-6.022l.75-4c.44-2.34.659-3.511 1.492-4.203.601-.499 1.389-.637 2.676-.676M14.75 10a2.25 2.25 0 1 1 4.5 0v1h-4.5z"
      clipRule="evenodd"
    />
  </Svg>
);

export default BagIcon;
