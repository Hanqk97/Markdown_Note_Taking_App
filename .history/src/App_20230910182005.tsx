import "bootstrap/dist/css/bootstrap.min.css"
import {Routes, Route, Navigate} from 'react-router-dom'

function App() {
  return <Routes>
    <Route path = "/"  element = {<h1>Home</h1>} />
    <Route path = "/new"  element = {<h1>New</h1>} />
    <Route path = "/:id">
      <Route index element = {<h1>show</h1>} />
      <Route path = "edit" element = {<h1>edit</h1>} />
    </Route> 
    {/* Handle unexist routes to back home page*/}
    <Route path = "*"  element = {<Navigate to = "/" />} /> 
  </Routes>
}

export default App