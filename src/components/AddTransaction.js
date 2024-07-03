import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Stack from '@mui/joy/Stack';
import Select from '@mui/joy/Select';
import Textarea from '@mui/joy/Textarea';
import fakeDataTrans from '../mockup/Transaction';
import fakeDataWallet from '../mockup/Wallet';
import TransType from '../mockup/TransType';
import Catalog from '../mockup/Catalog';
import Option from '@mui/joy/Option';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import { formatDateTime, getName } from '../ultils/Common';
import Chip from '@mui/joy/Chip';

const AddTransaction = (props) => {
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
          value={props.trans.catalog}
          onChange={props.selectChange}
          placeholder="Catalog">
          {
            Catalog.map((item) => <Option key={item} value={item}>{item}</Option>)
          }
        </Select>

        <Select
          value={props.trans.trans_type}
          onChange={props.selectChangeType}
          placeholder="Trans type">
          {
            props.transList.map((item) => <Option key={'trans-select-list-' + item.id + item.name} value={item.id}>{item.name}</Option>)
          }
        </Select>

        {
          props.wallet.length === 0 ?
            <p>Dont have any wallet, create one</p>
            :
            <Select
              value={props.trans.wallet_id}
              onChange={props.handleSelectChange}
              placeholder="Wallet">
              {
                props.wallet.map((item) => <Option key={'wallet-select-list-' + item.id + item.name} value={item.id}>{item.name}</Option>)
              }
            </Select>
        }


        <Input type='text' placeholder="Name" value={props.trans.name} onChange={(e) => props.change(e, 'name')}></Input>
        <Input type='number' placeholder="Amount" value={props.trans.amount} onChange={(e) => props.change(e, 'amount')}></Input>
        <Textarea minRows={2} placeholder="Note" value={props.trans.note} onChange={(e) => props.change(e, 'note')} />
        <Button type='submit' onClick={props.submit}>Add Transaction</Button>
      </Stack >
      <Stack
        spacing={2}
        direction="column">
        <List marker='disc'>
          {
            (props.listData.map((item, index) =>
              <ListItem key={'my-trans-' + item.id}>
                {
                  getName(props.transList, item.type) + '-' + item.name + '-' + item.amount.toLocaleString() + '-' + item.catalog + '-' + formatDateTime(item.created_at)
                }
                <Button onClick={() => props.handleDelete(item.id)} variant="plain">Xoá</Button></ListItem>))
          }
        </List>
      </Stack>
    </Stack>
  )
}

export default AddTransaction;