import { css } from '../../../../styled-system/css';

export const cardHeaderRegister = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const cardContent = css({
  width: '5/6',
  height: '3/6',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  marginY: '40px',
});

export const cardForm = css({
  width: '70%',
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
});

export const previewImageStyle = css({
  width: '100px',
  height: '100px',
  objectFit: 'cover',
  rounded: '3xl',
});
