import Noteitem from '../components/NoteItem'

import exampleData from '../data/exampleNotes'

export default function NoteList({newNote}) {

  // rendering notes items
  const renderingNote = () => (
    exampleData.map((note) => (
      <div key={note.id} 
         className='bg-[#c6ecd2] rounded-lg w-[300px] h-[200px] py-[15px] px-[20px] relative
         overflow-y-scroll [scrollbar-width:none] -ms-overflow-style:none] [&::-webkit-scrollbar]:hidden'>
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
    <div className='flex flex-wrap justify-center my-[80px] mx-[50px] gap-[50px]'>
      {renderingNote()}
    </div>
    </>
  )
}