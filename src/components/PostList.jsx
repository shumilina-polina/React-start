import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts, title }) => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {/* каждый объект преобразовывает в react-элемент (jsx) */}
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </div> //должен быть один корневой элемент (тут div)
  );
};

export default PostList;
