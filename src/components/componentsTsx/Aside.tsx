import { Link } from 'react-router-dom';
import { LiaUserFriendsSolid } from 'react-icons/lia';
import { LuUser2 } from 'react-icons/lu';
import { FiMessageCircle } from 'react-icons/fi';

export const Aside = () => {
  return (
    <aside className="w-[20%] flex justify-center py-9">
      <div className="w-full flex flex-col items-end">
        <div className="card shadow-xl w-[90%] p-4 flex flex-col gap-3">
          <div className="flex gap-6">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div>
              <h2 className="font-semibold">FullName</h2>
              <span className="text-gray-500">@UserName</span>
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
        </div>
      </div>
    </aside>
  );
};
