import { globalCss } from '.';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: '$gray100',
  },

  'body, input, textarea, button': {
    fontFamily: 'Nunito , sans-serif',
  },

  a: {
    textDecoration: 'none',
    cursor: 'pointer',
  },

  button: {
    cursor: 'pointer',
    outline: 0,
    border: 0,
  },

  'ul li': {
    listStyleType: 'none',
  },
});
