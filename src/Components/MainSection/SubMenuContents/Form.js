// React Import 

import { useEffect, useState } from 'react';


// Vendor Import 
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';


const Form = () => {
    const initFormData = {
        name : '',
        email : '',
        gender : '',
        cell : '',
    }
    const [formData , setFormData] = useState(initFormData);
    const [formErrors , setformErrors] = useState({});
    const [isSubmit,setIsSubmit] = useState(false);
    const [allUsers,setAllUsers] = useState(
        JSON.parse(localStorage.getItem('userList')) || []
    )

    const handleChange = (e) => {
        e.preventDefault();
        const {name,value} = e.target;
        
        setFormData({...formData, [name] : value})
        if(value.length > 0){
            delete formErrors[name];
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setformErrors(validate(formData))

        setIsSubmit(true)
        // handleSaveToPC(formData,'file')
    }

    const validate = (data) => {
        const error = {};
        const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        const isAvailable = allUsers.filter( (item) => item.email === data.email).length
        
        if(!data.name){
            error.name = "Name is required!"
        }
        if(!data.email){
            error.email = "Email is required!"
        }
        else if(isAvailable){
            error.email = "This email is already taken. Try something else!! "
        }
        
        if(!data.gender){
            error.gender = "Select your Gender!"
        }
        if(!data.cell){
            error.cell = "Phone number is required!"
        }
        return error;
    }

    const handleSaveToPC = (jsonData,filename) => {
        const fileData = JSON.stringify(jsonData);
        const blob = new Blob([fileData], {type: "text/plain"});
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = `${filename}.json`;
        link.href = url;
        link.click();
    }
    
    useEffect( () => {
        if( Object.keys(formErrors).length === 0 && isSubmit ){
            allUsers.push(formData)
            localStorage.setItem('userList', JSON.stringify(allUsers));
            setFormData(initFormData)
            handleSaveToPC(allUsers, 'users-info');
        }
    },[formErrors])

    const {name, email, gender,cell  } = formData
    
    return (
        
            <div className="form-section">
                <form
                    onSubmit={handleSubmit}
                >
                    <TextField 
                        label="Full Name" 
                        name="name"
                        value={name}
                        variant="standard"
                        fullWidth
                        onChange={handleChange}
                    />
                    <p className="error-msg">{formErrors.name}</p>



                    <TextField 
                        id="email" 
                        label="Email"
                        name="email"
                        value={email}
                        variant="standard"
                        type="email"
                        fullWidth
                        onChange={handleChange}
                    />
                    <p className="error-msg">{formErrors.email}</p>

                    <FormControl variant="standard" fullWidth>
                        <InputLabel id="demo-simple-select-standard-label">Select Gender</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            name="gender"
                            value={gender}
                            onChange={handleChange}
                            label="Age"
                            
                        >
                            <MenuItem value="">
                            <em>None</em>
                            </MenuItem>
                            <MenuItem value={'male'}>Male</MenuItem>
                            <MenuItem value={'female'}>Female</MenuItem>
                            <MenuItem value={'other'}>Other</MenuItem>
                        </Select>
                    </FormControl>
                    <p className="error-msg">{formErrors.gender}</p>


                    <TextField 
                        id="cell" 
                        label="Phone"
                        name="cell" 
                        value={cell}
                        variant="standard"
                        
                        type="number"
                        fullWidth
                        onChange={handleChange}
                    />
                    <p className="error-msg">{formErrors.cell}</p>

                    <Button type={"submit"} variant="contained" className="my-3" color="success"> Submit </Button>
                </form>
            </div>
    )
}

export default Form;