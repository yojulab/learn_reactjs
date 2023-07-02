import React, { useState } from "react";

const Todo = (props) => {
  const [state, setState] = useState({ item: props.item, readOnly: true });
  const deleteItem = props.deleteItem;

  const deleteEventHandler = () => {
    deleteItem(state.item);
  };

  const offReadOnlyMode = () => {
    console.log("Event!", state.readOnly);
    setState({ readOnly: false }, () => {
      console.log("ReadOnly? ", state.readOnly);
    });
  };

  const enterKeyEventHandler = (e) => {
    if (e.key === "Enter") {
      setState({ readOnly: true });
    }
  };

  const editEventHandler = (e) => {
    const thisItem = state.item;
    thisItem.title = e.target.value;
    setState({ item: thisItem });
  };

  const checkboxEventHandler = (e) => {
    const thisItem = state.item;
    thisItem.done = !thisItem.done;
    setState({ item: thisItem });
  };

  const item = state.item;
  return (
    <div className="input-group mb-3">
      <div className="input-group-text">
        <input type="checkbox" className="form-check-input" checked={item.done} onChange={checkboxEventHandler} />
      </div>
      <input type="text" className="form-control"
        inputProps={{
          "aria-label": "naked",
          readOnly: state.readOnly,
        }} id={item.id}
        name={item.id}
        value={item.title}
        onClick={offReadOnlyMode}
        onChange={editEventHandler}
        onKeyDown={enterKeyEventHandler}
      />
      <button className="btn btn-danger delete-btn" onClick={deleteEventHandler}>Delete</button>
    </div>
  );
};

export default Todo;
