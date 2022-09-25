import { system, SystemConfig, ThemeKey } from '@andideve/sx-core';
import { TypographyProps } from './types';

const config: SystemConfig<TypographyProps> = {
  fontFamily: {
    property: 'fontFamily',
    scale: ThemeKey.fonts,
  },
  fontSize: {
    property: 'fontSize',
    scale: ThemeKey.fontSizes,
  },
  fontWeight: {
    property: 'fontWeight',
    scale: ThemeKey.fontWeights,
  },
  lineHeight: {
    property: 'lineHeight',
    scale: ThemeKey.lineHeights,
  },
  letterSpacing: {
    property: 'letterSpacing',
    scale: ThemeKey.letterSpacings,
  },
  textAlign: true,
  fontStyle: true,
};

export const typography = system(config);

export { TypographyProps };
export default typography;
