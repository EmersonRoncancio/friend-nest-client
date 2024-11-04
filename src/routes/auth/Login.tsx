import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import { css } from '../../../styled-system/css';
import logo from '../../assets/logo2.png';
import {
  cardHeader,
  cardLogin,
  cardMain,
  descriptionStyle,
  forgotPasswordStyle,
  h1Style,
  logoFriendNest,
  mainStyle,
  registerStyle,
} from '../styles/authStyle/login.style';

export const Login = () => {
  return (
    <main className={mainStyle}>
      <div className={cardLogin}>
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
              width: '70%',
            })}
            keyfilter="int"
            placeholder="Correo"
          />
          <Password
            className={css({
              width: '70%',
            })}
            inputId="password"
            feedback={false}
            tabIndex={1}
            placeholder="Contraseña"
          />

          <div className={forgotPasswordStyle}>
            <Link
              to=""
              className={css({
                color: 'blue.400',
              })}
            >
              ¿Olvidaste tu contraseña?
            </Link>
          </div>

          <Button
            label="Iniciar sesión"
            className={css({
              width: '70%',
            })}
          />
          <p>
            No tienes una cuenta?{' '}
            <Link to="/register" className={registerStyle}>
              Registrate
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};
