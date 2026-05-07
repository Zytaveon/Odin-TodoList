
export default class UI{
    constructor(){

        //Project Objects
        this.projectContainer           = document.querySelector("#ProjectContainer")
        this.NewProjectDialog           = document.querySelector("#NewProjectDialog")

        //Project Form
        this.NewProjectForm             = document.querySelector("#NewProjectForm")
        this.ProjectFormName            = document.querySelector("#ProjectName")
        this.ProjectFormDescription     = document.querySelector("#ProjectDescription")

        this.addProjectButton           = document.querySelector("#NewProjectButton")
        this.ProjectFormCloseButton     = document.querySelector("#ProjectFormCloseButton")

        //Task Objects
        this.taskContainer              = document.querySelector("#TaskContainer")
        this.NewTaskDialog              = document.querySelector("#NewTaskDialog")
        this.NewTaskForm                = document.querySelector("#NewTaskForm")

        this.addTaskButton              = document.querySelector("#NewTaskButton")

        this.addTaskButton.hidden       = true
        this.taskButtonHidden           = true
    }
    
    //Button Binds
    bindNewProjectButton(func){this.addProjectButton.addEventListener("click", func)}
    bindProjectFormCloseButton(func){this.ProjectFormCloseButton.addEventListener("click", func)}
    bindProjectFormSubmitButton(func){
        this.NewProjectForm.addEventListener("submit", (event) => {
            event.preventDefault()
            func()
        })
    }

    bindNewTaskButton(func){this.addTaskButton.addEventListener("click", func)}

    //Project Dialog
    openProjectDialog(){this.NewProjectDialog.showModal()}
    closeProjectDialog(){
        this.NewProjectDialog.close()
        this.ProjectFormName.value = ""
        this.ProjectFormDescription.value = ""
    }

    submitProjectForm(){
        console.log("Name: " + this.ProjectFormName.value)
        console.log("Description: " + this.ProjectFormDescription.value)
    }

    //Task Dialog
    openTaskDialog(){this.NewTaskDialog.showModal()}
    closeTaskDialog(){this.NewTaskDialog.close()}

    showTaskButton(){
        this.addTaskButton.hidden = false;
        this.taskButtonHidden = false;
    }

    getFormInfo(){
        return{
            name: this.ProjectFormName.value,
            description: this.ProjectFormDescription.value
        }
    }

    displayProjects(projectList){
        this.projectContainer.replaceChildren()
        projectList.forEach((project) => {
            
            const projectElement = document.createElement("div")
            projectElement.textContent = project.name
            this.projectContainer.appendChild(projectElement)
        })
    }

    taskButtonHidden(){return taskButtonHidden}
};
