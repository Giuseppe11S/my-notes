import { useState } from 'react'
import './index.css'

// import components
import NavBar from './components/NavBar'
import Form from './components/Form'
import NoteList from './components/NoteList'

// utilis just as debug

function App() {
  const [newNote, setNewNote] = useState([])
  
  // function to add new note and keeping the prevoius
  const addNewNotes = (note) => {
    setNewNote(prev => [...prev, note])
  }

  return (
    <>
    <NavBar />
    <Form 
    newNote={newNote}
    setNewNote={setNewNote} 
    onAddNotes={addNewNotes}/>
    <NoteList 
    newNote={newNote}
    setNewNote={setNewNote} />
    </>
  )
}

export default App
