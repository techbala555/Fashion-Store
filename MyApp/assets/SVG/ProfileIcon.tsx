import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ProfileIcon = ({ color = "#fff", width = 24, height = 24, ...props }) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill={color}
      fillRule="evenodd"
      d="M12 2A10 10 0 1 1 2 12C2 6.477 6.477 2 12 2m1 11h-2a6 6 0 0 0-5.518 3.64A7.99 7.99 0 0 0 12 20a7.99 7.99 0 0 0 6.518-3.36A6 6 0 0 0 13 13m-1-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6"
      clipRule="evenodd"
    />
  </Svg>
);

export default ProfileIcon;
