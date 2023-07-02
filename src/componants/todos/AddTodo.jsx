import React, { useState } from "react";

const AddTodo = (props) => {

  const [state, setState] = useState({ item: { title: "", id: "" } });
  const add = props.add;

  const onInputChange = (e) => {
    setState({ item: e.target.value });
    console.log(state.item);
  };

  const onButtonClick = () => {
    add(state.item);
    setState({ item: { title: "" } });
  };

  const enterKeyEventHandler = (e) => {
    if (e.key === "Enter") {
      onButtonClick();
    }
  };

  return (
    <div className="mb-3">
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Add a new todo item"
          aria-label="Add a new todo item" onChange={onInputChange}
          onKeyDown={enterKeyEventHandler}
          value={state.title} />
        <button className="btn btn-primary add-btn" onClick={onButtonClick}>Add</button>
      </div>
    </div>
  );
};

export default AddTodo;
