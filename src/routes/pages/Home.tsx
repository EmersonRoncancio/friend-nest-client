import SimpleBar from 'simplebar-react';
import { Aside } from '../../components/componentsTsx/Aside';
import { Header } from '../../components/componentsTsx/Header';
import 'simplebar-react/dist/simplebar.min.css';
import '../../index.css';

export const Home = () => {
  return (
    <>
      <Header />
      <main className="w-full flex">
        <Aside />
        <SimpleBar
          style={{ maxHeight: '90vh' }}
          className="h-[90vh] overflow-x-auto w-[60%] py-5 twitch-scrollbar"
        >
          <div className="flex flex-col w-full items-center justify-center gap-12">
            <div className="card bg-base-100 w-[450px] shadow-xl">
              <div className="card-body">
                <div className="flex justify-center items-center gap-4">
                  <div className="avatar">
                    <div className="w-10 rounded-full">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                  </div>
                  <button className="btn w-[90%]">¿Ques estas pensando?</button>
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
