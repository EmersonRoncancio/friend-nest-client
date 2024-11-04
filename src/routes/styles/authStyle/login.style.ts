import { css } from '../../../../styled-system/css';

export const mainStyle = css({
  bgGradient: 'to-r',
  gradientFrom: 'blue.400',
  gradientTo: 'blue.100',
  display: 'flex',
  width: 'full',
  height: 'screen',
  justifyContent: 'center',
  alignItems: 'center',
});

export const cardLogin = css({
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

export const cardHeader = css({
  height: '3/6',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '25px',
});

export const cardMain = css({
  width: '5/6',
  height: '3/6',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '3',
});

export const logoFriendNest = css({
  width: '175px',
  height: '140px',
  objectFit: 'cover',
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

export const forgotPasswordStyle = css({
  width: '70%',
  display: 'flex',
  justifyContent: 'end',
});

export const registerStyle = css({
  color: 'blue.400',
  marginY: '20px',
});
