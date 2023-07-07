import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home'
import ErrorPage from './pages/ErrorPage'
import Items from './pages/Items/Items'
import NewItem from './pages/NewItem/NewItem'
import HeaderItems from './pages/HeaderItems/HeaderItems'



 const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/items",
    element: <HeaderItems/>,
    children: [
    {
      path: "",
      element: <Items/>
    },
    {
      path: "new-item",
      element: <NewItem/>

    },
  ]
  },
])

export default router