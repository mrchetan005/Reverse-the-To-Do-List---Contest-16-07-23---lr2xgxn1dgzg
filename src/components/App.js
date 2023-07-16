import React, { useState } from 'react'
import '../styles/App.css';

function ToDo(props) {
  const { id, createdAt, inputValue } = props;
  return (<tr>
    <td>
      <p>{id}</p>
    </td>
    <td>
      <input value={inputValue} />
    </td>
    <td>
      <p>{createdAt}</p>
    </td>
  </tr>)
}

function App() {
  const [todos, setTodos] = useState([{
    id: 'todo1',
    createdAt: '20:30',
  }, {
    id: 'todo2',
    createdAt: '18:00',
  }
  ]);

  return (
    <div id="main">
      <button onClick={() => {
        setTodos([...todos].reverse());
      }}>Reverse</button>
      <table>
        <tbody>
          {
            todos.map((todo) => (
              <ToDo key={todo.id} id={todo.id} createdAt={todo.createdAt} />
            ))
          }
        </tbody>
      </table>
    </div>
  )
}


export default App;
