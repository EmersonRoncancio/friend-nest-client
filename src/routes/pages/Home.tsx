import SimpleBar from 'simplebar-react';
import { Aside } from '../../components/componentsTsx/Aside';
import { Header } from '../../components/componentsTsx/Header';
import 'simplebar-react/dist/simplebar.min.css';
import '../../index.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { envs } from '../../envs';
import Cookies from 'js-cookie';
import { UserRequest } from '../../types/user';
import { userRequestAux } from '../helpers/login.helper';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';

export const Home = () => {
  const [user, setUser] = useState<UserRequest>(userRequestAux);

  const { register, setValue, handleSubmit } = useForm();

  useEffect(() => {
    const token = Cookies.get('accesHome');
    axios
      .get(`${envs.API}/auth/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setUser(res.data));
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    console.log(Cookies.get('accesHome'));
    console.log(data);
    const formData = new FormData();
    formData.append('contentDescription', data.contentDescription);
    axios
      .post(`${envs.API}/publications/createPublication`, formData, {
        headers: {
          Authorization: `Bearer ${Cookies.get('accesHome')}`,
        },
      })
      .then(() => {
        toast.success('Post creado', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      })
      .catch(() => {
        toast.success('Error al crear post', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      })
      .finally(() => setValue('contentDescription', ''));
  };

  return (
    <>
      <Header urlProfile={user.imageProfile} />
      <main className="w-full flex">
        <Aside user={user!} />
        <SimpleBar
          style={{ maxHeight: '90vh' }}
          className="h-[90vh] overflow-x-auto w-[60%] py-5 twitch-scrollbar"
        >
          <ToastContainer />
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
              <div className="w-full flex flex-col items-center gap-8">
                <h2 className="font-bold text-xl">Crear Post</h2>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="w-[80%] flex flex-col gap-3"
                >
                  <textarea
                    className="textarea w-full border-0 border-white"
                    placeholder="¿Que estas pensando?"
                    {...register('contentDescription')}
                  ></textarea>
                  <button className="btn btn-secondary w-full">Post</button>
                </form>
              </div>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
          <div className="flex flex-col w-full items-center justify-center gap-12">
            <div className="card bg-base-100 w-[450px] shadow-xl">
              <div className="card-body">
                <div className="flex justify-center items-center gap-4">
                  <div className="avatar">
                    <div className="w-10 rounded-full">
                      <img src={user?.imageProfile} />
                    </div>
                  </div>
                  <button
                    className="btn w-[90%]"
                    onClick={() =>
                      (document.getElementById(
                        'my_modal_2'
                      ) as HTMLDialogElement)!.showModal()
                    }
                  >
                    ¿Que estas pensando?
                  </button>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 w-[450px] shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
              </div>
              <figure>
                <img
                  className="w-full h-full object-cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs9JJW0aIvDVxlS7Bd7NwT07tNHZ1QfCzfeQ&s"
                  alt="Shoes"
                />
              </figure>
            </div>
            <div className="card bg-base-100 w-[450px] shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
              </div>
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
            </div>
            <div className="card bg-base-100 w-[450px] shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
              </div>
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
            </div>
          </div>
        </SimpleBar>
        <div className="w-[20%]"></div>
      </main>
    </>
  );
};
