import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const reactElement = {
  type: 'a',
  props:{
    href: "https://google.com",
    target: "_blank",
},
children: "Click me to visit google"
}

function MyApp() {
  return <div>Custom React App</div>
}

ReactDOM.createRoot(document.getElementById('root')).render(
   <MyApp />
)
