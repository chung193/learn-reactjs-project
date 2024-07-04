import Snackbar from '@mui/joy/Snackbar';
import React, { useState, useEffect } from 'react'

const Notify = (props) => {
    return (
        <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            open={props.open}
            variant="soft"
            color={props.color}
            onClose={props.close}
            key={props.key ? props.key : 'key'}
        >
            {props.message}
        </Snackbar>
    )
}

export default Notify;