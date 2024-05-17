import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';


function RegisterUser({ renderLoginOrRegisterPage }) {
    const [message, setMessage] = useState(false)
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: "",
        password: ''
    })
    const handleUserDataChange = (event) => {

        setUserData({ ...userData, [event.target.name]: event.target.value })
    }
    const handleSignUpUser = () => {
        if (userData.firstName && userData.lastName && userData.password && userData.email) {


            const userFromLocal = JSON.parse(localStorage.getItem('users'))
            // console.log(userFromLocal)
            if (userFromLocal) {

                userFromLocal.push(userData) //[{},{},{}]
                localStorage.setItem('users', JSON.stringify(userFromLocal))
            }
            else {

                localStorage.setItem('users', JSON.stringify([userData]))
            }

            renderLoginOrRegisterPage()
        } else {
            setMessage(true)
        }
    }

    // const handleNameChange = (event) => {
    //     const newData = { ...userData }
    //     newData['firstName'] = event.target.value
    //     setUserData(newData)
    // }
    // const handleLastNameChange = (event) => {
    //     const newData = { ...userData }
    //     newData['lastName'] = event.target.value
    //     setUserData(newData)
    // }
    // const handleEmailChange = (event) => {
    //     const newData = { ...userData }
    //     newData['email'] = event.target.value
    //     setUserData(newData)
    // }
    // const handlePasswordChange = (event) => {
    //     const newData = { ...userData }
    //     newData['password'] = event.target.value
    //     setUserData(newData)
    // }
    console.log(userData)
    return (
        <div >
            <p>Register new account</p>
            {
                message && <Alert variant="filled" severity="error">
                    Please fill out empty fields
                </Alert>
            }
            <Box component="form" sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            autoComplete="given-name"
                            name="firstName"
                            required
                            fullWidth
                            id="firstName"
                            label="First Name"
                            value={userData.firstName}
                            autoFocus
                            onChange={handleUserDataChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            id="lastName"
                            label="Last Name"
                            name="lastName"
                            autoComplete="family-name"
                            value={userData.lastName}
                            onChange={handleUserDataChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            value={userData.email}
                            onChange={handleUserDataChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            value={userData.password}
                            id="password"
                            autoComplete="new-password"
                            onChange={handleUserDataChange}
                        />
                    </Grid>

                </Grid>
                <Button
                    type="button"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={handleSignUpUser}
                >
                    Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                    <Grid item>
                        <Link href="#" variant="body2" onClick={renderLoginOrRegisterPage}>
                            Already have an account? Sign in
                        </Link>
                    </Grid>
                </Grid>
            </Box>

        </div >
    )
}

export default RegisterUser;