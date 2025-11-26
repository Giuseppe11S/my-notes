import { useState } from "react"
import { CirclePlus } from "lucide-react"


export default function Form() {

 const handleSubmit = (e) => {
  e.preventDefault()
 }

  return (
    <>
    <div className="cnt-nav flex justify-center mt-[40px]">
      <form onSubmit={handleSubmit}
        className="flex  items-start flex-col w-[700px] h-[250px] 
        border rounded-lg border-gray-200 pl-[40px] pt-[40px] bg-white">
        <input 
        className="w-[600px] mb-[20px] text-[15px] p-[10px] focus:outline 
        focus:rounded focus:outline-yellow-200 focus:outline-2 cursor-pointer"
        type="text" 
        placeholder="Title (optional)"
        />
        <textarea name="" id=""
        className="w-[600px] resize-none mb-[30px] text-[15px] p-[10px]
        focus:outline focus:rounded focus:outline-yellow-200 focus:outline-2
        cursor-pointer"
        placeholder="Write your note...">
        </textarea>

        <div className="flex justify-end w-full pr-[25px] pb-[45px] gap-4">
          <button className="hover:bg-blue-100 rounded-lg e transition py-[5px] px-[10px] cursor-pointer">
            Close
          </button>
          <button className="cursor-pointer">
            <CirclePlus
            className="text-yellow-500"/>
          </button>
        </div>
      </form>
      </div>
    </>
  )
}