import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Stack from '@mui/joy/Stack';

const AddWallet = () =>{
    return (
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
    )
}

export default AddWallet;