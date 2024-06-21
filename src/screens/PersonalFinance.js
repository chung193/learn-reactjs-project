import React, {useState, useEffect} from 'react'
import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Stack from '@mui/joy/Stack';
import Textarea from '@mui/joy/Textarea';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

const fakeData = [
  {
    id: 1,
    name: 'trong tháng 1',
    amount: 1000000,
    catalog: 'coffee',
    note:'test',
    created_at:  new Date("2022-01-25")
  },
  {
    id: 2,
    name: 'trong tháng 2',
    amount: 1000000,
    catalog: 'coffee',
    note:'test',
    created_at:  new Date("2022-02-25")
  },
  {
    id: 3,
    name: 'trong tháng 3',
    amount: 1000000,
    catalog: 'coffee',
    note:'test',
    created_at:  new Date("2022-03-25")
  },
  {
    id: 4,
    name: 'trong tháng 4',
    amount: 1000000,
    catalog: 'coffee',
    note:'test',
    created_at:  new Date("2022-04-25")
  },
  {
    id: 6,
    name: 'trong tháng 5',
    amount: 1000000,
    catalog: 'coffee',
    note:'test',
    created_at:  new Date("2022-05-25")
  },
  {
    id: 7,
    name: 'trong tháng 6',
    amount: 1000000,
    catalog: 'coffee',
    note:'test',
    created_at:  new Date("2022-06-25")
  },
  {
    id: 8,
    name: 'trong tháng 6',
    amount: 1000000,
    catalog: 'coffee',
    note:'test',
    created_at:  new Date("2022-06-25")
  },
  {
    id: 9,
    name: 'trong tháng 6',
    amount: 1000000,
    catalog: 'coffee',
    note:'test',
    created_at:  new Date("2022-06-25")
  },
]

function PersonalFinance() {
  const [list, setList] = useState([]); 
  const [sum, setSum] = useState(0); 
  const [listFilter, setListFilter] = useState([]);
  const [isFillter, setIsFillter] = useState(false); 
  const [catalogs, setCatalogs] = useState([
    'coffee', 'learn', 'dating', 'other', 'internet', 'electricity', 'water'
  ]); 
  
  const [inputCatalog, setInputCatalog] = useState(''); 
  const [inputName, setInputName] = useState(''); 
  const [inputAmount, setInputAmount] = useState(''); 
  const [inputNote, setInputNote] = useState(''); 

  useEffect(()=>{
    console.log(fakeData.reduce((accumulator,b)=>{return  accumulator +  parseInt(b.amount) },0));
  }, [])

  const handleDelete = (id)=>{
    let newArr = [...list];
    let result = newArr.find(element => element.id = id);
    if (result !== 'undefined'){
      result.status = !result.status;
    }
    setList(newArr);
    setSum(newArr.reduce((accumulator,b)=>{return  accumulator +  parseInt(b.amount) },0))
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

  const handleFilter = (e, newValue)=>{
    
    setIsFillter(true);
    let newArr = [...list];
    
    let result = newArr.filter((item)=>{
      return (item.created_at.getMonth() + 1 == newValue);
    })
    setListFilter(result); 
    setSum(result.reduce((accumulator,b)=>{return  accumulator +  parseInt(b.amount) },0));
  }

  const handleSelectChange = (
    e,
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
    setSum(list.reduce((accumulator,b)=>{return  accumulator +  parseInt(b.amount) },0))
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

      <Select defaultValue="6" placeholder="Filter by month" onChange={handleFilter} >
      <Option value="1">1</Option>
      <Option value="2">2</Option>
      <Option value="3">3</Option>
      <Option value="4">4</Option>
      <Option value="5">5</Option>
      <Option value="6">6</Option>
    </Select>

      <Input type='text' placeholder="Name" value={inputName} onChange={(e)=>handleChange(e, 'name')}></Input>
      <Input type='text' placeholder="Amount" value={inputAmount} onChange={(e)=>handleChange(e, 'amount')}></Input>
      <Textarea minRows={2} placeholder="Note" value={inputNote} onChange={(e)=>handleChange(e, 'note')}/>
      <Button type='submit' onClick={handleSubmit}>Add data</Button>
      <Button type='button' onClick={
        ()=> {
          setList(fakeData);
          console.log(fakeData.reduce((accumulator,b)=>{return  accumulator +  parseInt(b.amount) },0));
          setSum(fakeData.reduce((accumulator,b)=>{return  accumulator +  parseInt(b.amount) },0))
        }
        }>Set fake data</Button>
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
        isFillter ? 
        (listFilter.map((item, index)=> 
          <ListItem key={item.id}>
          {
            item.name +'-'+item.amount +'-'+item.catalog + '-' + formatDateTime(item.created_at)
          }
          <Button onClick={()=> handleDelete(item.id)}>Xoá</Button></ListItem>))
        :
        (list.map((item, index)=> 
        <ListItem key={item.id}>
        {
          item.name +'-'+item.amount +'-'+item.catalog + '-' + formatDateTime(item.created_at)
        }
        <Button onClick={()=> handleDelete(item.id)}>Xoá</Button></ListItem>))
      } 
      </Stack>
      </List>
      <p>Total : {sum}</p>
      </Stack>
  );
}

export default PersonalFinance;
