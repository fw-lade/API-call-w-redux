import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodo } from "./redux/todoSlice";

const Todo = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchTodo());
  }, []);

  console.log(todos);
  return (
    <div>
      {todos.isLoading ? (
        <h1>Loading...</h1>
      ) : (
        todos.todo.data.map((todo) => {
          return <p>{todo.title}</p>;
        })
      )}
    </div>
  );
};

export default Todo;
