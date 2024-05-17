import React, { useState } from 'react'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';


function LoginUser({ renderLoginOrRegisterPage }) {
    const [message, setMessage] = useState("")
    const [userSignInData, setSignInData] = useState({
        email: "",
        password: ""
    })
    const handleSigninChange = (event) => {
        setSignInData({ ...userSignInData, [event.target.name]: event.target.value })
    }
    console.log(userSignInData)

    const handleSignIn = () => {
        const userFromLocal = JSON.parse(localStorage.getItem('users'))
        const checkUserExists = userFromLocal.some(user => user.email === userSignInData.email)
        if (checkUserExists) {
            setMessage("Succefully signed in")
        } else {
            setMessage("No such user")

        }
    }
    return (
        <>
            <p>Sign in</p>
            {message && <Alert variant="filled" severity="info">
                {message}
            </Alert>}
            <Box component="form" sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={userSignInData.email}
                    onChange={handleSigninChange}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    value={userSignInData.password}
                    onChange={handleSigninChange}
                    autoComplete="current-password"
                />

                <Button
                    type="button"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={handleSignIn}
                >
                    Sign In
                </Button>

                <Link href="#" variant="body2" onClick={renderLoginOrRegisterPage}>
                    {"Don't have an account? Sign Up"}
                </Link>

            </Box>

        </>
    )
}

export default LoginUser;

// const inputEmail = 'kanybek@kanybek.com'


// [{ name: "kanybek", email: "kanybek@kanybek.com" }, { name: "kai", email: "kai@kai.com" }]

// const ifUserExists=localArray.some(user=>user.email===inputEmail)
