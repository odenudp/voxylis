export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 148"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-[130px] h-auto ${className}`}
    >
      <line
        x1="44"
        y1="30"
        x2="82"
        y2="108"
        stroke="#E8E2D2"
        strokeWidth="16"
        strokeLinecap="round"
      />
      <line
        x1="120"
        y1="30"
        x2="82"
        y2="108"
        stroke="#13E9BA"
        strokeWidth="19"
        strokeLinecap="round"
      />
      <circle cx="82" cy="108" r="5.5" fill="#13E9BA" />
      <line
        x1="132"
        y1="74"
        x2="132"
        y2="64"
        stroke="#13E9BA"
        strokeWidth="5.5"
        strokeLinecap="round"
      />
      <line
        x1="144"
        y1="74"
        x2="144"
        y2="55"
        stroke="#13E9BA"
        strokeWidth="5.5"
        strokeLinecap="round"
      />
      <line
        x1="156"
        y1="74"
        x2="156"
        y2="44"
        stroke="#13E9BA"
        strokeWidth="5.5"
        strokeLinecap="round"
      />
      <text
        x="192"
        y="98"
        fontFamily="Ubuntu,sans-serif"
        fontWeight="700"
        fontSize="58"
        letterSpacing="-1"
      >
        <tspan fill="#13E9BA">V</tspan>
        <tspan fill="#E8E2D2">oxylis</tspan>
      </text>
    </svg>
  );
}
