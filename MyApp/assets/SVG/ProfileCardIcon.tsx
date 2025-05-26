import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ProfileCardIcon = (props) => (
  <Svg  
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <Path
      fill="#614A44"
      fillRule="evenodd"
      d="M6.667 5.333a5.333 5.333 0 1 1 10.666 0 5.333 5.333 0 0 1-10.666 0m0 8A6.667 6.667 0 0 0 0 20a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4 6.667 6.667 0 0 0-6.667-6.667z"
      clipRule="evenodd"
    ></Path>
  </Svg>
);

export default ProfileCardIcon;
