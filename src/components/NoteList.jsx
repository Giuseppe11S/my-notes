import Noteitem from '../components/NoteItem'

import exampleData from '../data/exampleNotes'

export default function NoteList({newNote}) {

  // rendering notes items
  const renderingNote = () => (
    exampleData.map((note) => (
      <div key={note.id}>
        <Noteitem 
        title={note.title}
        text={note.text}
        id={note.id}
        />
      </div>
    ))
  )

  return (
    <>
    <div className='flex'>
      {renderingNote()}
    </div>
    </>
  )
}