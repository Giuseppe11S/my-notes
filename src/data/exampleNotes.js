
import { getRandomId } from "../utils/getRandomId"

const notes = [
  {id: getRandomId(), title: 'Test Title', text: 'test '.repeat(200)},
  {id: getRandomId(), title: 'Test Title', text: 'test '.repeat(200)},
  {id: getRandomId(), title: 'Test Title', text: 'test '.repeat(200)},
  {id: getRandomId(), title: 'Test Title', text: 'test '.repeat(200)},
]


export default notes;