import React, { useState, useReducer } from 'react'
import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Stack from '@mui/joy/Stack';
import ListDivider from '@mui/joy/ListDivider';

const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
];

function Todo() {
  const [todos, setTodos] = useState(initialTodos);
  const [input, setInput] = useState('');

  const handleDelete = (id) => {
    let newArr = [...todos];
    let result = newArr.find(element => element.id == id);
    if (result !== 'undefined') {
      result.complete = !result.complete;
    }
    setTodos(newArr);
  }

  const handleComplete = (id) => {
    debugger;
    let newArr = [...todos];
    let result = newArr.find(element => element.id == id);
    if (result !== 'undefined') {
      result.complete = !result.complete;
    }
    setTodos(newArr);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input != '') {
      let max = Math.max(...todos.map(o => o.id)) + 1;
      let item = {
        id: max !== -Infinity ? max : 1,
        title: input,
        complete: false
      }

      setTodos([...todos, item]);
      setInput('');
    }
  }

  return (
    <Stack spacing={2}>
      <Input placeholder="Type in here…" onChange={(e) => {
        e.preventDefault();
        setInput(e.target.value);

      }} />
      <Button sx={{ width: '20%' }} onClick={(e) => {
        handleSubmit(e)
      }}>Submit</Button>
      <List marker='disc' sx={{ width: '100%' }}>
        {
          todos.map((todo) =>
            <>
              <ListItem key={todo.id} sx={{ width: '100%' }}>
                {todo.title}
                <input
                  type="checkbox"
                  checked={todo.complete}
                  onChange={() => handleComplete(todo.id)}
                />
              </ListItem>
              <ListDivider inset="startDecorator" /></>
          )
        }
      </List>

    </Stack>
  );
}

export default Todo;
