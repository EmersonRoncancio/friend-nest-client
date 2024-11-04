import { css } from '../../../../styled-system/css';

export const card = css({
  backgroundColor: 'white',
  width: '5/12',
  paddingY: '30px',
  rounded: 'md',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: 'md',
});

export const mainStyle = css({
  bgGradient: 'to-r',
  gradientFrom: 'blue.400',
  gradientTo: 'blue.100',
  display: 'flex',
  width: 'full',
  height: '120vh',
  justifyContent: 'center',
  alignItems: 'center',
});

export const h1Style = css({
  fontSize: '4xl',
  color: 'blue.400',
  fontWeight: 'extrabold',
});

export const descriptionStyle = css({
  fontSize: 'sm',
  color: 'gray.400',
});
