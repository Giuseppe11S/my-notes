
// props for NoteList
export default function NoteItem({title, text, id}) {
  return (
    <>
     <span className="absolute left-[270px] top-[10px] cursor-pointer text-red-300">x</span>
     <h3 className="font-bold">{title}</h3>
     <p className="font-extralight text-[15px] pt-[5px]">{text}</p>
    </>
  )
}