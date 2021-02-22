import { css } from '@emotion/react'

export const sizes = {
  tablet: '768',
  desktop: '1024',
 };
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  const pxSize = sizes[label];

  accumulator[label] = (...args) => css`
    @media (min-width: ${pxSize}px) {
      ${css(...args)};
    }
  `;

  return accumulator;
}, {});