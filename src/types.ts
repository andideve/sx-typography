import { ResponsiveValue, CSSProperties } from '@andideve/sx-core';

export interface TypographyProps {
  fontFamily?: ResponsiveValue<CSSProperties['fontFamily']>;
  fontSize?: ResponsiveValue<CSSProperties['fontSize']>;
  fontWeight?: ResponsiveValue<CSSProperties['fontWeight']>;
  lineHeight?: ResponsiveValue<CSSProperties['lineHeight']>;
  letterSpacing?: ResponsiveValue<CSSProperties['letterSpacing']>;
  textAlign?: ResponsiveValue<CSSProperties['textAlign']>;
  fontStyle?: ResponsiveValue<CSSProperties['fontStyle']>;
}
