





const input = document.getElementById("input");
const TodoBtn = document.getElementById("submit-button");
const todoList = document.getElementById('todos');

TodoBtn.addEventListener("click", function() {
  const todoText = input.value;
  const listItem = document.createElement("li");
  const headingToDo = document.createElement('h2');

  headingToDo.textContent = " Todo List";

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';

  deleteButton.addEventListener('click',function() {
    listItem.remove();
    
  });

  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';

  const label = document.createElement("label");
  label.textContent = todoText;



  editButton.addEventListener('click', function() {
    const newText = prompt('Edit the todo:', label.textContent);
    if (newText !== null) {
      label.textContent = newText;
    }
  });

  todoList.appendChild(listItem);

  listItem.appendChild(label);
  listItem.appendChild(deleteButton);
  listItem.appendChild(editButton);

  // editButton.addEventListener('click', function() {
  //     label.setAttribute(contenteditable="true")
  // });


  input.value="";



});



