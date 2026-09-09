import type { IconProps } from "../../types.ts";

export function Email({ style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" style={style} aria-hidden="true">
      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" stroke="#333" strokeWidth={2} fill="none" />
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="black" strokeWidth={2} fill="none" />
    </svg>
  );
}
