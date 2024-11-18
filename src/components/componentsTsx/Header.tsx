import { Link } from 'react-router-dom';
import { GoHomeFill } from 'react-icons/go';
import { friendNestSytle, headerStyle } from '../styles/headerStyle';
import { Avatar } from 'primereact/avatar';
import { css } from '../../../styled-system/css';

export const Header = () => {
  return (
    <header className={css({ position: 'sticky', width: 'full', top: '0' })}>
      <div className={headerStyle}>
        <div>
          <h2 className={friendNestSytle}>Friend-Nest</h2>
        </div>
        <div>
          <Link to="/">
            <GoHomeFill size={35} className={css({ color: 'white' })} />
          </Link>
        </div>
        <div>
          <Avatar
            image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
            className="mr-2"
            size="large"
            shape="circle"
          />
        </div>
      </div>
    </header>
  );
};
