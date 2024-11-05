import { css } from '../../../../styled-system/css';

export const card = css({
  backgroundColor: 'white',
  width: '90%',
  paddingY: '30px',
  rounded: 'md',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: 'md',
  md: {
    width: '80%',
  },
  xl: {
    width: '5/12',
  },
});

export const h1Style = css({
  fontSize: '2xl',
  color: 'blue.400',
  fontWeight: 'extrabold',
  md: {
    fontSize: '4xl',
  },
});

export const h2Style = css({
  fontSize: '3xl',
  color: 'blue.400',
  fontWeight: 'extrabold',
  md: {
    fontSize: '4xl',
  },
});

export const descriptionStyle = css({
  fontSize: 'sm',
  color: 'gray.400',
});
