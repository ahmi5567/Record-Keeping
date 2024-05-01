import React, { useState } from 'react'
import './App.css'
import Header from './comp/header'
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Field from './comp/field';



function App() {
  const [name, setName] = useState("")

  const [email, setEmail] = useState("")

  const [data, setData] = useState([])

  const addData = () => {
    setData([...data, {
      name: name,
      email: email
    }
    ]);
    setName("")
    setEmail("")
  }
  const handleDelete = (index) => {
    setData(data.filter((field, i) => i !== index));
  };

  return (
    <div className="container">
      <div className="form">
        <Header />
        <Stack direction='row' spacing={6}>
          <TextField
            value={name}
            onChange={(event) => setName(event.target.value)}
            id="outlined-basic"
            label="Name"
            variant="outlined" />

          <TextField
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            id="outlined-basic"
            label="Email"
            variant="outlined" />

          <Button variant="contained" color='success' onClick={addData} > <AddIcon /> </Button>
        </Stack>
      </div>

      {/* Show Data  */}
      <div className="data">
        <div className="data_val">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>


        {
          data.map((element, index) => {
            return (
              <Field
                key={index}
                name={element.name}
                email={element.email}
                index={index}
                handleDelete={handleDelete}
              />
            )
          })
        }
      </div>


    </div>
  )
}

export default App
