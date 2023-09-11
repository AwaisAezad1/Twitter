import { useState } from 'react'
import {auth ,googleprovider} from '../config/Firebase'
import styles from './Auth.module.css'
import logo from '../images/logo.png'
import {createUserWithEmailAndPassword, signInWithPopup} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

function Auth(){

        const[email,setemail] = useState("")
        const[password,setpassword] = useState("")
        const navigate= useNavigate()


        const signUp = ()=>{
                createUserWithEmailAndPassword(auth, email, password)
                .then((result) => {
                    console.log(result);
                    alert("Signup successful!")
                    setTimeout(() => {
                        navigate('/Signin')
                    }, 500); 
                })
                .catch((error) => {
                  console.log(error.code);
                  console.log(error.message);
                  alert(error.message)
                });
                
        }


        const signInwithgoogle = ()=>{
                signInWithPopup(auth, googleprovider)
                .then((result) => {
                    console.log(result);
                    alert("Signup successful!")
                    setTimeout(() => {
                        navigate('/Signin')
                    }, 500); 
                })

             .catch((error) => {
                  console.log(error.code);
                  console.log(error.message);
                  alert(error.message)
                });
                
        }

    return(
        <div className={styles.Authmain}>
           <div className={styles.box}>
                <img src={logo} alt=''/>
                <input type="text" placeholder='Firstname' />
                <input type="text" placeholder='Lastname' />
                <input type="email" placeholder="Email" onChange={(e)=> setemail(e.target.value)} />
                <input type= "password" placeholder="Password" onChange={(e)=> setpassword(e.target.value)} />
                <button onClick={signUp}>Sign Up</button>
                <div className={styles.google}>
                <h1>Sign in with Google</h1>
                <img width="48" height="48" src="https://img.icons8.com/fluency/48/google-logo.png" alt="google-logo" onClick={signInwithgoogle} style={{cursor: 'pointer'}}/>
                </div>
                <span>Already have an account? <NavLink to={'Signin'} className={styles.btn}>SignIn</NavLink></span>
            </div>
        </div>
    )
} export default Auth;