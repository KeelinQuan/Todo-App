import React, { memo, useState } from "react";

const Header = memo((props) => {
  const [text, setText] = useState("");
  const { addTodo, isCheckedkAll } = props;
  const onAddTodo = (e = {}) => {
    if (e.key === "Enter" && text) {
      addTodo({
        id: new Date().valueOf(),
        text,
        isCompleted: false,
      });
      setText("");
    }
  };
  return (
    <div>
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          value={text}
          placeholder="What needs to be done?"
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => onAddTodo(e)}
          checked={isCheckedkAll}
        />
      </header>
    </div>
  );
});

export default Header;
