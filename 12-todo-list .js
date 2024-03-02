const todoList=[{
 name: 'make dinner',
 dueDate: '2022-12-22',
},{
name: 'wash dishes',
dueDate: '2022-12-23'
}];

renderTodoList();

function renderTodoList() {
      let todoListHTML = '';

      for(let i = 0; i< todoList.length; i++) {
        const todoObject = todoList[i];
        //const name = todoObject.name;
        //const dueDate = todoObject;
        const{ name, dueDate} =todoObject;
        const html = 
        `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
            todoList.splice(${i}, 1);
            renderTodoList();
        ">Delete</button>
        `;
        todoListHTML += html;
      }
      

      document.querySelector('.js-todo-list').innerHTML = todoListHTML
}
function addTodo() {
const inputElement = document.querySelector('.name-input');
const name = inputElement.value;

const dateInputElement = document.querySelector('.due-date-input');
const dueDate = dateInputElement.value

console.log(name);

todoList.push({
  name,
  dueDate
});
console.log(todoList);

inputElement.value = '';


renderTodoList();

}

const valz = fetch('someapi.com');
console.log(valz);