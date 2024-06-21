import React, {useState, useEffect} from 'react'
import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Stack from '@mui/joy/Stack';
import Textarea from '@mui/joy/Textarea';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

function PersonalFinance() {
  const [list, setList] = useState([]); 
  const [catalogs, setCatalogs] = useState([
    'coffee', 'learn', 'dating', 'other', 'internet', 'electricity', 'water'
  ]); 
  
  const [inputCatalog, setInputCatalog] = useState(''); 
  const [inputName, setInputName] = useState(''); 
  const [inputAmount, setInputAmount] = useState(''); 
  const [inputNote, setInputNote] = useState(''); 

  const handleDelete = (id)=>{
    let newArr = [...list];
    let result = newArr.find(element => element.id = id);
    if (result !== 'undefined'){
      result.status = !result.status;
    }
    setList(newArr);
  }

  const handleChange = (e, name) =>{
    switch(name){
      case 'name':
        setInputName(e.target.value);
        break;
      case 'amount':
        setInputAmount(e.target.value);
        break;
      case 'note':
        setInputNote(e.target.value);
        break;
      default:
        console.log('default');
    }
  }

  const handleSelectChange = (
    event,
    newValue
  ) => {
    setInputCatalog(newValue);
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    let max = Math.max(...list.map(o => o.id)) + 1;
    let now = new Date();
    const formData = {
      id: max, 
      catalog: inputCatalog,
      name: inputName,
      amount: inputAmount,
      note: inputNote,
      created_at: now
    };
    setList([...list, formData]);
    setInputName('');
    setInputAmount('');
    setInputNote('');
    setInputCatalog('');
  }

  function formatDateTime(input) {
  
    const year = input.getFullYear();
    const month = String(input.getMonth() + 1).padStart(2, '0');
    const date = String(input.getDate()).padStart(2, '0');
    const hours = String(input.getHours()).padStart(2, '0');
    const minutes = String(input.getMinutes()).padStart(2, '0');
    const seconds = String(input.getSeconds()).padStart(2, '0');
  
    return `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
  }
  
  return (
    <Stack 
    spacing={2}
    direction="column"
    justifyContent="flex-start"
    alignItems="flex-start"
    >
    <form>
    <Stack 
    spacing={2}
    direction="column"
    justifyContent="flex-start"
    alignItems="flex-start"
    >
      <Select 
      value={inputCatalog} 
      onChange={handleSelectChange} 
      placeholder="Catalog">
      {
        catalogs.map((item)=>  <Option key={item} value={item}>{item}</Option>)
      }
      </Select> 
      <Input type='text' placeholder="Name" value={inputName} onChange={(e)=>handleChange(e, 'name')}></Input>
      <Input type='text' placeholder="Amount" value={inputAmount} onChange={(e)=>handleChange(e, 'amount')}></Input>
      <Textarea minRows={2} placeholder="Note" value={inputNote} onChange={(e)=>handleChange(e, 'note')}/>
      <Button type='submit' onClick={handleSubmit}>Add data</Button>
      </Stack>
    </form>

    <List marker='disc'>
    <Stack
    spacing={2}
    direction="column"
    justifyContent="flex-start"
    alignItems="flex-start"
    >
      {
        list.map((item, index)=> 
        <ListItem key={item.id}>
        {
          item.name +'-'+item.amount +'-'+item.catalog + '-' + formatDateTime(item.created_at)
        }
        <Button onClick={()=> handleDelete(item.id)}>Xoá</Button></ListItem>)
      } 
      </Stack>
      </List>
      </Stack>
  );
}

export default PersonalFinance;
