let todoList = [];

function add(){
    let task = document.getElementById("todo").value;
    todoList.push(task);
    console.log(todoList);
    showTasks();

}

function showTasks(){
    let ullist = document.getElementById(`todoList`);
    ullist.innerHTML = "";
    let bodyList = "";

    for(let i=0; i<todoList.length; i++){
        bodyList += `<li> ${todoList[i]} <button onclick="remove(${i})"> Remove </button></li>`;
    }

    ullist.innerHTML = bodyList;
}

function remove(index){
    todoList.splice(index,1);
    showTasks();
    console.log(todoList);

}


