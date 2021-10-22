import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const PostForm = ({create}) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault(); //предотвратить перезагрузку страницы при клике на submit кнопку (избыточное действие)
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", body: "" });
  };

  return (
    <form>
      {/* Управляемый компонент */}
      <MyInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })} //изменяем только нужное для нас поле
        type="text"
        placeholder="Название поста"
      />
      {/* Неуправляемый\Неконтролируемый компонент */}
      <MyInput
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="Описание поста"
      />
      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
  );
};

export default PostForm;
