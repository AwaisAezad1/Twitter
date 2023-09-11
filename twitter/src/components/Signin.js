import { useState } from 'react'
import {auth ,googleprovider} from '../config/Firebase'
import styles from './Signin.module.css'
import logo from '../images/logo.png'
import {signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
function SignIn(){

    const[email,setemail] = useState("")
    const[password,setpassword] = useState("")
    const navigate= useNavigate()


    const signIn = ()=>{
            signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                alert("SignIn successful!")
                  console.log(result);
                  setTimeout(() => {
                    navigate('/landing')
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
    <div className={styles.SignInmain}>
       <div className={styles.box}>
            <img src={logo} alt=''/>
            <input type="email" placeholder="Email" onChange={(e)=> setemail(e.target.value)} />
            <input type= "password" placeholder="Password" onChange={(e)=> setpassword(e.target.value)} />
            <button onClick={signIn}>Sign In</button>
            <div className={styles.google}>
            <h1>Sign in with Google</h1>
            <img width="48" height="48" src="https://img.icons8.com/fluency/48/google-logo.png" alt="google-logo" onClick={signInwithgoogle} style={{cursor: 'pointer'}}/>
            </div>
        </div>
    </div>
)
} export default SignIn;