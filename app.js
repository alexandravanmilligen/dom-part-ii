function onReady() {
  console.log("ready");
  let id = 0;
  let toDos = [];
  //creates an empty array which hold all the to do list items
  const addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) {
      return;
    }
    //this is the function that's called when you click on the ToDo Button


    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id
    });
    id++; //id = id + 1
    newToDoText.value = '';
    //clears the text because it's now saved in the array
    //console.log (toDos);
    renderTheUI();
  }
  //addToDoForm.addEventListener('submit', event => {
  addToDoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    //This prevents the default thing from happening. We don't want the page to refresh.
    createNewToDo();
    //When you click "submit" it calls the createNewToDo function.
  });

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';
    //setting the content and all the LIs out of the UL element

    //renderTheUI();
    //console.log(toDos);
    toDos.forEach(function(toDo) {

      //this is the array containing all the object literals
      //we're going to call the forEach method, an array method, which says "for each item in the array do this."
      //represents the current element in the array
      const newLi = document.createElement('li');

      newLi.id = toDo.id;
      //creates a DOM elements
      //not actually inserted into the dom yet
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";
      newLi.textContent = toDo.title;
      //console.log("it is " + newLi.innerHTML);
      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      //we're taking the list and we're adding a child element to it, and that
      //child element is the li that we created.
      //in line 50 we're taking the li and we're adding a child element to that, which is the checkboxe
      const delButton = document.createElement("button");
      delButton.textContent = "Done";
      newLi.appendChild(delButton);

      delButton.addEventListener("click", function(event) {

        //First thing we want to do is make it so that when you click the button the default behavior doesn't happen.
        event.preventDefault();
        toDos = toDos.filter(function(item) {
          console.log(item);
          console.log(item.id==toDos.id);
          //return toDos.id !== item.id;
          return item.id!==toDo.id;
        });
        renderTheUI();
      });
    });

  }
  renderTheUI();
}


window.onload = function() {
  onReady();
}
