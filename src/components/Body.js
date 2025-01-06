import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import SingleMovie from "./SingleMovie";

const Body = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/browse/:movieId",
      element: <SingleMovie />,
    },
    {
      path: "*",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={myRouter} />;
};

export default Body;
