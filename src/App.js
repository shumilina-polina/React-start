import React, { useMemo, useState, useRef } from "react";
// Импортируем react в каждый файл, где создаем компонент
import PostList from "./components/PostList";
import "./styles/App.css";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";
import PostFilter from "./components/PostFilter";

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

  const [filter, setFilter] = useState({ sort: "", query: "" });
  //sort - выбранный алгоритм сортировки, query - запрос(строка)

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query.toLowerCase())
    );
  }, [filter.query, sortedPosts]);

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

      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />

      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="Посты про JS"
      />
    </div>
  );
}

export default App;
