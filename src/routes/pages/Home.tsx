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

export const Home = () => {
  const [user, setUser] = useState<UserRequest>(userRequestAux);

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

  return (
    <>
      <Header urlProfile={user.imageProfile} />
      <main className="w-full flex">
        <Aside user={user!} />
        <SimpleBar
          style={{ maxHeight: '90vh' }}
          className="h-[90vh] overflow-x-auto w-[60%] py-5 twitch-scrollbar"
        >
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
              <h3 className="text-lg font-bold">Hello!</h3>
              <p className="py-4">Press ESC key or click outside to close</p>
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
