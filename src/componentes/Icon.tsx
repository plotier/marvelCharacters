import React from "react";

type IconProps = {
  name: string;
  size?: number; 
  className?: string; 
  width?: string; 
  height?: string;
};

function Icon({
  name,
  size = 24,
  className = "",
  width = `${size}`,
  height = `${size}`, 
}: IconProps) {
  const iconSrc = `/icons/${name}.svg`;

  return (
    <img
      src={iconSrc}
      alt={name}
      width={width}
      height={height}
      className={`inline-block ${className} `} 
    />
  );
}

export default Icon;
