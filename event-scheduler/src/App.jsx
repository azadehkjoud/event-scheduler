import "./App.css";
import Layout from "./components/Layout";
import About from "./components/About";
import Home from "./components/Home";
import PostList from "./components/PostList";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";



import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import PostPage from "./components/PostPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="posts" element={<PostList />} />
        <Route path="posts/:id" element={<PostPage />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />

      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
