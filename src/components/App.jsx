import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState(["one"]);

  function enterItem(event) {
    const newValue = event.target.value;
    setItem(newValue);
  }

  function addItem(event) {
    setItems((prevItems) => {
      return [...prevItems, item];
    });
    setItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={enterItem} type="text" name="item" value={item} />
        <button onClick={addItem} type="submit">
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((toDoItem) => (
            <li>{toDoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
