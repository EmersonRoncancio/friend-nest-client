import React from 'react';
import { PostsRquest } from '../../types/user';

export const CardPost = ({
  post,
  user,
}: {
  post: PostsRquest;
  user: string;
}) => {
  return (
    <div className="card bg-white w-[95%] border-2 rounded-lg">
      <div className="card-body">
        <div className="avatar">
          <div className="w-10 h-10 rounded-full">
            <img src={user} />
          </div>
        </div>
        <p>{post.contentDescription}</p>
      </div>
      <figure>
        <img
          className="w-full h-full object-cover"
          src={post.media[0]}
          alt={post.media.length > 1 ? 'image' : undefined}
        />
      </figure>
    </div>
  );
};
