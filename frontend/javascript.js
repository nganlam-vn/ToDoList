// document.querySelector('#push').onclick = function(){
//     if(document.querySelector('#newtask input').value.length == 0){
//         alert("You haven't entered your task name!");
//     }
//     else{ 
//         // innerHTML to display tasks onscreen
//         var myBtn = document.getElementById("push")
//         const taskAdd= () =>{
//             var task = document.getElementById("tasks");
//             var newTask = document.createElement("p")
//             newTask.textContent = inp.value;
//             task.appendChild(newTask);                                                                                                                            
//         }
//         myBtn.onclick=taskAdd
//     }
// }
document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Kindly Enter Task Name!!!!")
    }

    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}