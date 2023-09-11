import styles from './Navbar.module.css'
import logo from '../images/logo.png'
import home from '../images/home.png'
import Message from '../images/sms-star.png'
import search from '../images/Search.png'
import Bookmark from '../images/saved.png'
import Setting from '../images/setting-2.png'
import reciept from '../images/receipt-text.png'
import profile1 from '../images/profile-1.png'
import { NavLink } from 'react-router-dom'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{faChevronDown} from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';
import {auth } from '../config/Firebase'
import {signOut} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
function Navbar(){

     const [isOpen, setIsOpen] = useState(false);
  const options = ['Signout'];
  const navigate= useNavigate()
  const logout = async ()=>{
    try{
        await signOut(auth)
        navigate('/')
    }
    catch(err){
        console.error(err)
    }
}

    return(
        <div className={styles.Navbar}>
            <div className={styles.topbar}>
            <div className={styles.logo}>
            <img src={logo} alt="twitterx"/>
            <img className={styles.search} width="20" height="20" src="https://img.icons8.com/ffffff/ios-glyphs/30/search--v1.png" alt="search--v1"/>
            <input type='text'  placeholder='Explore' />
            <NavLink className={styles.nav_link} to={"/landing"}><img width="41" height="41" src={home} alt='Home'/><strong>Home</strong></NavLink>
            <NavLink className={styles.nav_link} to={"/Notification"} ><img width="37" height="35" src="https://img.icons8.com/676A6D/fluency-systems-regular/48/appointment-reminders--v1.png" alt=""/></NavLink>
            <NavLink className={styles.nav_link} to={"/Messages"}><img width="35" height="35" src={Message} alt="Messages"/></NavLink>
            <NavLink className={styles.nav_link} to={"/Explore"} ><img width="35" height="35" src={search} alt=""/></NavLink>
            <NavLink className={styles.nav_link} to={"/Bookmark"}><img width="30" height="35" src={Bookmark} alt=""/></NavLink>
            <NavLink className={styles.nav_link} to={"/Settings"}><img width="37" height="37" src={Setting} alt=""/></NavLink>
            <NavLink className={styles.nav_link} to={""}><img width="37" height="37" src={reciept} alt=""/></NavLink>
            <div className={styles.vl}></div>
            <div className={styles.account}>
            <NavLink to={"/home"}><img className={styles.profile} width="37" height="37" src={profile1} alt='' /></NavLink>
                <h1>Elon Musk</h1>
                <FontAwesomeIcon className={styles.icon} icon={faChevronDown} style={{color:'#ffffff'}} onClick={() => setIsOpen(!isOpen)} />
            
                {isOpen && (
                          <div>
                            {options.map(option => (
                              <button className={styles.signOut} key={option} onClick={logout}>
                                {option}
                              </button>
                            ))}
                          </div>
                          )}
            </div>
            </div>
            </div>
            <div className={styles.Sidebar}>
              <div className={styles.logo}>
                <img src={logo} alt="twitterx"/>
              </div>
              <div className={styles.sidebarLinks}>
                    <NavLink className={styles.nav_link} to={"/landing"}><img width="41" height="41" src={home} alt='Home'/></NavLink>
                    <NavLink className={styles.nav_link} to={"/Notification"} ><img width="37" height="35" src="https://img.icons8.com/676A6D/fluency-systems-regular/48/appointment-reminders--v1.png" alt=""/></NavLink>
                    <NavLink className={styles.nav_link} to={"/Messages"}><img width="35" height="35" src={Message} alt="Messages"/></NavLink>
                    <NavLink className={styles.nav_link} to={"/Explore"} ><img width="35" height="35" src={search} alt=""/></NavLink>
                    <NavLink className={styles.nav_link} to={"/Bookmark"}><img width="30" height="35" src={Bookmark} alt=""/></NavLink>
                    <NavLink className={styles.nav_link} to={"/Settings"}><img width="37" height="37" src={Setting} alt=""/></NavLink>
                    <NavLink className={styles.nav_link} to={""}><img width="37" height="37" src={reciept} alt=""/></NavLink>
              </div>
            </div>
        </div>
    );
}

export default Navbar