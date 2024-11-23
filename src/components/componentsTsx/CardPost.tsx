import { PostRequest } from '../../types/user';
import { AiOutlineLike } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa6';

export const CardPost = ({ post }: { post: PostRequest }) => {
  return (
    <div className="card bg-white w-[95%] border-2 rounded-lg max-h-[750px] px-1">
      <div className="card-body h-[20%]">
        <div className="w-full flex gap-2 items-center">
          <div className="avatar">
            <div className="w-10 h-10 rounded-full">
              <img src={post.author.imageProfile} />
            </div>
          </div>
          <h3 className="font-semibold">{post.author.username}</h3>
        </div>
        <p>{post.contentDescription}</p>
      </div>
      <figure className="h-[60%]">
        <img
          className="w-full max-h-[450px] object-cover rounded-lg"
          src={post.media[0]}
          alt={post.media.length > 1 ? 'image' : undefined}
        />
      </figure>
      <hr className="my-3" />
      <div className="flex mb-3 h-[20%]">
        <button className="w-[50%] btn bg-white border-0 outline-none rounded shadow-none">
          <AiOutlineLike size={25} />
          <span>Like</span>
        </button>
        <button className="w-[50%] btn bg-white border-0 outline-none rounded shadow-none">
          <FaRegComment size={20} />
          <span>comentar</span>
        </button>
      </div>
    </div>
  );
};
