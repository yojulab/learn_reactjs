import React from 'react'
import ReactDOM from 'react-dom/client'

// import App from './App'
// import App from './componants/App_css'
// import App from './componants/PassingProps.jsx'
// import App from './componants/Forms.jsx'
import App from './componants/todos/App.jsx'

// import './index.css' // with just simple codes
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
