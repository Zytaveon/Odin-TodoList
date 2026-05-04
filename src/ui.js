
export default class UI{
    constructor(){
        //DOM elements set in HTML go here. 
        this.addTaskButton = document.querySelector("#NewTaskButton")
        this.addProjectButton = document.querySelector("#NewProjectButton")
    }

    testPrint(){
        console.log("Hello from the UI class!")
    }
};
