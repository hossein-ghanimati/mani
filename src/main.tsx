
import { createRoot } from 'react-dom/client'
import {  HashRouter } from 'react-router-dom'
import './fonts/Mj_Mokhtar.ttf'
import './fonts/Mj_Free_0.ttf'
import './fonts/Samim.ttf'
import App from './App.tsx'
import './index.css'
import { AuthContextProvider } from './context/authContext.tsx'

createRoot(document.getElementById('root')!).render(
   <AuthContextProvider>

      <HashRouter>
       <App />
      </HashRouter>
   </AuthContextProvider>
  
)



