import * as React from "react";
import Svg, { Path } from "react-native-svg";

const PaymentCardIcon = (props) => (
  <Svg
    width="24"
    height="19"
    fill="none"
    viewBox="0 0 24 19"
  >
    <Path
      fill="#614A44"
      d="M0 15.857a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3v-8.25H0zm3.536-4.071a1.607 1.607 0 0 1 1.607-1.607h2.571a1.607 1.607 0 0 1 1.607 1.607v1.071a1.607 1.607 0 0 1-1.607 1.607H5.143a1.607 1.607 0 0 1-1.607-1.607zM21 0H3a3 3 0 0 0-3 3v1.393h24V3a3 3 0 0 0-3-3"
    ></Path>
  </Svg>
);

export default PaymentCardIcon;
