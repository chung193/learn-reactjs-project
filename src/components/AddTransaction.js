import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Stack from '@mui/joy/Stack';
import Select from '@mui/joy/Select';
import Textarea from '@mui/joy/Textarea';

const AddTransaction = () =>{
    return (
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

              <Select
                value={inputCatalog}
                onChange={handleSelectChange}
                placeholder="Trans type">
                {
                  TransType.map((item) => <Option key={item.id} value={item.id}>{item.name}</Option>)
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
    )
}

export default AddTransaction;