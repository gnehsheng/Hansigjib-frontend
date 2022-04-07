import React, {useState} from 'react'
import LoginForm from '../components/LoginForm'
import '../style/login.css'

export default function LoginPage() {

    const adminUser = {
        username: 'admin@admin.com',
        password: '1234'
    }

    const [user,setUser] = useState({name: '', email: ''})
    const [error, setError] = useState('')

    const Login = details => {
        console.log(details)

        if(details.email === adminUser.username && details.password === adminUser.password) {
            console.log('logged in')
            setUser({
                name: details.name,
                email: details.email
            })
        }else{
            console.log('Details do not match')
            setError('Details do not match')
        }
    }

    const Logout = () =>{
        setUser({name: '', email: ''})
    }

    return (
        <>
           {(user.email !== '') ? (
               <div>
                   <h2>Welcome, <span>{user.name}</span></h2>
                   <button onClick={Logout}>Logout</button>
               </div>
           ) : (
            <LoginForm Login={Login} error={error} />
           )
           }
        </>
    )
}