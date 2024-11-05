import { InputText } from 'primereact/inputtext';
import {
  card,
  descriptionStyle,
  h2Style,
} from '../styles/authStyle/globals.style';
import {
  cardContent,
  cardForm,
  cardHeaderRegister,
  mainStyleRegister,
  previewImageStyle,
} from '../styles/authStyle/register.style';
import { css } from '../../../styled-system/css';
import {
  addUserType,
  formRegister,
  formRegisterType,
} from '../helpers/login.helper';
import { SubmitHandler, useForm } from 'react-hook-form';
import { userType } from '../../types/user';
import { User, UserFormData } from '../../zod/routesAuth';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRef, useState } from 'react';
import { FileContent } from '../../components/styleComponents/contentFile';
import { envs } from '../../envs';
import ErrorMessage from '../../components/componentsTsx/ErrorMessage';
import axios from 'axios';
import { Button } from '../../components/styleComponents/button';
import { Link } from 'react-router-dom';

export const RegisterUser = () => {
  const file = useRef<File | string>();
  const [previewImage, setPreviewImage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>({ resolver: zodResolver(User) });

  const onSubmit: SubmitHandler<userType> = (data) => {
    setLoading(true);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { profile, ...formValue } = data;

    const formData = new FormData();

    Object.entries(formValue).forEach(([key, value]) => {
      formData.append(key, value.toString());
    });

    formData.append('profile', file.current!);

    axios
      .post(`${envs.API}/auth/`, formData)
      .then((res) => console.log(res))
      .catch((error) => console.log(error))
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 9000);
      });

    setPreviewImage('');
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
    <main className={mainStyleRegister}>
      <form onSubmit={handleSubmit(onSubmit)} className={card}>
        <div className={cardHeaderRegister}>
          <h2 className={h2Style}>Unete a Friend-Nest</h2>
          <p className={descriptionStyle}>
            ¡Crea tu cuenta y comienza a conectarte!
          </p>
        </div>
        <div className={cardContent}>
          {formRegister.map((registerForm: formRegisterType, index) => {
            return (
              <div key={index} className={cardForm}>
                <label htmlFor={registerForm.name}>{registerForm.label}</label>
                <InputText
                  type={registerForm.type}
                  className={css({
                    width: '100%',
                  })}
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
          <FileContent>
            Agregar Imagenes
            <input
              hidden
              type="file"
              multiple
              accept="image/*"
              {...register('profile')}
              onChange={handleChange}
            />
          </FileContent>

          {previewImage && (
            <img className={previewImageStyle} src={previewImage} alt="" />
          )}
          <Button disabled={loading}>
            {loading ? (
              <i className="pi pi-spin pi-cog" style={{ fontSize: '22px' }}></i>
            ) : (
              'Registrar'
            )}
          </Button>
        </div>
        <span>
          ¿Ya tienes una cuenta?{' '}
          <Link to="/" className={css({ color: 'blue.500' })}>
            Acceso
          </Link>
        </span>
      </form>
    </main>
  );
};
