import { keyframes, styled } from '@/styles';

const animation = keyframes({
  '0%': {
    left: '0',
  },
  '100%': {
    left: '200%',
  },
});

export const Container = styled('main', {
  background: '$black',
  height: '100vh',
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',

  flexDirection: 'column',

  section: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    picture: {
      display: 'flex',
      width: '37.5rem',
      height: '21.875rem',

      img: {
        width: '100%',
        height: '100%',
      },
    },

    '> div': {
      border: '0.0625rem solid $white',
      width: '15.625rem',
      height: '1.875rem',
      marginTop: '12.5rem',
      borderRadius: '0.625rem',
      overflow: 'hidden',
    },
  },

  footer: {
    width: '80%',
    display: 'flex',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: '6.25rem',

    '> span': {
      p: {
        color: '$white',
        fontSize: '1.5rem',
      },
    },

    h1: {
      color: '$white',
      bottom: '0',
      position: 'absolute',
      right: '0',
    },
  },
});

export const Stack = styled('ul', {
  height: '100%',
  display: 'flex',
  gap: '0.3rem',

  animation: `${animation}`,
  position: 'relative',
  animationDuration: '4.5s',
  animationIterationCount: 'infinite',
  marginLeft: '-4.6rem',
  animationTimingFunction: 'ease-in-out',
});

export const BlueBox = styled('li', {
  background: '$blue500',
  height: '100%',
  width: '1.25rem',
});
