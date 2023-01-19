import { createBrowserRouter } from "react-router-dom";
import Bookmarks from "../../../Pages/Bookmarks/Bookmarks";
import Home from "../../../Pages/Home/Home";
import Main from "../../Layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/book-mark",
        element: <Bookmarks></Bookmarks>,
      },
    ],
  },
]);

export default router;
