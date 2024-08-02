import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AuthLayout from "../src/modules/Shared/components/AuthLayout/AuthLayout"
import Login from "../src/modules/Authentication/components/Login/Login"
import Register from "../src/modules/Authentication/components/Register/Register"
import ResetPass from "../src/modules/Authentication/components/ResetPass/ResetPass"
import ForgetPass from "../src/modules/Authentication/components/ForgetPass/ForgetPass"
import MasterLayout from "../src/modules/Shared/components/MasterLayout/MasterLayout"
import NotFound from "../src/modules/Shared/components/NotFound/NotFound"
import Home from '../src/modules/Home/components/Home/Home'
import CategoriesList from '../src/modules/Categories/components/CategoriesList/CategoriesList'
import RecipesList from "../src/modules/Recipes/components/RecipesList/RecipesList"
import UsersList from "../src/modules/Users/components/UsersList/UsersList"
import { ToastContainer } from 'react-toastify'
function App() {
  const routes = createBrowserRouter([
    {
      path: '',
      element: <AuthLayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Login /> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "reset", element: <ResetPass /> },
        { path: "forget", element: <ForgetPass /> }
      ]
    },
    {
      path: "dashboard",
      element: <MasterLayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "categoies", element: <CategoriesList /> },
        { path: "recipes", element: <RecipesList /> },
        { path: "users", element: <UsersList /> }
      ]
    }
  ])
  return (
    <>
    <ToastContainer/>
    <RouterProvider router={routes} />
    </>
  )
}

export default App
