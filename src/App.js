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
  // 0 - начальное значение/состояние
  // useState возвращает массив из 2х эл-тов
  // 1й - начальное зн-е (присвоится в posts), 2й- ф-я, изменяющая состояние (присвоится в setPosts)

  const [title, setTitle] = useState("");
  const bodyInputRef = useRef();
  // bodyInputRef.current- сам dom-эл-т

  // useRef - получаем доступ к DOM-эл-ту и забираем value через пропс ref
  const addNewPost = (e) => {
    e.preventDefault(); //предотвратить перезагрузку старицы при клике на submit кнопку (избыточное действие)
  };

  return (
    <div className="App">
      <form>
        {/* Управляемый компонент */}
        <MyInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Название поста"
        />
        {/* Неуправляемый\Неконтролируемый компонент */}
        <MyInput ref={bodyInputRef} type="text" placeholder="Описание поста" />
        <MyButton onClick={addNewPost} disabled>
          Создать пост
        </MyButton>
      </form>
      <PostList posts={posts} title="Посты про JS" />
    </div>
  );
}

export default App;
