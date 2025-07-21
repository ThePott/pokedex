import { Link, Outlet } from 'react-router'
import { usePokemon } from './_hooks/hooks'


const Layout = () => {
  usePokemon()

  return (
    <div className="w-screen h-screen overflow-hidden">
      <div className="max-w-7xl w-full h-full overflow-hidden mx-auto flex flex-col items-center">

        <Link to="/">
          <h1 className="text-5xl font-semibold text-center p-6">1세대 포켓몬 도감</h1>
        </Link>
        <Outlet />

      </div>
    </div>
  )
}

export default Layout