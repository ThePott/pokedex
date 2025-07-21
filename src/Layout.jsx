import { Outlet } from 'react-router'
import Header from "./components/Header"


const Layout = () => {
  return (
    <div className="flex flex-col items-center gap-3 w-screen h-screen overflow-hidden">
      <div className="w-full">
        {/* <Searchbar /> */}
        <Header />
      </div>
      <div style={{scrollbarColor: "oklch(0.5 0 0) transparent"}} className="w-full flex-1 overflow-x-hidden overflow-y- scroll">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout