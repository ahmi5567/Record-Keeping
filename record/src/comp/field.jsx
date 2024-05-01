import React from 'react'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack'
import './field.css'
function Field({ name, email, index , handleDelete }) {
    const handleDeleteClick = () => {
        handleDelete(index);
      }
    return (
        <div>
            <div className="data_val-1">
                <h4>{name}</h4>
                <h4>{email}</h4>
                <Stack>
                    <Button variant='contained' color='error' onClick={handleDeleteClick} >
                        <DeleteIcon />
                    </Button>
                </Stack>
            </div>
        </div>
    )
}

export default Field
