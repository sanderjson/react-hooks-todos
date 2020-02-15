import React from "react";

const TodosContext = React.createContext({
  todos: [
    { id: 1, text: "eat breakfast", completed: false },
    { id: 2, text: "take out trash", completed: false },
    { id: 3, text: "smell the bacon", completed: false }
  ],
  currentTodo: {}
});

export default TodosContext;
