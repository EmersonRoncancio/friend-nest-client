import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Link } from 'react-router-dom';
import { css } from '../../../styled-system/css';
import logo from '../../assets/logo2.png';
import {
  cardHeader,
  cardMain,
  forgotPasswordStyle,
  logoFriendNest,
  mainStyleLogin,
  registerStyle,
} from '../styles/authStyle/login.style';
import {
  card,
  descriptionStyle,
  h1Style,
} from '../styles/authStyle/globals.style';
import { Button } from '../../components/styleComponents/button';

export const Login = () => {
  return (
    <main className={mainStyleLogin}>
      <form className={card}>
        <div className={cardHeader}>
          <img src={logo} alt="friend-nest" className={logoFriendNest} />
          <h1 className={h1Style}>Bienvenido a Friend-Nest</h1>
          <p className={descriptionStyle}>
            Conéctate con amigos y haz nuevas amistades.
          </p>
        </div>
        <div className={cardMain}>
          <InputText
            className={css({
              width: '80%',
              md: {
                width: '70%',
              },
            })}
            type="email"
            placeholder="Correo"
          />
          <Password
            className={css({
              width: '80%',
              md: {
                width: '70%',
              },
            })}
            inputId="password"
            feedback={false}
            tabIndex={1}
            placeholder="Contraseña"
          />

          <div className={forgotPasswordStyle}>
            <Link to="" className={css({ color: 'blue.500' })}>
              ¿Olvidaste tu contraseña?
            </Link>
          </div>

          <Button>Iniciar sesión</Button>
          <p>
            No tienes una cuenta?{' '}
            <Link to="/register" className={registerStyle}>
              Registrate
            </Link>
          </p>
        </div>
      </form>
    </main>
  );
};
