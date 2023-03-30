import type { FC } from 'react';

import { IconProps } from '../types/iconProps';
import { IconStats } from '../types/iconStats';

export const VisibilityOn: FC<IconProps> = ({
  size = IconStats.SIZE,
  fill = IconStats.FILL,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 96 960 960"
  >
    <path
      fill={fill}
      d="M480 736q75 0 127.5-52.5T660 556q0-75-52.5-127.5T480 376q-75 0-127.5 52.5T300 556q0 75 52.5 127.5T480 736Zm0-72q-45 0-76.5-31.5T372 556q0-45 31.5-76.5T480 448q45 0 76.5 31.5T588 556q0 45-31.5 76.5T480 664Zm0 192q-146 0-266-81.5T40 556q54-137 174-218.5T480 256q146 0 266 81.5T920 556q-54 137-174 218.5T480 856Zm0-300Zm0 220q113 0 207.5-59.5T832 556q-50-101-144.5-160.5T480 336q-113 0-207.5 59.5T128 556q50 101 144.5 160.5T480 776Z"
    />
  </svg>
);
