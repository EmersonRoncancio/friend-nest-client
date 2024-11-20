import { Link } from 'react-router-dom';
import logo from '../../assets/logo2.png';
import { accesUser, formLogin } from '../helpers/login.helper';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AccesUser, UserAccesFormData } from '../../zod/routesAuth';
import { AccesUserType } from '../../types/user';
import axios from 'axios';
import { envs } from '../../envs';
import { useState, Fragment } from 'react';
import ErrorMessage from '../../components/componentsTsx/ErrorMessage';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { toast, ToastContainer } from 'react-toastify';

export const Login = () => {
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
        Cookies.set('accesHome', res.data.token);
        navigate('/home');
      })
      .catch(() => {
        toast.error('Error al registrarse', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      })
      .finally(() => setLoading(false));

    accesUser.map((value) => {
      setValue(value, '');
    });
  };

  return (
    <main className="bg-gradient-to-r from-blue-400 to-blue-100 w-full h-screen flex justify-center items-center">
      <ToastContainer />
      <form
        className="bg-white w-[90%] py-[30px] rounded-md flex flex-col justify-center items-center shadow-md md:w-[80%] xl:w-5/12"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="h-3/6 flex flex-col justify-center items-center mb-[25px]">
          <img
            src={logo}
            alt="friend-nest"
            className="w-[155px] h-[120px] object-cover md:w-[175px] md:h-[140px]"
          />
          <h1 className="text-2xl text-blue-400 font-extrabold md:text-4xl">
            Bienvenido a Friend-Nest
          </h1>
          <p className="text-sm text-gray-400">
            Conéctate con amigos y haz nuevas amistades.
          </p>
        </div>
        <div className="w-[80%] h-3/6 flex flex-col justify-center items-center gap-3 md:w-[70%]">
          {formLogin.map((input, index) => {
            return (
              <Fragment key={index}>
                <input
                  className="input input-bordered w-[80%] md:w-[70%]"
                  type={input.type}
                  placeholder={input.placeholder}
                  {...register(input.name)}
                />
                <ErrorMessage errors={errors} fieldName={input.name} />
              </Fragment>
            );
          })}
          <div className="w-[70%] flex justify-end">
            <Link to="" className="text-blue-500">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
          <button
            className="btn btn-secondary w-[80%] flex justify-center items-center md:w-[70%]"
            disabled={loading}
          >
            {loading ? (
              <span className="loading loading-infinity loading-lg"></span>
            ) : (
              'Iniciar sesión'
            )}
          </button>
          <p>
            No tienes una cuenta?{' '}
            <Link to="/register" className="text-blue-500 my-[20px]">
              Registrate
            </Link>
          </p>
        </div>
      </form>
    </main>
  );
};
