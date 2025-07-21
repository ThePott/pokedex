import { createRoot } from 'react-dom/client';
import './index.css';
import Layout from "./Layout";
import MainPage from "./pages/main/MainPage";
import DetailPage from "./pages/detail/DetailPage";

import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    element: <Layout />, children: [
      { path: "/", element: <MainPage /> },
      { path: "/:id", element: <DetailPage /> },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
   <RouterProvider router={router} />
)
