import * as React from 'react';
import Box from '@mui/joy/Box';
import Chip from '@mui/joy/Chip';
import IconButton from '@mui/joy/IconButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Stack from '@mui/joy/Stack';

const TransItem = (props) => {
    return (
        <Box component="section" sx={{ p: 2, border: '1px dashed grey', width: '100%' }}>
            <Box sx={{ marginBottom: 1 }}>
                <Chip variant="soft" color="neutral">
                    {props.data.wallet}
                </Chip>
                <Chip variant="soft" color="warning">
                    {props.data.type}
                </Chip>
                <Chip variant="soft" color="success">
                    {props.data.catalog}
                </Chip>
                <Chip variant="soft" color="primary">
                    {props.data.date}
                </Chip>
            </Box>
            <Stack direction='row' sx={{ width: '100%' }}>
                <Box sx={{ width: '50%' }}>
                    <Stack direction='row' justifyContent="flex-start" alignItems='center' sx={{ width: '100%' }}>
                        <Box sx={{ marginRight: 2 }}>
                            <Stack direction='row' justifyContent="flex-start" alignItems='center' sx={{ width: '100%' }}>
                                <h3 style={{ margin: 0 }}>
                                    {
                                        (props.data.operator == 'subtraction' ? '-' : '+') + props.data.amount.toLocaleString()
                                    }</h3>
                            </Stack>
                        </Box>
                        <Box>
                            <span><strong>{props.data.name}</strong></span><br />
                            <span>{props.data.note}</span>
                        </Box>
                    </Stack>
                </Box>
                <Box sx={{ width: '50%' }}>
                    <Stack direction='row' justifyContent="flex-end" alignItems='center' sx={{ width: '100%' }}>
                        <IconButton onClick={() => props.delete(props.data.id)} variant="plain"><DeleteOutlineIcon /></IconButton>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )
}

export default TransItem;