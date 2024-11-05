import { css } from '../../../../styled-system/css';

export const mainStyleLogin = css({
  bgGradient: 'to-r',
  gradientFrom: 'blue.400',
  gradientTo: 'blue.100',
  display: 'flex',
  width: 'full',
  height: '100vh',
  justifyContent: 'center',
  alignItems: 'center',
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
  width: '80%',
  height: '3/6',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '3',
  md: {
    width: '70%',
  },
});

export const logoFriendNest = css({
  width: '155px',
  height: '120px',
  objectFit: 'cover',
  md: {
    width: '175px',
    height: '140px',
  },
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
