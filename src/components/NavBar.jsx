
// import icon (logo) of my navbar
import { StickyNote } from "lucide-react"


export default function NavBar() {
  return (
    <>
     <nav className="border-b-1 border-gray-100">
       <ul className="flex justify-center items-center gap-[4px] p-[20px]">
          <li>
            <StickyNote className="size-[40px] text-yellow-500"/>
          </li>
          <li className="font-medium text-[25px]">
            My Notes
          </li>
       </ul>
     </nav>
    </>
  )
}