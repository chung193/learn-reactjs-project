import React, { useState, useEffect } from 'react'

import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Stack from '@mui/joy/Stack';
import Select from '@mui/joy/Select';
import Textarea from '@mui/joy/Textarea';
import fakeDataTrans from '../mockup/Transaction';
import fakeDataWallet from '../mockup/Wallet';
import TransType from '../mockup/TransType';
import Option from '@mui/joy/Option';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import { formatDateTime, getName, getOperator } from '../ultils/Common';
import Chip from '@mui/joy/Chip';
import TransItem from './TransItem';

const AddTransaction = (props) => {

  const [listFilter, setListFilter] = useState([]);
  const [isFillter, setIsFillter] = useState(false);
  const [sum, setSum] = useState(0);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(props.listData);
  }, []);

  const handleFilter = (e, newValue) => {
    setIsFillter(true);
    let newArr = [...list];
    let result = newArr.filter((item) => {
      return (item.created_at.getMonth() + 1 == newValue);
    })
    setListFilter(result);
    setSum(result.reduce((accumulator, b) => { return accumulator + parseInt(b.amount) }, 0));
  }

  const clearFilter = () => {
    setIsFillter(false);
    setSum(list.reduce((accumulator, b) => { return accumulator + parseInt(b.amount) }, 0));
  }

  return (
    <Stack
      spacing={4}
      direction="row"
    >

      <Stack
        spacing={2}
        direction="column">
        <h2><strong>Add Transaction</strong></h2>
        <Select
          value={props.trans.trans_type}
          onChange={props.selectChangeType}
          placeholder="Trans type">
          {
            props.transList.map((item) => <Option key={'trans-select-list-' + item.id + item.name} value={item.id}>{item.name}</Option>)
          }
        </Select>
        <Select
          disabled={props.isSelectCatalog}
          value={props.trans.catalog}
          onChange={props.selectChange}
          placeholder="Catalog">
          {
            props.listCatalog.map((item) => <Option key={item} value={item.id}>{item.name}</Option>)
          }
        </Select>
        {
          props.wallet.length === 0 ?
            <p>Dont have any wallet, create one</p>
            :
            <Select
              value={props.trans.wallet_id}
              onChange={props.selectChangeWallet}
              placeholder="Wallet">
              {
                props.wallet.map((item) => <Option key={'wallet-select-list-' + item.id + item.name} value={item.id}>{item.name}</Option>)
              }
            </Select>
        }

        {
          props.isShowFrom ?
            <Input type='text' placeholder="From" value={props.trans.from} onChange={(e) => props.change(e, 'from')}></Input>
            : <></>
        }

        <Input type='text' placeholder="Name" value={props.trans.name} onChange={(e) => props.change(e, 'name')}></Input>
        <Input type='number' placeholder="Amount" value={props.trans.amount} onChange={(e) => props.change(e, 'amount')}></Input>
        <Textarea minRows={2} placeholder="Note" value={props.trans.note} onChange={(e) => props.change(e, 'note')} />
        <Button type='submit' onClick={props.submit}>Add Transaction</Button>
      </Stack >
      <Stack
        spacing={2}
        direction="column"
        sx={{ width: '100%' }}
      >
        <Stack
          spacing={2}
          direction="row"
          sx={{ width: '100%', p: 2 }}
        >
          <Button type='button' onClick={clearFilter}>Clear filter</Button>

          <Select placeholder="Filter by month" onChange={handleFilter} >
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
            <Option value="4">4</Option>
            <Option value="5">5</Option>
            <Option value="6">6</Option>
            <Option value="7">7</Option>
            <Option value="8">8</Option>
            <Option value="9">9</Option>
            <Option value="10">10</Option>
            <Option value="11">11</Option>
            <Option value="12">12</Option>
          </Select>
        </Stack>

        <List>
          {
            (props.listData.map((item, index) =>
              <ListItem key={'my-trans-' + item.id} >
                {
                  <TransItem data={{
                    id: item.id,
                    operator: getOperator(props.transList, item.type),
                    type: getName(props.transList, item.type),
                    catalog: item.catalog,
                    name: item.name,
                    wallet: getName(props.wallet, item.wallet_id),
                    amount: item.amount.toLocaleString(),
                    note: item.note,
                    date: formatDateTime(item.created_at)
                  }}
                    delete={() => props.handleDelete(item.id)}
                  />
                }

              </ListItem>))
          }
        </List>
      </Stack>
    </Stack>
  )
}

export default AddTransaction;