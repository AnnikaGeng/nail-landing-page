type WaveProps = {
  fromColor: string;
  toColor: string;
  flip?: boolean;
};

export default function Wave({ fromColor, toColor, flip = false }: WaveProps) {
  return (
    <div
      className="leading-none overflow-hidden -mb-px"
      style={{ transform: flip ? "scaleY(-1)" : undefined }}
    >
      <svg
        viewBox="0 0 1440 64"
        preserveAspectRatio="none"
        className="block w-full h-16"
      >
        <rect width="1440" height="64" fill={fromColor} />
        <path
          d="M0,32 C360,64 1080,0 1440,32 L1440,64 L0,64 Z"
          fill={toColor}
        />
      </svg>
    </div>
  );
}
