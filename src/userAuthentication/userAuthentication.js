import React, { useState } from 'react'
import LoginUser from './login'
import RegisterUser from './register'


function UserAuthentication() {
    const [userHasAccount, setUserHasAccount] = useState(true)
    const renderLoginOrRegisterPage = () => {
        setUserHasAccount(!userHasAccount)
    }
    return (
        <div className="card" style={{ width: "18rem", display: "flex", margin: 'auto', padding: "10px" }}>
            {userHasAccount ? <LoginUser renderLoginOrRegisterPage={renderLoginOrRegisterPage} />
                : <RegisterUser renderLoginOrRegisterPage={renderLoginOrRegisterPage} />}
        </div >
    )
}

export default UserAuthentication