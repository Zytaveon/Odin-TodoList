import "./styles.css"
import UI from "./ui.js"

// ------------------------------------
// ------------- NOTES ----------------
// ------------------------------------
// So what ChatGPT suggests is having an app class that runs the process or is the brain.
// Have a UI class that manages all the DOM stuff and what is showing on the screen.
// Have a Project Class that will hold all the tasks.
// Have a task class that will be simple for each task.
//
// This index.js or "main" file should simply start the app class and like nothing else.

const ui = new UI();
ui.testPrint()

console.log("hello johnny!")
