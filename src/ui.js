
export default class UI{
    constructor(){
        this.addTaskButton      = document.querySelector("#NewTaskButton")
        this.addProjectButton   = document.querySelector("#NewProjectButton")
        this.projectContainer   = document.querySelector("#ProjectContainer")
        this.taskContainer      = document.querySelector("#TaskContainer")
        this.NewProjectDialog   = document.querySelector("#NewProjectDialog")
        this.NewProjectForm     = document.querySelector("#NewProjectForm")
        this.NewTaskDialog      = document.querySelector("#NewTaskDialog")
        this.NewTaskForm        = document.querySelector("#NewTaskForm")

        this.addTaskButton.hidden = true
        this.taskButtonHidden = true
    }
    

    bindProjectButton(func){
        this.addProjectButton.addEventListener("click", func)
    }

    bindTaskButton(func){
        this.addTaskButton.addEventListener("click", func)
    }

    displayProjects(projectList){
        this.projectContainer.replaceChildren()
        projectList.forEach((project) => {
            
            const projectElement = document.createElement("div")
            projectElement.textContent = project.name
            this.projectContainer.appendChild(projectElement)
        })
    }

    taskButtonHidden(){
        return taskButtonHidden
    }

    showTaskButton(){
        this.addTaskButton.hidden = false;
        this.taskButtonHidden = false;
    }

    openProjectDialog(){
        this.NewProjectDialog.showModal()
    }

    openTaskDialog(){
        this.NewTaskDialog.showModal()
    }
};
