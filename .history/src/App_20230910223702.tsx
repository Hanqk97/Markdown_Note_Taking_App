import "bootstrap/dist/css/bootstrap.min.css"
import {Container} from "react-bootstrap"
import {Routes, Route, Navigate} from 'react-router-dom'
import { NewNote } from "./NewNote"

type Note = {
  id : string
} & NoteData

type NoteData = {
  title : string
  markdown : string
  tags : Tag[]

}

type Tag = {
  id : string
  label : string
}

function App() {
  return (
    // Give more margin
    <Container className = "my-4"> 
      <Routes>
        <Route path = "/"  element = {<h1>Home</h1>} />
        <Route path = "/new"  element = {<NewNote />} />
        <Route path = "/:id">
          <Route index element = {<h1>show</h1>} />
          <Route path = "edit" element = {<h1>edit</h1>} />
        </Route> 
        {/* Handle unexist routes to back home page */}
        <Route path = "*"  element = {<Navigate to = "/" />} /> 
      </Routes>
    </Container>
  )
}

export default App