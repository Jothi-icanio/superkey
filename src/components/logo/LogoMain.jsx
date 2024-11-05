import * as React from "react";
const Logo = (props) => (
  <svg
    width={189}
    height={49}
    viewBox="0 0 189 49"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <rect
      y={0.186523}
      width={189}
      height={48.6262}
      fill="url(#pattern0_1_7934)"
    />
    <defs>
      <pattern
        id="pattern0_1_7934"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use
          xlinkHref="#image0_1_7934"
          transform="scale(0.00242718 0.00943396)"
        />
      </pattern>
      <image
        id="image0_1_7934"
        width={412}
        height={106}
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);
export default Logo;
