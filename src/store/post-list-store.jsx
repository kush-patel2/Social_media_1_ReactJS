import { createContext, useReducer } from "react";

export const PostList = createContext({
    postList: [],
    addPost: () => {},
    deletePost: () => {}
});
const postListReducer = (currPostList, action) => {
    let newPostList = currPostList;
    if(action.type === 'DELETE_POST'){
        newPostList= currPostList.filter((post) => post.id !== action.payload.postId)
    }else if(action.type === 'ADD_POST'){
        newPostList = [action.payload, ...currPostList]
    }
    return newPostList
}

const PostListProvider = ({children}) =>{

    
    const [postList, dispatchPostList]=useReducer(postListReducer, DEEFAULT_POST_LIST);
    const addPost = (userId,title,body,reactions,tags) => {
        dispatchPostList({
            type: 'ADD_POST',
            payload: {
                id: Date.now(),
                title: title,
                body: body,
                reactions: reactions,
                userID: userId,
                tags: tags
            }
        })
    }

    const deletePost = (postId) => {
        dispatchPostList({
            type: "DELETE_POST",
            payload: {
                postId,
            }
        })
    }

    return (<PostList.Provider value={
        {postList: postList,
        addPost: addPost,
        deletePost: deletePost}
    }>
        {children}
    </PostList.Provider>
)

}

const DEEFAULT_POST_LIST =[{
    id: '1',
    title: 'Going to Mumbai',
    body: 'Hi Friends I am going to Mumbai for vacations. I hope to enjoy a lot.',
    reactions: 2,
    userID: 'user-9',
    tags: ['vacation', 'Mumbai', 'Party',' Relaxation']
},
{
    id: '2',
    title: 'Pass ho gaye bhai.',
    body: '4 saal ki masti ke baad bhi pass ho gaye bhai!',
    reactions: 15,
    userID: 'user-12',
    tags: ['unbelievable', 'Graduate', 'CollegeLife']
}]

export default PostListProvider;