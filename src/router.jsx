import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home'
import ErrorPage from './pages/ErrorPage'
import Items from './pages/Items/Items'



 const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/items",
    element: <Items/>
  }
])

export default router