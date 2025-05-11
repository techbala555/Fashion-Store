import * as React from "react";
import Svg, { Path } from "react-native-svg";

const StarRating = ({ size = 20, color = "#FCAF23", ...props }) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <Path
      d="M9.24 1.342c.239-.737 1.281-.737 1.52 0l1.755 5.397a.8.8 0 0 0 .76.553h5.676c.774 0 1.097.991.47 1.447l-4.591 3.336a.8.8 0 0 0-.291.894l1.754 5.398c.24.737-.604 1.35-1.231.894l-4.592-3.336a.8.8 0 0 0-.94 0l-4.591 3.336c-.627.456-1.471-.157-1.232-.894l1.754-5.398a.8.8 0 0 0-.29-.894L.579 8.739c-.627-.456-.305-1.447.47-1.447h5.676a.8.8 0 0 0 .76-.553z"
      fill={color}
    />
  </Svg>
);

export default StarRating;
