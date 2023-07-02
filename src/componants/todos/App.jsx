import React, { useState } from "react";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
// import "./App.css";

const App = () => {
  const [state, setState] = useState({ items: [] });

  const add = (item) => {
    const thisItems = state.items;
    item.id = "ID-" + thisItems.length; // key를 위한 id추가
    item.done = false; // done 초기화
    thisItems.push(item); // 배열에 아이템 추가
    setState({ items: thisItems }); // 업데이트는 반드시 this.setState로 해야됨.
    console.log("items : ", state.items);
  };

  const deleteItem = (item) => {
    const thisItems = state.items;
    console.log("Before Update Items : ", state.items);
    const newItems = thisItems.filter((e) => e.id !== item.id); // 해당 id 걸러내기
    setState({ items: newItems }, () => {
      // 디버깅 콜백
      console.log("Update Items : ", state.items);
    });
  };

  var todoItems = state.items.length > 0 && (
    <Paper style={{ margin: 16 }}>
      <List>
        {state.items.map((item, idx) => (
          <Todo item={item} key={item.id} deleteItem={deleteItem} />
        ))}
      </List>
    </Paper>
  );

  // 3. props로 넘겨주기å
  return (
    <div className="App container mt-4">
      <h1 className="text-center">Todo List</h1>
      <AddTodo add={add} />
      <div className="TodoList">{todoItems}</div>
    </div>
  );
};

export default App;
