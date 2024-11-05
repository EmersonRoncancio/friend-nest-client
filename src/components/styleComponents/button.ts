import { styled } from '../../../styled-system/jsx';

export const Button = styled('button', {
  base: {
    backgroundColor: '#06b6d4',
    rounded: '5px',
    paddingX: '7px',
    paddingY: '13px',
    width: '80%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontWeight: 'medium',
    minHeight: '45px',
    md: {
      width: '70%',
    },
  },
});
