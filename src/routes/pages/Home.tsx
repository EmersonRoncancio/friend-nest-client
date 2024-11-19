import SimpleBar from 'simplebar-react';
import { Aside } from '../../components/componentsTsx/Aside';
import { Header } from '../../components/componentsTsx/Header';
import 'simplebar-react/dist/simplebar.min.css';
import '../../index.css';

export const Home = () => {
  // display: 'flex',
  // flexDirection: 'column',
  // width: 'full',
  // alignItems: 'center',
  // justifyContent: 'center',
  // gap: '10px',
  return (
    <>
      <Header />
      <main className="w-full flex">
        <Aside />
        <SimpleBar
          style={{ maxHeight: '90vh' }}
          className="h-[90vh] overflow-x-auto w-[60%] py-5 twitch-scrollbar"
        >
          <div className="flex flex-col w-full items-center justify-center gap-[10px]">
            <div className="card bg-base-100 w-96 shadow-xl">
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
            <div className="card bg-base-100 w-96 shadow-xl">
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
            <div className="card bg-base-100 w-96 shadow-xl">
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
        <div className="w-[20%] h-[90vh] bg-slate-500"></div>
      </main>
    </>
  );
};
