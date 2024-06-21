import React, {useState, useEffect} from 'react'
import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Stack from '@mui/joy/Stack';

function Todo() {
  const [list, setList] = useState([]); 
  const [input, setInput] = useState(''); 

  const handleDelete = (id)=>{
    let newArr = [...list];
    debugger;
    let result = newArr.find(element => element.id == id);
    debugger;
    if (result !== 'undefined'){
      result.status = !result.status;
    }
    setList(newArr);
    debugger;
  }

  const handleChange = (e) =>{
    setInput(e.target.value);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(input !== ''){
      let max = Math.max(...list.map(o => o.id)) + 1;
      let item = {
        id: max !== -Infinity ? max : 1,
        name: input,
        status: true
      }

      setList([...list, item]);
      setInput('');
      debugger;
    }
  }
  
  return (
    <Stack spacing={2}>
    <form>
      <Input type='text' value={input} onChange={handleChange}></Input>
      <Button type='submit' onClick={handleSubmit}>Add todo</Button>
    </form>
    <List marker='disc'>
      {
        list.map((item, index)=> 
        <ListItem key={item.id}>
        {
          (!item.status) ? 
          (<del>{item.name} </del>)
          :
          (item.name)
        }
        <Button onClick={()=> handleDelete(item.id)}>Xoá</Button></ListItem>)
      } 
      </List>
      </Stack>
  );
}

export default Todo;
