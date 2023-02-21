import React from "react";
import posts from "./posts.json"
import PostItem from "./post-item";

const PostList = () => {
    return(
           <ul className="list-group">
               {
              posts.map(post=> <PostItem post = {post}/>)
               }
           </ul>
    );
}
export default PostList;