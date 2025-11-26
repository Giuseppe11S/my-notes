
// props for NoteList
export default function NoteItem({title, text, id}) {
  return (
    <>
     <h3>{title}</h3>
     <p>{text}</p>
    </>
  )
}