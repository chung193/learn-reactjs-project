import React, {useState, useEffect} from 'react'
import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Stack from '@mui/joy/Stack';
import ListDivider from '@mui/joy/ListDivider';

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
      <Input type='text' value={input} onChange={handleChange}></Input>
      <Button type='submit' sx={{width: 200}} onClick={handleSubmit}>Add todo</Button>
      <List marker='disc' sx={{width:'100%'}}>
        {
          list.map((item, index)=> 
          <><ListItem key={item.id} sx={{width:'100%'}}>
          {
            (!item.status) ? 
            (<del>{item.name} </del>)
            :
            (item.name)
          }
          <Button sx={{marginLeft: 10}} variant="plain" onClick={()=> handleDelete(item.id)}>Xoá</Button></ListItem>
          <ListDivider inset="startDecorator" /></>
          )
        } 
      </List>
      
    </Stack>
  );
}

export default Todo;
