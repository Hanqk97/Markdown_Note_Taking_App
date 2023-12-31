import React from 'react';
import { NoteData, Tag } from "./App";
import { NoteForm } from "./NoteForm";

type NewNoteProps = {
  onSubmit : (data : NoteData) => void
  onAddTag : (tag : Tag) => void
  availableTags: Tag[]
}

export function NewNote({ onSubmit} : NewNoteProps){
    return (
        <>
          <h1 className = "mb-4">New Note</h1>  
          <NoteForm onSubmit={onSubmit}/>
        </>
    )
}