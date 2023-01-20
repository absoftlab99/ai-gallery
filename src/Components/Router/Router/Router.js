import { createBrowserRouter } from "react-router-dom";
import AddAi from "../../../Pages/AddAi/AddAi";
import Bookmarks from "../../../Pages/Bookmarks/Bookmarks";
import Home from "../../../Pages/Home/Home";
import MyGallery from "../../../Pages/MyGallery/MyGallery";
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
        path: "/bookmark",
        element: <Bookmarks></Bookmarks>,
      },
      {
        path: "/myGallery",
        element: <MyGallery></MyGallery>,
      },
      {
        path: "/addAi",
        element: <AddAi></AddAi>,
      },
    ],
  },
]);

export default router;
