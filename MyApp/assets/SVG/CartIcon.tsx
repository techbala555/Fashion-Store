import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const CartIcon = ({ width = 24, height = 24, color = "#fff", ...props }: SvgProps & { color?: string }) => (
  <Svg
    
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      fill={color}
      d="M8.556 8.556V7.444a4.444 4.444 0 1 1 8.888 0v1.112"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeWidth="2"
      d="M8.556 8.556V7.444a4.444 4.444 0 1 1 8.888 0v1.112"
    />
    <Path
      fill={color}
      fillRule="evenodd"
      d="M3.651 8.095C3 8.747 3 9.793 3 11.89v3.333c0 4.19 0 6.286 1.302 7.587 1.302 1.3 3.397 1.302 7.587 1.302h2.222c4.19 0 6.286 0 7.587-1.302 1.3-1.302 1.302-3.397 1.302-7.587V11.89c0-2.096 0-3.142-.651-3.794-.651-.65-1.698-.65-3.793-.65H7.444c-2.095 0-3.142 0-3.793.65M10.778 13a1.111 1.111 0 0 0-2.222 0v2.222a1.111 1.111 0 0 0 2.222 0zm6.666 0a1.111 1.111 0 1 0-2.222 0v2.222a1.111 1.111 0 0 0 2.222 0z"
      clipRule="evenodd"
    />
  </Svg>
);

export default CartIcon;
