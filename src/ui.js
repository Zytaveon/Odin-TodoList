
export default class UI{
    constructor(){

        //Project Objects
        this.projectContainer   = document.querySelector("#ProjectContainer")
        this.NewProjectDialog   = document.querySelector("#NewProjectDialog")
        this.NewProjectForm     = document.querySelector("#NewProjectForm")

        this.addProjectButton   = document.querySelector("#NewProjectButton")
        this.ProjectFormCloseButton = document.querySelector("#ProjectFormCloseButton")

        //Task Objects
        this.taskContainer      = document.querySelector("#TaskContainer")
        this.NewTaskDialog      = document.querySelector("#NewTaskDialog")
        this.NewTaskForm        = document.querySelector("#NewTaskForm")

        this.addTaskButton      = document.querySelector("#NewTaskButton")

        this.addTaskButton.hidden = true
        this.taskButtonHidden = true

        this.bindProjectFormCloseButton()
    }
    
    //Button Binds
    bindNewProjectButton(func){this.addProjectButton.addEventListener("click", func)}
    bindNewTaskButton(func){this.addTaskButton.addEventListener("click", func)}
    bindProjectFormCloseButton(func){this.ProjectFormCloseButton.addEventListener("click", func)}

    displayProjects(projectList){
        this.projectContainer.replaceChildren()
        projectList.forEach((project) => {
            
            const projectElement = document.createElement("div")
            projectElement.textContent = project.name
            this.projectContainer.appendChild(projectElement)
        })
    }

    taskButtonHidden(){return taskButtonHidden}

    showTaskButton(){
        this.addTaskButton.hidden = false;
        this.taskButtonHidden = false;
    }

    openProjectDialog(){this.NewProjectDialog.showModal()}
    closeProjectDialog(){this.NewProjectDialog.close()}
    

    openTaskDialog(){this.NewTaskDialog.showModal()}
    closeTaskDialog(){this.NewTaskDialog.close()}
};
