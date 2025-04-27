import * as React from "react";
import Svg, { Path } from "react-native-svg";

const AppleLogo = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={68}
    height={68}
    fill="none"
    viewBox="0 0 68 68"
    {...props}  // This allows you to pass props like width, height, etc.
  >
    <Path
      fill="#000"
      d="M42.969 49.025c-1.838 1.781-3.844 1.5-5.775.656-2.044-.862-3.919-.9-6.075 0-2.7 1.163-4.125.825-5.738-.656-9.15-9.431-7.8-23.794 2.588-24.319 2.531.131 4.294 1.388 5.775 1.5 2.212-.45 4.331-1.744 6.694-1.575 2.83.225 4.968 1.35 6.374 3.375-5.85 3.506-4.462 11.213.9 13.369-1.068 2.813-2.456 5.606-4.762 7.669zm-9.413-24.431c-.281-4.181 3.113-7.632 7.013-7.969.543 4.837-4.388 8.438-7.013 7.969"
    />
  </Svg>
);

export default AppleLogo;
