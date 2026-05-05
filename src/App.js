import ui       from "./ui.js"
import project  from "./project.js"
import task     from "./task.js"

export default class App{
    constructor(){
        this.UI = new ui()
        // this.PROJECT = new project()
        // this.TASK = new task()
        this.bindProjectButton()
        this.bindTaskButton()
        this.projects = [];
    }

    bindProjectButton(){
        this.UI.bindProjectButton(() => {
            this.UI.openProjectDialog()
        })
    }

    bindTaskButton(){
        this.UI.bindTaskButton(() => {
            console.log("Hello from the task button!")
        })
    }

    showTaskButton(){
        this.UT.showTaskButton()
    }
};
