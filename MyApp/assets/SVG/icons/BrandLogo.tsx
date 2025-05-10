import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const BrandLogo = (props: SvgProps) => (
  <Svg
    width="40"
    height="40"
    fill="none"
    viewBox="0 0 100 100"
    {...props} // ✅ This correctly spreads props
  >
    <Path
      fill="#F16023"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.5}
      d="m38.725 37.967 5.57 11.143-11.272 5.638-22.606-7.536 5.595-16.791zm22.552.102-5.573 11.143 11.273 5.638 22.606-7.538-5.596-16.791zM33.802 57.506l12.177-2.644 2.673 12.32L35.758 87.22l-14.883-9.577zm7.427-20.84 8.81 8.811 8.913-8.912v-23.83H41.254zM66.28 57.55l-12.177-2.642-2.673 12.317 12.894 20.042 14.883-9.577z"
    />
  </Svg>
);

export default BrandLogo;
