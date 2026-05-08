export default class Project{
    constructor(data){
        this.name = data.name
        this.description = data.description
        //New project will become active project, so start as true
        this.active = true
        this.tasks = []
    }

    getActiveProject(projectList){
        projectList.forEach((project) => {
            if(this.active){return project}
        })
    }

    removeActive(){this.active = false}
};
