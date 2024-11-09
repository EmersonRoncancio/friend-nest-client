import { InputText } from 'primereact/inputtext';
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
import { accesUser, formLogin } from '../helpers/login.helper';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AccesUser, UserAccesFormData } from '../../zod/routesAuth';
import { AccesUserType } from '../../types/user';
import axios from 'axios';
import { envs } from '../../envs';
import { useRef, useState, Fragment } from 'react';
import { Toast } from 'primereact/toast';
import ErrorMessage from '../../components/componentsTsx/ErrorMessage';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export const Login = () => {
  const toast = useRef<Toast>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<UserAccesFormData>({ resolver: zodResolver(AccesUser) });

  const onSubmit: SubmitHandler<AccesUserType> = (e) => {
    setLoading(true);
    axios
      .post(`${envs.API}/auth/login`, e)
      .then((res) => {
        toast.current?.show({
          severity: 'success',
          summary: 'Success',
          detail: 'Bienvenido',
          life: 3000,
        });
        Cookies.set('accesHome', res.data.token);
        navigate('/home');
      })
      .catch(() => {
        toast.current?.show({
          severity: 'error',
          summary: 'Error',
          detail: 'Error al iniciar sesión',
          life: 3000,
        });
      })
      .finally(() => setLoading(false));

    accesUser.map((value) => {
      setValue(value, '');
    });
  };

  return (
    <main className={mainStyleLogin}>
      <Toast ref={toast} />
      <form onSubmit={handleSubmit(onSubmit)} className={card}>
        <div className={cardHeader}>
          <img src={logo} alt="friend-nest" className={logoFriendNest} />
          <h1 className={h1Style}>Bienvenido a Friend-Nest</h1>
          <p className={descriptionStyle}>
            Conéctate con amigos y haz nuevas amistades.
          </p>
        </div>
        <div className={cardMain}>
          {formLogin.map((input, index) => {
            return (
              <Fragment key={index}>
                <InputText
                  className={css({
                    width: '80%',
                    md: {
                      width: '70%',
                    },
                  })}
                  type={input.type}
                  placeholder={input.placeholder}
                  {...register(input.name)}
                />
                <ErrorMessage errors={errors} fieldName={input.name} />
              </Fragment>
            );
          })}
          <div className={forgotPasswordStyle}>
            <Link to="" className={css({ color: 'blue.500' })}>
              ¿Olvidaste tu contraseña?
            </Link>
          </div>

          <Button>
            {loading ? (
              <i className="pi pi-spin pi-cog" style={{ fontSize: '23px' }}></i>
            ) : (
              'Iniciar sesión'
            )}
          </Button>
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
