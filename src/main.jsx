import { createRoot } from 'react-dom/client';
import './index.css';
import Layout from "./Layout";
import MainPage from "./pages/main/MainPage";
import DetailPage from "./pages/detail/DetailPage";

import { createBrowserRouter, RouterProvider } from "react-router";
import { Provider } from 'react-redux';
import store from "./_store/RTK/store"

const router = createBrowserRouter([
  {
    element: <Layout />, children: [
      { path: "/", element: <MainPage /> },
      { path: "/:pokemonIndex", element: <DetailPage /> },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
