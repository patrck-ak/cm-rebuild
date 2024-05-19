import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Auth from "../pages/Auth";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/auth",
        element: <Auth />,
      },
    ],
  },
]);
