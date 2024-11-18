import { css } from '../../../styled-system/css';

export const Aside = () => {
  return (
    <aside
      className={css({
        width: '20%',
        height: 'auto',
        // backgroundColor: 'blue.800',
        position: 'sticky',
        display: 'flex',
        top: '70px',
      })}
    >
      <p>Mani</p>
    </aside>
  );
};
