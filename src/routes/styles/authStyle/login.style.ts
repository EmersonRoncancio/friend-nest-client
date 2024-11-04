import { css } from '../../../../styled-system/css';

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

export const forgotPasswordStyle = css({
  width: '70%',
  display: 'flex',
  justifyContent: 'end',
});

export const registerStyle = css({
  color: 'blue.400',
  marginY: '20px',
});
