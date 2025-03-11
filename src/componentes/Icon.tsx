import React from "react";
import { IconProps } from '../types/types';

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
