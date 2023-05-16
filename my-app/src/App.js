import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import About from "./pages/About";
import Homepage from "./pages/HomePage";
import BlogPosts from "./pages/BlogPosts";
import Projects from "./pages/Projects";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/blogposts",
      element: <BlogPosts />,
    },
    {
      path: "/projects",
      element: <Projects />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

//<div className="App app_image">
//<Navbarfun />
//<p>Home page </p>
//<Footer />
//</div>
