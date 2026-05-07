import ui       from "./ui.js"
import project  from "./project.js"
import task     from "./task.js"

export default class App{
    constructor(){
        this.UI = new ui()
        // this.PROJECT = new project()
        // this.TASK = new task()
        this.bindNewProjectButton()
        this.bindCloseProjectButton()
        this.bindNewTaskButton()
        this.projects = [];
    }

    bindNewProjectButton(){
        this.UI.bindNewProjectButton(() => {
            this.UI.openProjectDialog()
        })
    }

    bindCloseProjectButton(){
        this.UI.bindProjectFormCloseButton(() => {
            this.UI.closeProjectDialog()
        })
    }

    bindNewTaskButton(){
        this.UI.bindNewTaskButton(() => {
            console.log("Hello from the task button!")
        })
    }

    showTaskButton(){
        this.UT.showTaskButton()
    }
};
