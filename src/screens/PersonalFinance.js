import React, { useState, useEffect } from 'react'
import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Stack from '@mui/joy/Stack';
import Textarea from '@mui/joy/Textarea';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import './PersonalFinance.css';
import fakeDataTrans from '../mockup/Transaction';
import fakeDataWallet from '../mockup/Wallet';

function PersonalFinance() {
  const [list, setList] = useState([]);
  const [sum, setSum] = useState(0);
  const [listFilter, setListFilter] = useState([]);
  const [isFillter, setIsFillter] = useState(false);
  const [wallets, setWallets] = useState([]);
  const [catalogs, setCatalogs] = useState([
    'coffee', 'learn', 'dating', 'other', 'internet', 'electricity', 'water'
  ]);

  // input for wallet
  const [inputWalletName, setInputWalletName] = useState('');
  const [inputStartAmount, setInputStartAmount] = useState(0);
  // input for trans
  const [inputCatalog, setInputCatalog] = useState('');
  const [inputName, setInputName] = useState('');
  const [inputAmount, setInputAmount] = useState('');
  const [inputNote, setInputNote] = useState('');
  const [inputWalletId, setInputWalletId] = useState('');

  useEffect(() => {
    // console.log(fakeDataWallet);
    // console.log(fakeDataTrans.reduce((accumulator, b) => { return accumulator + parseInt(b.amount) }, 0));
  }, [])

  const handleDelete = (id) => {
    let newArr = [...list];
    let result = newArr.find(element => element.id = id);
    if (result !== 'undefined') {
      result.status = !result.status;
    }
    setList(newArr);
    setSum(newArr.reduce((accumulator, b) => { return accumulator + parseInt(b.amount) }, 0))
  }

  const handleChange = (e, name) => {
    switch (name) {
      case 'name':
        setInputName(e.target.value);
        break;
      case 'amount':
        setInputAmount(e.target.value);
        break;
      case 'wallet_id':
        setInputWalletId(e.target.value);
        break;
      case 'note':
        setInputNote(e.target.value);
        break;
      case 'walletName':
        setInputWalletName(e.target.value);
        break;
      case 'startAmount':
        setInputStartAmount(e.target.value);
        break;
      default:
        console.log('default');
    }
  }


  const handleFilter = (e, newValue) => {

    setIsFillter(true);
    let newArr = [...list];

    let result = newArr.filter((item) => {
      return (item.created_at.getMonth() + 1 == newValue);
    })
    setListFilter(result);
    setSum(result.reduce((accumulator, b) => { return accumulator + parseInt(b.amount) }, 0));
  }

  const handleSelectChange = (
    e,
    newValue
  ) => {
    setInputCatalog(newValue);
  };

  const addWallet = (e) =>{
    e.preventDefault();
    let max = Math.max(...wallets.map(o => o.id)) + 1;
    const formData = {
      id: max,
      name: inputWalletName,
      startAmount: inputStartAmount
    };
    setWallets([...wallets, formData]);
    setInputWalletName('');
    setInputStartAmount(0);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let max = Math.max(...list.map(o => o.id)) + 1;
    let now = new Date();
    const formData = {
      id: max,
      inputWalletId: max,
      catalog: inputCatalog,
      name: inputName,
      amount: inputAmount,
      note: inputNote,
      created_at: now
    };
    setList([...list, formData]);
    setInputName('');
    setInputAmount('');
    setInputWalletId('');
    setInputNote('');
    setInputCatalog('');
    setSum(list.reduce((accumulator, b) => { return accumulator + parseInt(b.amount) }, 0))
  }

  const clearFilter = () => {
    setIsFillter(false);
    setSum(list.reduce((accumulator, b) => { return accumulator + parseInt(b.amount) }, 0));
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
    <Stack
      spacing={2}
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
    >

      <form>
        <Stack
          spacing={2}
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <fieldset>
            <legend>Wallet</legend>
            <Stack
              spacing={2}
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Input type='text' placeholder="Tên ví" value={inputWalletName} onChange={(e) => handleChange(e, 'walletName')}></Input>
              <Input type='number' placeholder="Số dư ban đầu" value={inputStartAmount} onChange={(e) => handleChange(e, 'startAmount')}></Input>
              <Button type='submit' onClick={addWallet}>Thêm ví</Button>
              
            </Stack>
          </fieldset>
         
          <fieldset>
            <legend>Transaction</legend>
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
                  catalogs.map((item) => <Option key={item} value={item}>{item}</Option>)
                }
              </Select>
                {
                  wallets.length === 0 ?
                  <p>Dont have any wallet, create one</p>
                  :
                  <Select
                    value={inputWalletId}
                    onChange={handleSelectChange}
                    placeholder="Wallet">
                    {
                      wallets.map((item) => <Option key={item.id} value={item.id}>{item.name}</Option>)
                    }
                  </Select>
                }
              

              <Input type='text' placeholder="Name" value={inputName} onChange={(e) => handleChange(e, 'name')}></Input>
              <Input type='number' placeholder="Amount" value={inputAmount} onChange={(e) => handleChange(e, 'amount')}></Input>
              <Textarea minRows={2} placeholder="Note" value={inputNote} onChange={(e) => handleChange(e, 'note')} />
              <Button type='submit' onClick={handleSubmit}>Add data</Button>

            </Stack>
          </fieldset>
        </Stack>
      </form>
      </Stack>
              <ul>
                {
                  wallets.map(item=> <li key={item.id}>{item.name} - {item.startAmount}</li>)
                }
              </ul>
      <Stack
      spacing={2}
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Button type='button' onClick={
        () => {
          setWallets(fakeDataWallet);
          setList(fakeDataTrans);
          console.log(fakeDataTrans.reduce((accumulator, b) => { return accumulator + parseInt(b.amount) }, 0));
          setSum(fakeDataTrans.reduce((accumulator, b) => { return accumulator + parseInt(b.amount) }, 0))
        }
      }>Set fake data</Button>

      <Button type='button' onClick={clearFilter}>Clear filter</Button>

      <Select defaultValue="6" placeholder="Filter by month" onChange={handleFilter} >
        <Option value="1">1</Option>
        <Option value="2">2</Option>
        <Option value="3">3</Option>
        <Option value="4">4</Option>
        <Option value="5">5</Option>
        <Option value="6">6</Option>
      </Select>
      </Stack>
      <List marker='disc'>
        <Stack
          spacing={2}
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          {
            isFillter ?
              (listFilter.map((item, index) =>
                <ListItem key={item.id}>
                  {
                    item.name + '-' + item.amount.toLocaleString() + '-' + item.catalog + '-' + formatDateTime(item.created_at)
                  }
                  <Button onClick={() => handleDelete(item.id)}>Xoá</Button></ListItem>))
              :
              (list.map((item, index) =>
                <ListItem key={item.id}>
                  {
                    item.name + '-' + item.amount.toLocaleString() + '-' + item.catalog + '-' + formatDateTime(item.created_at)
                  }
                  <Button onClick={() => handleDelete(item.id)}>Xoá</Button></ListItem>))
          }
        </Stack>
      </List>

      <p>Total : {sum.toLocaleString()}</p>
    
    </Stack>
  );
}

export default PersonalFinance;
