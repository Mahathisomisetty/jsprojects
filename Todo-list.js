const todolist=[
   
];
displaytodoList();
function displaytodoList(){
    let todolistHTML='';
    for(let i=0; i< todolist.length; i++){
        const todoobject = todolist[i];
      //  const name= todoobject.name;
       // const dueDate=todoobject.dueDate;
        const {name,duedate} = todoobject;
        const html = `
        <div>${name} </div>
        <div>${duedate}</div>
         <button onclick="
         todolist.splice(${i}, 1);
         displaytodoList();
         " class="delete-todo-button">Delete</button>
         `;
        todolistHTML+= html;
}
//console.log(todolistHTML);
document.querySelector('.js-todo-list').innerHTML=todolistHTML;
}
function addtodo(){
    const inputElement =document.querySelector('.js-input');
    const name =inputElement.value;
    const dateinputElement=document.querySelector('.js-todo-date');
    const duedate=dateinputElement.value;
    todolist.push({//name: name,
        //duedate:duedate
        name,duedate
    });
   // console.log(todolist);
    

    inputElement.value='';
    displaytodoList();

}
