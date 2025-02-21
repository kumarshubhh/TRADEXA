import { StrictMode } from 'react'

import './index.css'
import { createRoot } from "react-dom/client";




import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./components/Home"





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

    <Routes>
      <Route path="/*" element = {<Home/>} ></Route>
    </Routes>
    </BrowserRouter>
    
  </StrictMode>,
)
