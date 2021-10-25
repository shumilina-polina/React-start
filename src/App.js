import React, { useState, useRef } from "react";
// Импортируем react в каждый файл, где создаем компонент
import PostList from "./components/PostList";
import "./styles/App.css";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "аа", body: "бб" },
    { id: 2, title: "гг 2", body: "аа" },
    { id: 3, title: "вв 3", body: "яя" },
  ]);
  // useState возвращает массив из 2х эл-тов
  // 1й - начальное зн-е (присвоится в posts), 2й- ф-я, изменяющая состояние (присвоится в setPosts)

  // const bodyInputRef = useRef();
  // bodyInputRef.current- сам dom-эл-т
  // useRef - получаем доступ к DOM-эл-ту и забираем value через пропс ref

  const [selectedSort, setSelectedSort] = useState("");

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    //sort - выбранный механизм сортировки
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      {/* create - props с callback-функцией*/}

      <hr style={{ margin: "15px 0" }} />
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка по"
          options={[
            { value: "title", name: "По названию" },
            { value: "body", name: "По описанию" },
          ]}
        />
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
