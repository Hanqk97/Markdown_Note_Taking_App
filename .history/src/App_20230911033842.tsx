import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react';
import { useMemo } from "react"
import { Container } from "react-bootstrap"
import { Routes, Route, Navigate } from "react-router-dom"
import { NewNote } from "./NewNote"
import { useLocalStorage } from "./useLocalStorage"
import { v4 as uuidV4 } from "uuid" // creat unique string based id
import { NoteList } from "./NoteList"
import { NoteLayout } from "./NoteLayout"
import { Note } from "./Note"
import { EditNote } from "./EditNote"

export type Note = {
  id: string
} & NoteData

export type RawNote = {
  id: string
} & RawNoteData

export type RawNoteData = {
  title: string
  markdown: string
  tagIds: string[]
}

export type NoteData = {
  title: string
  markdown: string
  tags: Tag[]

}

export type Tag = {
  id: string
  label: string
}

function App() {
  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", [])
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", [])

  const noteWithTags = useMemo(() => {
    return notes.map(note => {
      return { ...note, tags: tags.filter(tag => note.tagIds.includes(tag.id)) }
    })
  }, [notes, tags])

  function onCreateNote({ tags, ...data }: NoteData) {
    setNotes(prevNotes => {
      return [...prevNotes, { ...data, id: uuidV4(), tagIds: tags.map(tag => tag.id) }
      ]
    })
  }

  function addTag(tag: Tag) {
    setTags(prev => [...prev, tag])
  }

  function onUpdateNote (id : string, {tags, ...data} : NoteData ) {
    setNotes(prevNotes => {
      return prevNotes.map(note => {
        if (note.id === id) {
          return  { ...note, ...data, tagIds: tags.map(tag => tag.id) }
        }else{
          return note
        }
      })
    })
  }

  return (
    // Give more margin
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<NoteList notes={noteWithTags} availableTags={tags} />} />
        <Route path="/new" element={<NewNote
          onSubmit={onCreateNote}
          onAddTag={addTag}
          availableTags={tags}
        />} />
        <Route path="/:id" element={<NoteLayout notes={noteWithTags} />}>
          <Route index element={<Note />} />
          <Route path="edit" element={<EditNote
            onSubmit={onUpdateNote}
            onAddTag={addTag}
            availableTags={tags}
          />} />
        </Route>
        {/* Handle unexist routes to back home page */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  )
}

export default App