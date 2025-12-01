
// props for NoteList
export default function NoteItem({title, text, id, onDeleteNotes}) {
  return (
    <>
     <span className="absolute left-[275px] top-[20px] cursor-pointer text-red-300"
     onClick={() => onDeleteNotes(id)}>x</span>
     <h3 className="font-bold">{title}</h3>
     <p className="font-extralight text-[15px] pt-[5px] w-[240px] break-all">{text}</p>
    </>
  )
}