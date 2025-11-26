react-note-app

A clean and minimal note-taking application inspired by Google Keep.  
Built using React + Vite + Tailwind CSS.

This project allows users to create, view and delete notes inside a responsive and modern UI.

## Tech Stack
### Frontend
- React (functional components)
- Vite (lightning-fast bundler)
- Tailwind CSS (utility-first styling)
- Lucide-React (icons)
- crypto.randomUUID() for generating unique IDs

## React Concepts Used

This project demonstrates solid understanding of key React fundamentals:

### useState
- Storing all the user notes  
- Controlling form inputs (title + text)

### Props
Passing data and functions between components:
- `onAddNotes`
- `onDeleteNotes`
- `newNote`
- `setNewNote`

### Lifting State Up
The main state (all notes) lives in App.jsx
Child components communicate changes via callback props.

### Controlled Components
Both the title and text inputs are fully controlled by React state.

### Rendering Lists
Notes displayed using:
```jsx
newNote.map(note => <NoteItem ... />)

### Event Handling
Add note on form submit
Delete note on click

### Reusable Components
NoteItem
NoteList
Form
NavBar

## Feauture Implemented (for now)
Create new notes
Delete existing notes
Sticky-note style cards
Responsive flex
Scroll-hidden long text
Clean UI built with Tailwind classes

## Project Structure
src/
 ├── App.jsx
 ├── components/
 │   ├── Form.jsx
 │   ├── NavBar.jsx
 │   ├── NoteItem.jsx
 │   └── NoteList.jsx
 ├── data/
 │   └── exampleNotes.js
 ├── utils/
 │   └── getRandomId.js
 ├── index.css
 └── main.jsx


## Installation and setup
Clone the repository:
git clone https://github.com/Giuseppe11S/react-notes-app
cd react-notes-app
Install dependencies:
npm install
Run the development server: 
npm run dev
Open in browser:
http://localhost:5173/


## What I Learned 
This project helped me learn and practice:
- structuring a React project
- managing state with useState
- passing props and functions between components
- understanding component responsibility
- building reusable UI components
- styling efficiently with Tailwind
- handling forms and preventing empty submissions
- generating unique IDs with crypto.randomUUID()

## Author
Giuseppe11S, https://github.com/Giuseppe11S
