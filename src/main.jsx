import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Cricket from './components/Cricket/Cricket.jsx'
import FootballScoreboard from './components/Scoreboard/FootballScoreboard.jsx'
import App from './App.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='home' element = {<Home/>} />
      <Route
      path="cricket" element= {<Cricket />}>

        </Route>
      
       
      <Route path='Football' element = {<FootballScoreboard />} />
      
    </Route>
    
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App/> */}
  </StrictMode>,
)
