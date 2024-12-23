import { Link } from 'react-router-dom';
import { LiaUserFriendsSolid } from 'react-icons/lia';
import { LuUser2 } from 'react-icons/lu';
import { FiMessageCircle } from 'react-icons/fi';
import { UserRequest } from '../../types/user';

export const Aside = ({
  user,
  loading,
}: {
  user: UserRequest;
  loading: boolean;
}) => {
  return (
    <aside className="w-[30%] flex justify-center py-5">
      <div className="w-full flex flex-col items-end">
        <div className="card w-[90%] p-4 flex flex-col gap-3 bg-white border-2 rounded-lg">
          {loading ? (
            <div className="flex w-full flex-col gap-4">
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
          ) : (
            <>
              <div className="flex gap-6">
                <div className="avatar">
                  <div className="w-10 h-10 rounded-full">
                    <img src={user?.imageProfile} />
                  </div>
                </div>
                <div>
                  <h2 className="font-semibold">{user.fullName}</h2>
                  <span className="text-gray-500">@{user.username}</span>
                </div>
              </div>
              <Link
                to="/home"
                className="rounded w-full py-3 px-2 hover:bg-slate-100 flex items-center gap-3"
              >
                <LiaUserFriendsSolid size={25} />
                <span className="font-semibold">Amigos</span>
              </Link>
              <Link
                to="/home"
                className="rounded w-full py-3 px-2 hover:bg-slate-100 flex items-center gap-3"
              >
                <LuUser2 size={20} />
                <span className="font-semibold">Grupos</span>
              </Link>
              <Link
                to="/home"
                className="rounded w-full py-3 px-2 hover:bg-slate-100 flex items-center gap-3"
              >
                <FiMessageCircle size={20} />
                <span className="font-semibold">Mensajes</span>
              </Link>
            </>
          )}
        </div>
      </div>
    </aside>
  );
};
