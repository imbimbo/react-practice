import './App.css'
import HomePage from './pages/Home/HomePage'
import AboutPage from './pages/About/AboutPage'
import RegisterPage from './pages/Register/RegisterPage'
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route, BrowserRouter } from "react-router-dom"

const browserRouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/">
    <Route index element={<HomePage/>}/>
    <Route path="about" element={<AboutPage/>}/>
    <Route path="register" element={<RegisterPage/>}/>
  </Route>
))

function App() {

  return (
    <>
    <RouterProvider router={browserRouter}/>
    {/* <Header hideMenu={false} name='teste'/>
    <InputWithText/>
    <LoginForm/> */}
    </>
  )
}

export default App
