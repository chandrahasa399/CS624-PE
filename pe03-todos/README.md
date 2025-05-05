Input: To add the functionality to add items to a list of to-dos when a button is clicked.

Process: You then map over these todos and create a new Todo component (imported at the top of the file) for each todo, passing in the todo as a property to the Todo component. You also specify a key and pass in the index of the todo item as a key to each component.

Output: Update your Button component to call the submitTodo method when clicked. In the submitTodo method, add the new to-do item to the todos array in the component's state.