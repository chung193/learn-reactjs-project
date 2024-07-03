import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Stack from '@mui/joy/Stack';

const AddWallet = (props) => {
  return (
    <Stack
      spacing={2}
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <h2><strong>Add Wallet</strong></h2>
      <Input type='text' placeholder="Tên ví" value={props.wallet.name} onChange={(e) => props.change(e, 'walletName')}></Input>
      <Input type='number' placeholder="Số dư ban đầu" value={props.wallet.startAmount} onChange={(e) => props.change(e, 'startAmount')}></Input>
      <Button type='submit' onClick={props.submit}>Add Wallet</Button>

    </Stack>
  )
}

export default AddWallet;