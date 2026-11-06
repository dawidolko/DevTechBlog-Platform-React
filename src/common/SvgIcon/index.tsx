import { SvgIconProps } from "../types";

/*
  Sizes arrive as CSS lengths such as "60px" or "100%". The HTML attributes accept
  whole numbers only, so anything else is applied as a style.
*/
const pixels = (size: string) => (/^\d+(px)?$/.test(size) ? parseInt(size, 10) : undefined);

export const SvgIcon = ({ src, width, height }: SvgIconProps) => (
  <img
    src={`/img/svg/${src}`}
    alt=""
    width={pixels(width)}
    height={pixels(height)}
    style={pixels(width) && pixels(height) ? undefined : { width, height }}
  />
);
