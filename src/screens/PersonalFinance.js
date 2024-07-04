import React, { useState, useEffect } from 'react'
import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Stack from '@mui/joy/Stack';
import Textarea from '@mui/joy/Textarea';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import WalletIcon from '@mui/icons-material/Wallet';
import ReceiptIcon from '@mui/icons-material/Receipt';

import './PersonalFinance.css';
import fakeDataTrans from '../mockup/Transaction';
import fakeDataWallet from '../mockup/Wallet';
import TransType from '../mockup/TransType';
import Catalog from '../mockup/Catalog';
import AddTransaction from '../components/AddTransaction';
import AddWallet from '../components/AddWallet';

import { formatDateTime, getName, getOperator } from '../ultils/Common';

function PersonalFinance() {

  const [list, setList] = useState([]);
  const [sum, setSum] = useState(0);
  const [listFilter, setListFilter] = useState([]);
  const [isFillter, setIsFillter] = useState(false);
  const [wallets, setWallets] = useState([]);
  const [catalogs, setCatalogs] = useState([]);
  const [isDisableCatalogSelect, setIsDisableCatalogSelect] = useState(true);
  const [isShowFrom, setIsShowFrom] = useState(false);
  // input for wallet
  const [inputWalletName, setInputWalletName] = useState('');
  const [inputStartAmount, setInputStartAmount] = useState(0);
  // input for trans
  const [inputCatalog, setInputCatalog] = useState('');
  const [inputName, setInputName] = useState('');
  const [inputTransType, setInputTransType] = useState('');
  const [inputFrom, setInputFrom] = useState('');
  const [inputAmount, setInputAmount] = useState('');
  const [inputNote, setInputNote] = useState('');
  const [inputWalletId, setInputWalletId] = useState('');

  useEffect(() => {

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
      case 'from':
        setInputFrom(e.target.value);
        break;
      case 'amount':
        setInputAmount(e.target.value);
        break;
      case 'wallet_id':
        setInputWalletId(e.target.value);
        break;
      case 'trans_type':
        setInputTransType(e.target.value);
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
    if (newValue != null) {
      setInputCatalog(newValue);
      debugger;
      let result = Catalog.find(item => item.id == newValue);
      if (result.name == 'loan' || result.name == 'borrow')
        setIsShowFrom(true);
    }
  };

  const handleSelectChangeType = (
    e,
    newValue
  ) => {
    setInputTransType(newValue);
    setCatalogs(Catalog.filter(item => item.type_id == newValue));
    setIsDisableCatalogSelect(false);
  };

  const addWallet = (e) => {
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
      wallet_id: inputWalletId,
      from: inputFrom,
      type: inputTransType,
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
    setSum(list.reduce((accumulator, b) => { return accumulator + parseInt(b.amount) }, 0));
  }

  const clearFilter = () => {
    setIsFillter(false);
    setSum(list.reduce((accumulator, b) => { return accumulator + parseInt(b.amount) }, 0));
  }



  return (
    <Stack
      spacing={2}
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
    >

      <h1><strong>Personal Finance</strong></h1>
      <Tabs sx={{ width: '100%' }}>
        <TabList>
          <Tab
            variant="plain"
            color="neutral">
            <EqualizerIcon />
            Overview
          </Tab>
          <Tab
            variant="plain"
            color="neutral">
            <WalletIcon />
            Wallet
          </Tab>
          <Tab
            variant="plain"
            color="neutral">
            <ReceiptIcon />
            Transaction
          </Tab>
        </TabList>
        <TabPanel value={0}>
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
                    <ListItem key={'trans-' + item.id}>
                      {
                        getName(TransType, item.type) + '-' + item.name + '-' + item.amount.toLocaleString() + '-' + item.catalog + '-' + formatDateTime(item.created_at)
                      }
                      <Button onClick={() => handleDelete(item.id)} variant="plain">Xoá</Button></ListItem>))
                  :
                  (list.map((item, index) =>
                    <ListItem key={'trans-' + item.id}>
                      {
                        getName(TransType, item.type) + '-' + item.name + '-' + item.amount.toLocaleString() + '-' + item.catalog + '-' + formatDateTime(item.created_at)
                      }
                      <Button onClick={() => handleDelete(item.id)} variant="plain">Xoá</Button></ListItem>))
              }
            </Stack>
          </List>

          <p>Total : {sum.toLocaleString()}</p>
        </TabPanel>
        <TabPanel value={1}>
          <Stack direction='row' spacing={2}>
            <AddWallet change={handleChange} submit={addWallet}
              wallet={{
                name: inputWalletName,
                startAmount: inputStartAmount
              }}
            />
            <ul>
              {
                wallets.map(item => <li key={item.id}><strong>{item.name}</strong> - {item.startAmount.toLocaleString()}</li>)
              }
            </ul>
          </Stack>

        </TabPanel>
        <TabPanel value={2}>
          <AddTransaction
            change={handleChange}
            submit={handleSubmit}
            selectChange={handleSelectChange}
            selectChangeType={handleSelectChangeType}
            wallet={wallets}
            listData={list}
            listCatalog={catalogs}
            transList={TransType}
            trans={{
              name: inputName,
              catalog: inputCatalog,
              type: inputTransType,
              amount: inputAmount,
              note: inputNote,
              wallet_id: inputWalletId,
              from: inputFrom
            }}
            isSelectCatalog={isDisableCatalogSelect}
            isShowFrom={isShowFrom}
          />
        </TabPanel>
      </Tabs>
    </Stack>
  );
}

export default PersonalFinance;
