import React, { useContext } from "react";
import TodosContext from "../context";

export default function TodoList() {
  const { state, dispatch } = useContext(TodosContext);
  const title =
    state.todos.length > 0 ? `${state.todos.length} Todos` : "Nothing To Do";
  return (
    <div className="container mx-auto max-w-md text-center font-mono">
      <h1 className="text-bold">{title}</h1>
      <ul className="text-white p-0">
        {state.todos.map(todo => (
          <li
            className="flex items-center bg-orange-600 border-black border-dashed border-2 my-2 py-4"
            key={todo.id}
          >
            <span
              onDoubleClick={() =>
                dispatch({ type: "TOGGLE_TODO", payload: todo })
              }
              className={`flex-1 ml-12 cursor-pointer ${todo.complete &&
                "line-through text-gray-800"}`}
            >
              {todo.text}
            </span>
            <button
              onClick={() => dispatch({ type: "SET_CURRENT_TODO", payload: todo })}
            >
              <img
                className="h-6"
                src="https://icon.now.sh/edit/0050c5"
                alt="edit icon"
              />
            </button>
            <button
              onClick={() => dispatch({ type: "REMOVE_TODO", payload: todo })}
            >
              <img
                className="h-6"
                src="https://icon.now.sh/delete/8b0000"
                alt="delete icon"
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
