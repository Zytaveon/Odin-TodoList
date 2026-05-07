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
        this.bindProjectFormSubmitButton()
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

    bindProjectFormSubmitButton(){
        this.UI.bindProjectFormSubmitButton(() => {
            this.UI.submitProjectForm()
            this.project.push(new Project(this.UI.getFormInfo()))
            this.UI.closeProjectDialog()
        })
    }

    bindNewTaskButton(){
        this.UI.bindNewTaskButton(() => {
            console.log("Hello from the task button!")
        })
    }

    bindCloseTaskButton(){
        console.log("Shouldn't see this yet")
    }

    showTaskButton(){
        this.UI.showTaskButton()
    }
};
