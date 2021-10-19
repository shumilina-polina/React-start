import React, { useState, useRef } from "react";
import PostList from "./components/PostList";
import "./styles/App.css";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
// Импортируем react в каждый файл, где создаем компонент

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript 1", body: "Description" },
    { id: 2, title: "JavaScript 2", body: "Description" },
    { id: 3, title: "JavaScript 3", body: "Description" },
  ]);
  // useState возвращает массив из 2х эл-тов
  // 1й - начальное зн-е (присвоится в posts), 2й- ф-я, изменяющая состояние (присвоится в setPosts)

  const [post, setPost] = useState({ title: "", body: "" });
  // const bodyInputRef = useRef();
  // bodyInputRef.current- сам dom-эл-т
  // useRef - получаем доступ к DOM-эл-ту и забираем value через пропс ref
  const addNewPost = (e) => {
    e.preventDefault(); //предотвратить перезагрузку страницы при клике на submit кнопку (избыточное действие)
    setPosts([...posts, { ...post, id: Date.now() }]);
    setPost({ title: "", body: "" });
  };

  return (
    <div className="App">
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
      <PostList posts={posts} title="Посты про JS" />
    </div>
  );
}

export default App;
