import { Path, Svg } from "@react-pdf/renderer";
import type { IconProps } from "../../types.ts";

export function Link({ style }: IconProps) {
  return (
    <Svg viewBox="0 0 24 24" style={style}>
      <Path
        d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
        stroke="#333"
        strokeWidth={2}
        fill="none"
      />
      <Path
        d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
        stroke="#333"
        strokeWidth={2}
        fill="none"
      />
    </Svg>
  );
}
