import "bootstrap/dist/css/bootstrap.min.css"
import { useMemo } from "react"
import { Container } from "react-bootstrap"
import { Routes, Route, Navigate } from "react-router-dom"
import { NewNote } from "./NewNote"
import { useLocalStorage } from "./useLocalStorage"
import { v4 as uuidV4 } from "uuid"
import { NoteList } from "./NoteList"
import { NoteLayout } from "./NoteLayout"
import { Note } from "./Note"
import { EditNote } from "./EditNote"

export type Note = {
  id : string
} & NoteData

export type RawNote = {
  id : string
}

export type RawNoteData = {
  title : string
  markdown : string
  tagIds : string[]
}

export type NoteData = {
  title : string
  markdown : string
  tags : Tag[]

}

export type Tag = {
  id : string
  label : string
}

function App() {
  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", [])
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", [])


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