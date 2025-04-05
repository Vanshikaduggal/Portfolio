import { PropsWithChildren } from "react";

export const HeroOrbit = ({
  children,
  size,
  rotation,
}: PropsWithChildren<{ size: number; rotation: number }>) => {
  return (
    <div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      style={{
        height: `${size}px`,
        width: `${size}px`,
        transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
      }}
    >
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 animate-spin"
        style={{
          animationDuration: '4s', // Custom speed: 4 seconds per spin
          transform: `rotate(${-rotation}deg)`, // optional: keeps upright
        }}
      >
        {children}
      </div>
    </div>
  );
};
