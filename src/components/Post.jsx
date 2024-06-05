import { useContext } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import {PostList} from "../store/post-list-store";

const Post = ({ post }) => {
    const {deletePost} = useContext(PostList);
  return (
    <div className="card text-bg-dark post-card" >
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-info mx-1 my-1">{tag}</span>
        ))}
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={() => deletePost(post.id)}>
        <MdOutlineDeleteOutline />
          <span className="visually-hidden">Reactions</span>
        </span>
        <div className="alert alert-info reactions" role="alert">
            This post has been reacted by {post.reactions} people.
        </div>
      </div>
    </div>
  );
};

export default Post;
