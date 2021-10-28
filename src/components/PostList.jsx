import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts, title, remove }) => {

  if (!posts.length) {
    return (
      <h1 style={{ textAlign: 'center' }} >
        Посты не найдены!
      </h1>
    )
  }


  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {/* каждый объект преобразовывает в react-элемент (jsx) */}
      {posts.map((post, index) => (
        <PostItem
          remove={remove}
          number={index + 1}
          post={post}
          key={post.id}
        />
      ))}
    </div> //должен быть один корневой элемент (тут div)
  );
};

export default PostList;
