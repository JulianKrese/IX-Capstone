import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "./pages/AboutPage";
import "./pages/BlogPage";
import "./pages/BlogsPage";
import "./pages/CategoriesPage";
import "./pages/HomePage";
import "./pages/LoginPage";
import "./pages/ProfilePage";
import "./pages/RegisterPage";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//   },
//   {
//     path: "/home",
//     element: <HomePage />,
//   },
//   {
//     path: "/categories",
//     element: <CategoriesPage />,
//   },
//   {
//     path: "/blogs",
//     element: <BlogsPage />,
//   },
//   {
//     path: "/about",
//     element: <AboutPage />,
//   },
//   {
//     path: "/blog:blogId?",
//     element: <BlogPage />,
//   },
//   {
//     path: "/login",
//     element: <LoginPage />,
//   },
//   {
//     path: "/profile",
//     element: <ProfilePage />,
//   },
//   {
//     path: "/register",
//     element: <RegisterPage />,
//   },
// ]);

// function App() {
//   return <RouterProvider router={router} />;
// }

function App() {
  return (

    <HomePage />
  
  );
}

export default App;