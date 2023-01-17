import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../../Hook/addUser';
import './Login.css';


const Login = () => {

    const [condition , setCondition] = useState(false);
    const navigate = useNavigate();

    const loginUser = (event) => {

        event.preventDefault();

        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;
        const cpassword = form.cpassword.value;

        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regEmail.test(email)) {
            alert("Invalid email....");
        }
        else {
            let regPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
            if (!regPass.test(password) || !regPass.test(cpassword)) {
                alert("Invalid password");
            }
            else {
                if (cpassword !== password) {
                    alert("password and confirm password not match")
                }
                else {

                    event.target.reset();

                    fetch('http://localhost:4000/admin', {
                        method: 'POST', // or 'PUT'
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ email, password }),
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            setCondition(data)
                        })
                        .catch((error) => {
                           setCondition(false)
                        });

                    if(condition){
                        addUser(email);
                        navigate('/profile');
                        
                    }
                    else{
                        alert("Your email or password is invalid")
                    }
                }
            }
        }

    }

    return (
        <div className='container ml-5 text-center'>
            <h2>Login</h2>
            <form className='login' onSubmit={loginUser}>
                <input type="email" name="email" className="form-controll" placeholder='Email' required />
                <br />
                <input type="password" name="password" className="form-controll" placeholder='Password' required />
                <br />
                <input type="password" name="cpassword" className="form-controll" placeholder='confirm password' required />
                <br />
                <input type="submit" value="Submit" className='btn btn-danger' />
            </form>
        </div>
    );
};

export default Login;