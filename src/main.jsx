import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './modules/Header/Header.jsx'
import Body from './modules/Body/Body.jsx'
import Footer from './modules/Footer/Footer.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Body />
    <Footer />
  </StrictMode>,
)
