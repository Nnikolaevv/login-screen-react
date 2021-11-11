import React, {useState} from "react";
import LoginForm from "./components/LoginForm";

function App() {
    const adminUser = {
        email: 'admin@admin.com',
        password: 'admin123'
    }

    const [user, setUser] = useState({name: '', email: ''})
    const [error, setError] = useState('')

    const Login = (details) => {
        if (details.email === adminUser.email && details.password === adminUser.password) {
            setUser({
                name: details.name,
                email: details.email
            })
            setError('')
        } else {
            setError(`Use ${adminUser.email} ${adminUser.password}`)
        }
    }

    const Logout = () => {
        setUser({name: '', email: ''});
    }

    return (
        <div className="App">
            {(user.email !== '')
                ?
                (<div className='welcome'>
                    <h2>Welcome, <span>{user.name}</span></h2>
                    <button onClick={Logout}>Logout</button>
                </div>)
                :
                (<div>
                    <LoginForm Login={Login} error={error}/>
                </div>)
            }
        </div>
    );
}

export default App;
