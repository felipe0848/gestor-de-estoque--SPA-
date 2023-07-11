import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home'
import ErrorPage from './pages/ErrorPage'
import Items from './pages/Items/Items'
import NewItem from './pages/NewItem/NewItem'
import HeaderItems from './pages/HeaderItems/HeaderItems'
import Page from './pages/Page'
import PageItem from './pages/PageItem/PageItem'



 const router = createBrowserRouter([
  {
    path: "/",
    element: <Page/>,
    children: [
      {
        path: "",
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
        {
          path: ":itemId",
          element: <PageItem/>
    
        },
      ]
      },
  
    ]
  },
])

export default router