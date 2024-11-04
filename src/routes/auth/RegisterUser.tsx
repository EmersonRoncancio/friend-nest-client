import { InputText } from 'primereact/inputtext';
import {
  card,
  descriptionStyle,
  h1Style,
  mainStyle,
} from '../styles/authStyle/globals.style';
import {
  cardContent,
  cardForm,
  cardHeaderRegister,
} from '../styles/authStyle/register.style';
import { css } from '../../../styled-system/css';
import { FileUpload } from 'primereact/fileupload';
import { formRegister, formRegisterType } from '../helpers/login.helper';
import { Button } from 'primereact/button';

export const RegisterUser = () => {
  return (
    <main className={mainStyle}>
      <form className={card}>
        <div className={cardHeaderRegister}>
          <h1 className={h1Style}>Unete a Friend-Nest</h1>
          <p className={descriptionStyle}>
            ¡Crea tu cuenta y comienza a conectarte!
          </p>
        </div>
        <div className={cardContent}>
          {formRegister.map((register: formRegisterType) => {
            return (
              <div key={register.name} className={cardForm}>
                <label htmlFor="">{register.label}</label>
                <InputText
                  type={register.type}
                  className={css({
                    width: '100%',
                  })}
                  placeholder={register.placeholder}
                />
              </div>
            );
          })}
          <FileUpload
            className={css({
              width: '70%',
            })}
            mode="basic"
            name="demo[]"
            url="/api/upload"
            accept="image/*"
            maxFileSize={1000000}
          />
          <Button
            label="Registrarse"
            className={css({
              width: '70%',
            })}
          />
        </div>
      </form>
    </main>
  );
};
