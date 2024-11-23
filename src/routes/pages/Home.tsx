import SimpleBar from 'simplebar-react';
import { Aside } from '../../components/componentsTsx/Aside';
import { Header } from '../../components/componentsTsx/Header';
import 'simplebar-react/dist/simplebar.min.css';
import '../../index.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { envs } from '../../envs';
import Cookies from 'js-cookie';
import { UserRequest, PostRequest } from '../../types/user';
import {
  userRequestAux,
  postRequestAux,
  skeleton,
} from '../helpers/login.helper';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import { IoIosImages, IoMdClose } from 'react-icons/io';
import { CardPost } from '../../components/componentsTsx/CardPost';
import { Skeleton } from '../../components/componentsTsx/Skeleton';

export const Home = () => {
  const [user, setUser] = useState<UserRequest>(userRequestAux);
  const [files, setFiles] = useState<File[]>([]);
  const [urlImages, setUrlImages] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [post, setPost] = useState<PostRequest[]>(postRequestAux);
  const [loadingPosts, setLoadingPosts] = useState(false);

  const { register, setValue, handleSubmit } = useForm();

  useEffect(() => {
    const token = Cookies.get('accesHome');
    setLoadingPosts(true);
    axios
      .get(`${envs.API}/auth/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setUser(res.data));

    axios
      .get(`${envs.API}/publications/?page=1&limit=15`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      })
      .catch(() => console.log('error'))
      .finally(() => setLoadingPosts(false));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);

      setFiles((prevFiles) => [...prevFiles, ...filesArray]);

      const urls = filesArray.map((file) => URL.createObjectURL(file));
      setUrlImages((prevUrls) => [...prevUrls, ...urls]);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    const formData = new FormData();
    formData.append('contentDescription', data.contentDescription);
    files.forEach((file) => {
      formData.append('files', file);
    });
    setLoading(true);
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
      .finally(() => {
        setValue('contentDescription', '');
        setUrlImages([]);
        setFiles([]);
        setLoading(false);
        (document.getElementById('my_modal_2') as HTMLDialogElement)!.close();
      });
  };

  return (
    <div className="w-full flex flex-col items-center fixed bg-[#f3f4f6]">
      <Header urlProfile={user.imageProfile} />
      <main className="min-w-[900px] xl:min-w-[1300px] flex">
        <Aside user={user!} loading={loadingPosts} />
        <SimpleBar
          style={{ maxHeight: '90vh' }}
          className="overflow-x-auto w-[40%] py-5 twitch-scrollbar"
        >
          <ToastContainer />
          <dialog id="my_modal_2" className="modal">
            <SimpleBar className="modal-box text-simplebar">
              <div className="w-full flex flex-col items-center gap-8">
                <h2 className="font-bold text-xl">Crear Post</h2>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="w-[80%] flex flex-col gap-3"
                >
                  <textarea
                    className="textarea w-full border-0 border-white focus:outline-none"
                    placeholder="¿Que estas pensando?"
                    {...register('contentDescription')}
                  ></textarea>
                  <div
                    className={`grid grid-cols-5 gap-1 relative py-4 rounded-lg px-2 ${urlImages.length > 0 ? 'border' : ''}`}
                  >
                    {urlImages.length > 0 ? (
                      <button
                        type="button"
                        className="w-6 h-6 rounded-full bg-slate-400 flex justify-center items-center absolute bottom-0-0 right-0"
                        onClick={() => {
                          setUrlImages([]);
                          setFiles([]);
                        }}
                      >
                        <IoMdClose />
                      </button>
                    ) : null}

                    {urlImages.map((url, index) => {
                      return (
                        <img
                          className="w-[50px] h-[50px] object-cover rounded-xl border-2 border-blue-300"
                          key={index}
                          src={url}
                          alt="image"
                        />
                      );
                    })}
                  </div>
                  <label className="btn btn-neutral w-full">
                    <IoIosImages size={25} />
                    <input
                      hidden
                      type="file"
                      multiple
                      accept="image/*"
                      {...register('images')}
                      onChange={handleChange}
                    />
                  </label>
                  <button
                    className="btn btn-secondary w-full"
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="loading loading-infinity loading-lg"></span>
                    ) : (
                      'Post'
                    )}
                  </button>
                </form>
              </div>
            </SimpleBar>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
          <div className="flex flex-col w-full items-center justify-center gap-4">
            {loadingPosts ? (
              <Skeleton />
            ) : (
              <div className="card bg-base-100 w-[95%] rounded-lg border-2">
                <div className="card-body">
                  <div className="flex flex-col justify-center items-center gap-4">
                    <div className="flex justify-center items-center gap-4 w-full">
                      <div className="avatar">
                        <div className="w-10 rounded-full">
                          <img src={user?.imageProfile} />
                        </div>
                      </div>
                      <button
                        className="input input-bordered w-[90%] flex justify-start items-center focus:outline-none hover:bg-slate-100"
                        onClick={() =>
                          (document.getElementById(
                            'my_modal_2'
                          ) as HTMLDialogElement)!.showModal()
                        }
                      >
                        <span className="text-gray-400">
                          ¿Que estas pensando?
                        </span>
                      </button>
                    </div>
                    <button
                      className="btn w-full"
                      onClick={() =>
                        (document.getElementById(
                          'my_modal_2'
                        ) as HTMLDialogElement)!.showModal()
                      }
                    >
                      <IoIosImages size={25} />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {post.map((post, index) => {
              return (
                <>
                  {loadingPosts ? (
                    skeleton.map(() => <Skeleton />)
                  ) : (
                    <CardPost key={index} post={post} />
                  )}
                </>
              );
            })}
          </div>
        </SimpleBar>
        <div className="w-[30%]"></div>
      </main>
    </div>
  );
};
