import * as React from "react";
import Svg, { Path } from "react-native-svg";

const LockIcon = (props) => (
  <Svg
    width="20"
    height="21"
    fill="none"
    viewBox="0 0 20 21"
  >
    <Path
      fill="#614A44"
      d="M2.5 21q-1.031 0-1.765-.587T0 19V9q0-.825.735-1.412Q1.47 7.002 2.5 7h1.25V5q0-2.075 1.829-3.537T10 0t4.422 1.463T16.25 5v2h1.25q1.032 0 1.766.588.735.588.734 1.412v10q0 .825-.734 1.413T17.5 21zm7.5-5q1.032 0 1.766-.587.735-.587.734-1.413 0-.825-.734-1.412Q11.034 12.002 10 12t-1.765.588T7.5 14t.735 1.413q.738.591 1.765.587M6.25 7h7.5V5q0-1.25-1.094-2.125Q11.563 2 10 2t-2.656.875T6.25 5z"
    ></Path>
  </Svg>
);

export default LockIcon;
