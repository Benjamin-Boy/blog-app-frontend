import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Imports data files/API
import data from "./data/blogPosts.json";

// Imports services
import dateFormat from "./services/dateFormat";

// Imports components files
import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home";
import SinglePost from "./pages/SinglePost";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Error from "./pages/Error";
import Loader from "./pages/Loader";

// Import custom hooks
import useFetch from "./hooks/useFetch";

// Imports SCSS files
import "./app.scss";

const baseUrl = "http://localhost:1337/";

const App = () => {
  // const { loading, error, data } = useFetch(
  //   `${baseUrl}api/posts?populate=author, category, image, image.media`
  // );

  const [posts, setPosts] = useState(data);
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [search, setSearch] = useState("");

  // useEffect(() => {
  //   let newData = [];

  //     newData = data.map((post) => {
  //       return {
  //         id: post.id,
  //         title: post.attributes.title,
  //         description: post.attributes.description,
  //         text: post.attributes.text,
  //         author: {
  //           authorID: post.attributes.author.data.id,
  //           name: post.attributes.author.data.attributes.name,
  //         },
  //         category: {
  //           categoryID: post.attributes.category.data.id,
  //           label: post.attributes.category.data.attributes.label,
  //         },
  //         date: dateFormat(post.attributes.createdAt),
  //         image: {
  //           media: `http://localhost:1337${post.attributes.image.data.attributes.media.data.attributes.url}`,
  //         },
  //       };
  //     });

  //   setPosts(newData);
  // }, []);

  const filterCategories = (category) => {
    const newPosts = posts.filter((post) => post.category.label === category);

    setPosts(newPosts);
    setCategory(category);
    setAuthor("");
  };

  const filterAuthors = (author) => {
    const newPosts = posts.filter((post) => post.author.name === author);

    setPosts(newPosts);
    setAuthor(author);
    setCategory("");
  };

  const resetFiltering = () => {
    // const newData = data.map((post) => {
    //   return {
    //     id: post.id,
    //     title: post.attributes.title,
    //     description: post.attributes.description,
    //     text: post.attributes.text,
    //     author: {
    //       authorID: post.attributes.author.data.id,
    //       name: post.attributes.author.data.attributes.name,
    //     },
    //     category: {
    //       categoryID: post.attributes.category.data.id,
    //       label: post.attributes.category.data.attributes.label,
    //     },
    //     date: dateFormat(post.attributes.createdAt),
    //     image: {
    //       media: `http://localhost:1337${post.attributes.image.data.attributes.media.data.attributes.url}`,
    //     },
    //   };
    // });

    setPosts(data);
    setCategory("");
    setAuthor("");
    setSearch("");
  };

  const handleSearch = (search) => {
    setSearch(search);
  };

  const searchPosts = (e) => {
    e.preventDefault();
    const newPosts = posts.filter(
      (post) =>
        post.category.label === search ||
        post.author.name.includes(search) ||
        post.date.includes(search) ||
        post.title.includes(search) ||
        post.description.includes(search) ||
        post.text.includes(search)
    );

    setPosts(newPosts);
  };

  // if (loading) return <Loader />;
  // if (error) return <Error />;

  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <SharedLayout
                resetFiltering={resetFiltering}
                searchPosts={searchPosts}
                handleSearch={handleSearch}
                search={search}
              />
            }
          >
            <Route
              index
              element={
                <Home
                  posts={posts}
                  category={category}
                  author={author}
                  search={search}
                  filterCategories={filterCategories}
                  resetFiltering={resetFiltering}
                />
              }
            />
            <Route
              path="posts/:postId"
              element={
                <SinglePost posts={posts} filterAuthors={filterAuthors} />
              }
            />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
