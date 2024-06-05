import { useContext, useRef } from "react";
import {PostList} from "../store/post-list-store";

const CreatePost = () => {

  const {addPost} = useContext(PostList)
  const userIdElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const title = titleElement.current.value;
    const body = bodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(' ');

    addPost(userId,title,body,reactions,tags);

    userIdElement.current.value = "";
    titleElement.current.value= "";
    bodyElement.current.value= "";
    reactionsElement.current.value= "";
    tagsElement.current.value= "";
  }

  return (
    <div className="container w-75 mt-5">
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User Id
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="userId"
          aria-describedby="userId"
          placeholder="Your user id"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={titleElement}
          className="form-control"
          id="title"
          aria-describedby="title"
          placeholder="How are you feeling today..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          rows= "4"
          ref={bodyElement}
          className="form-control"
          id="body"
          aria-describedby="body"
          placeholder="Tell us more about it"
          
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of Reactions
        </label>
        <input
          type="text"
          ref={reactionsElement}
          className="form-control"
          id="reactions"
          aria-describedby="reactions"
          placeholder="How many people reacted to this post"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags
        </label>
        <input
          type="text"
          ref={tagsElement}
          className="form-control"
          id="tags"
          aria-describedby="tags"
          placeholder="#hastags"
        />
      </div>
      
      
      <button type="submit" className="btn btn-dark">
        Post
      </button>
    </form>
    </div>
  );
};

export default CreatePost;
