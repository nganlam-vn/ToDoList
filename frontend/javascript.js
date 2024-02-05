document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("You haven't entered your task name!");
    }
    else{ 
        // innerHTML to display tasks onscreen
        var myBtn = document.getElementById("push")
        const taskAdd= () =>{
            var task = document.getElementById("tasks");
            var newTask = document.createElement("p")
            newTask.textContent = inp.value;
            task.appendChild(newTask);                                                                                                                            
        }
        myBtn.onclick=taskAdd
    }
}