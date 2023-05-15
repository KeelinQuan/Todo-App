import React, { memo } from "react";
import Todo from "../containers/Todo";

const TodoList = memo((props) => {
  const { todosList, isCheckedAll, checkAllTodos } = props;

  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" checked={isCheckedAll} />
      <label htmlFor="toggle-all" onClick={checkAllTodos}></label>
      <ul className="todo-list">
        {todosList.map((todo, index) => (
          <Todo index={index} key={`todo${todo.id}`} {...{ todo }} {...props} />
        ))}
      </ul>
    </section>
  );
});
export default TodoList;
