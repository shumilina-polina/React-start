import React, { useState, useRef } from "react";
// Импортируем react в каждый файл, где создаем компонент
import PostList from "./components/PostList";
import "./styles/App.css";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript 1", body: "Description" },
    { id: 2, title: "JavaScript 2", body: "Description" },
    { id: 3, title: "JavaScript 3", body: "Description" },
  ]);
  // useState возвращает массив из 2х эл-тов
  // 1й - начальное зн-е (присвоится в posts), 2й- ф-я, изменяющая состояние (присвоится в setPosts)

  // const bodyInputRef = useRef();
  // bodyInputRef.current- сам dom-эл-т
  // useRef - получаем доступ к DOM-эл-ту и забираем value через пропс ref

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      {/* create - props с callback-функцией*/}

      <hr style={{margin:'15px 0'}}/>
      <div>
        <select>
          <option value='value1'>По названию</option>
          <option value='value2'>По описанию</option>
        </select>
      </div>

      {posts.length ? (
        <PostList remove={removePost} posts={posts} title="Посты про JS" />
      ) : (
        <h1 style={{ textAlign: "center" }}>Посты не найдены</h1>
      )}
    </div>
  );
}

export default App;
