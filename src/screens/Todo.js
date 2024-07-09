import React, { useState, useReducer } from 'react'
import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Stack from '@mui/joy/Stack';
import ListDivider from '@mui/joy/ListDivider';


const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

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
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  // const handleDelete = (id) => {
  //   let newArr = [...list];
  //   let result = newArr.find(element => element.id == id);
  //   if (result !== 'undefined') {
  //     result.status = !result.status;
  //   }
  //   setList(newArr);
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (input !== '') {
  //     let max = Math.max(...todos.map(o => o.id)) + 1;
  //     let item = {
  //       id: max !== -Infinity ? max : 1,
  //       name: input,
  //       status: true
  //     }

  //     setTodos([...todos, item]);
  //     setInput('');
  //   }
  // }

  return (
    <Stack spacing={2}>


      <List marker='disc' sx={{ width: '100%' }}>
        {
          todos.map((todo) =>
            <><ListItem key={todo.id} sx={{ width: '100%' }}>
              {todo.title}
              <input
                type="checkbox"
                checked={todo.complete}
                onChange={() => handleComplete(todo)}
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
