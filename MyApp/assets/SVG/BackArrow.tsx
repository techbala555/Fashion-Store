// BackArrow.js
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const BackArrow = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <Path
      fill="#F16023"
      d="M25.333 14.667H9.52l4.84-5.814a1.335 1.335 0 0 0-2.053-1.706l-6.667 8q-.069.095-.12.2c0 .066 0 .106-.093.173-.06.153-.092.316-.094.48.002.164.033.327.094.48 0 .067 0 .107.093.173q.051.105.12.2l6.667 8a1.335 1.335 0 0 0 1.88.174 1.33 1.33 0 0 0 .173-1.88l-4.84-5.814h15.813a1.333 1.333 0 0 0 0-2.666"
    />
  </Svg>
);

export default BackArrow;
