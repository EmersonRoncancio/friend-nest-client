import { addUserType, formRegister, formsTypes } from '../helpers/login.helper';
import { SubmitHandler, useForm } from 'react-hook-form';
import { userType } from '../../types/user';
import { User, UserFormData } from '../../zod/routesAuth';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRef, useState } from 'react';
import { envs } from '../../envs';
import ErrorMessage from '../../components/componentsTsx/ErrorMessage';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const RegisterUser = () => {
  const file = useRef<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [errorFile, setErrorFile] = useState<boolean>(false);

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>({ resolver: zodResolver(User) });

  const onSubmit: SubmitHandler<userType> = (data) => {
    if (file.current === null) {
      setErrorFile(true);
      return;
    } else {
      setErrorFile(false);
    }
    setLoading(true);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { profile, ...formValue } = data;

    const formData = new FormData();

    Object.entries(formValue).forEach(([key, value]) => {
      formData.append(key, value.toString());
    });

    formData.append('profile', file.current!);

    axios
      .post(`${envs.API}/auth/register`, formData)
      .then(() => {})
      .catch(() => {})
      .finally(() => {
        setLoading(false);
      });

    setPreviewImage('');
    file.current = null;
    addUserType.map((user) => {
      setValue(user, '');
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const arrFiles = Array.from(event.target.files);
      file.current = arrFiles[0];

      const urlImg = URL.createObjectURL(arrFiles[0]);
      setPreviewImage(urlImg);
    }
  };

  return (
    <main className="bg-gradient-to-r from-blue-400 to-blue-100 w-full h-[150vh] flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white w-[90%] py-[30px] rounded-md flex flex-col justify-center items-center shadow-md md:w-[80%] xl:w-5/12"
      >
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-3xl text-blue-400 font-extrabold md:text-4xl">
            Unete a Friend-Nest
          </h2>
          <p className="text-sm text-gray-400">
            ¡Crea tu cuenta y comienza a conectarte!
          </p>
        </div>
        <div className="w-5/6 h-3/6 flex flex-col justify-center items-center gap-[10px] my-[40px]">
          {formRegister.map((registerForm: formsTypes, index) => {
            return (
              <div
                key={index}
                className="w-[80%] flex flex-col gap-[5px] md:w-[70%]"
              >
                <label htmlFor={registerForm.name}>{registerForm.label}</label>
                <input
                  type={registerForm.type}
                  className="input input-bordered w-full"
                  placeholder={registerForm.placeholder}
                  {...register(registerForm.name)}
                />
                <ErrorMessage
                  errors={errors}
                  key={register.name}
                  fieldName={registerForm.name}
                />
              </div>
            );
          })}
          <label className="bg-secondary rounded-[5px] px-[7px] py-[13px] w-[80%] flex justify-center items-center text-white font-medium text-md md:w-[70%]">
            Agregar Imagenes
            <input
              hidden
              type="file"
              multiple
              accept="image/*"
              {...register('profile')}
              onChange={handleChange}
            />
          </label>

          {errorFile ? (
            <span style={{ color: 'red' }}>La imagen es requerida</span>
          ) : null}

          {previewImage && (
            <>
              <img
                className="w-[100px] h-[100px] object-cover rounded-3xl"
                src={previewImage}
                alt=""
              />
            </>
          )}
          <button
            className="btn btn-secondary w-[80%] flex justify-center items-center md:w-[70%]"
            disabled={loading}
          >
            {loading ? (
              <span className="loading loading-infinity loading-lg"></span>
            ) : (
              'Registrar'
            )}
          </button>
        </div>
        <span>
          ¿Ya tienes una cuenta?{' '}
          <Link to="/" className="text-blue-500">
            Acceso
          </Link>
        </span>
      </form>
    </main>
  );
};
