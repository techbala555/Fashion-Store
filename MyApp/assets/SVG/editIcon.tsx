import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

// Define your props interface
interface SvgIconProps extends SvgProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
}

const SvgIcon: React.FC<SvgIconProps> = ({ width = 18, height = 18, fill = "#000000", ...props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill={fill}
    viewBox="0 0 18 18"
    {...props}
  >
    <Path
      fill={fill}
      d="M16.405 1.6a3.19 3.19 0 0 0-4.512 0l-.916.918a1 1 0 0 0-.125.124l-9.1 9.101a.83.83 0 0 0-.229.425l-.84 4.167a.834.834 0 0 0 .98.983l4.174-.833a.83.83 0 0 0 .425-.228L16.405 6.113a3.19 3.19 0 0 0 0-4.511M11.503 4.35l2.155 2.155L5.262 14.9l-2.697.54.542-2.693zm3.334.977L12.682 3.17l.39-.39a1.524 1.524 0 1 1 2.155 2.153z"
    />
  </Svg>
);

export default SvgIcon;
