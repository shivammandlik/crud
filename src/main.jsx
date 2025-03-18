import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import Form from './Form.jsx'
// import Demo from './Demo.jsx'
import Local from './Local.jsx'
import Sample1 from './Project2/Sample1.jsx'
import Parent from './Project2/Parent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Form /> */}
    {/* <Demo/> */}
    {/* <Local/> */}

    {/* <Sample1 name="Aarush" age="8" /> */}
    {/* above example is about props drilling */}

  <Parent/>

  </StrictMode>,
)
