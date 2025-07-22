import { createRoot } from 'react-dom/client';
import './index.css';
import Layout from "./Layout";

import { createBrowserRouter, RouterProvider } from "react-router";
import { Provider } from 'react-redux';
import store from "./_store/RTK/store"
import { lazy, Suspense } from 'react';

import MainPageSkeleton from "./pages/main/MainPageSkeleton"
import DetailPageSkeleton from './pages/detail/DetailPageSkeleton';
const MainPage = lazy(() => import("./pages/main/MainPage"))
const DetailPage = lazy(() => import("./pages/detail/DetailPage"))

const router = createBrowserRouter([
  {
    element: <Layout />, children: [
      {
        path: "/",
        element:
          <Suspense fallback={<MainPageSkeleton />}>
            <MainPage />
          </Suspense>
      },
      {
        path: "/:pokemonIndex",
        element: 
        <Suspense fallback={<DetailPageSkeleton />}>
        <DetailPage />
        </Suspense>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
