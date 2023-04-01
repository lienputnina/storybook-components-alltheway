import type { FC } from 'react';

import { IconProps, DefaultPropValues } from '../types';

export const ChevronRight: FC<IconProps> = ({
  size = DefaultPropValues.SIZE,
  fill = DefaultPropValues.FILL,
}) => (
  <div style={{ width: size, height: size }}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960">
      <path
        fill={fill}
        d="m376 816-56-56 184-184-184-184 56-56 240 240-240 240Z"
      />
    </svg>
  </div>
);
