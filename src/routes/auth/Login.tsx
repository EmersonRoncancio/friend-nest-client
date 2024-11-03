import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { css } from '../../../styled-system/css';
import logo from '../../assets/logo.png';

export const Login = () => {
  return (
    <main
      className={css({
        bgGradient: 'to-r',
        gradientFrom: 'blue.400',
        gradientTo: 'blue.100',
        display: 'flex',
        width: 'full',
        height: 'screen',
        justifyContent: 'center',
        alignItems: 'center',
      })}
    >
      <div
        className={css({
          backgroundColor: 'white',
          width: '5/12',
          height: '4/6',
          rounded: 'md',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: 'md',
        })}
      >
        <div
          className={css({
            height: '3/6',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          })}
        >
          <img
            src={logo}
            alt="friend-nest"
            className={css({
              width: '170px',
              height: '140px',
              objectFit: 'cover',
            })}
          />
          <h1
            className={css({
              fontSize: '4xl',
              color: 'blue.400',
              fontWeight: 'extrabold',
            })}
          >
            Bienvenido a Friend-Nest
          </h1>
          <p
            className={css({
              fontSize: 'sm',
              color: 'gray.400',
            })}
          >
            Conéctate con amigos y haz nuevas amistades.
          </p>
        </div>
        <div
          className={css({
            width: '5/6',
            height: '3/6',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '3',
          })}
        >
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
          <Button
            label="Submit"
            className={css({
              width: '70%',
            })}
          />
        </div>
      </div>
    </main>
  );
};
