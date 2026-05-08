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
        this.currentProject = undefined
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
            const newProject = new project(this.UI.getFormInfo())

            if(this.currentProject === undefined ){this.UI.showTaskButton()}

            if(this.currentProject !== undefined ){
                console.log("Current Project wasn't empty")
                this.currentProject.removeActive()
                this.UI.showTaskButton()
            }

            this.currentProject = newProject;   
            this.projects.push(newProject)
            this.UI.closeProjectDialog()
            this.UI.displayProjects(this.projects)
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
