import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      black: '#000000',

      blue500: '#3B77BC',
      green500: '#81C046',
      red500: '#DE482B',
      yellow: '#FCCF03',
    },
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
      '2xl': '2.875rem',
    },
    fontWeights: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
  },
  media: {
    xs: '(max-width: 30em)', // 480px
    sm: '(max-width: 37.50em)', // 600px
    md: '(max-width: 56.25em)', // 900px
    lg: '(max-width: 75em)', // 1120px
    xl: '(max-width: 90em)', // 1440px
  },
});
