import * as React from "react";
import Svg, { Circle, Path, SvgProps } from "react-native-svg";

const NotificationIcon = (props: SvgProps) => (
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
      d="M26 24v1H8v-1l2-2v-6c0-3.1 2.03-5.83 5-6.71V9a2 2 0 1 1 4 0v.29c2.97.88 5 3.61 5 6.71v6zm-7 2a2 2 0 0 1-4 0"
    />
  </Svg>
);

export default NotificationIcon;
