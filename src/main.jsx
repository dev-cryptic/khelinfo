import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Cricket from './components/Cricket/Cricket.jsx'
import FootballScoreboard from './components/Scoreboard/FootballScoreboard.jsx'
import App from './App.jsx'
import Careers from './pages/Careers.jsx'
import Advertise from './pages/Advertise.jsx'
import Terms from './pages/Terms.jsx'
import Privacy from './pages/Privacy.jsx'
import Football from './components/Football/Football.jsx'
import Kabaddi from './components/Kabaddi/Kabaddi.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='home' element = {<Home/>} />
      <Route
      path="cricket" element= {<Cricket />}>

        </Route>
      
       
      <Route path='Football' element = {<Football />} />
      <Route path='advertise' element = {<Advertise />} />
      <Route path='terms' element = {<Terms />} />
      <Route path='privacy' element = {<Privacy />} />
      <Route path='careers' element = {<Careers />} />
      <Route path="/Kabaddi" element={<Kabaddi />} />
      
    </Route>
    
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App/> */}
  </StrictMode>,
)
