import styles from './Leftbar.module.css'
import Setting from '../images/setting-2.png'
import Verified from '../images/Verified.png'
import { NavLink } from 'react-router-dom'
import Leftuserbox from './Leftuserbox'
import React, { useState } from 'react';
import VerificationBox from './VerificationBox';

function Leftbar(){
    const [isVerificationBoxVisible, setVerificationBoxVisible] = useState(false);
    const [button1Active, setButton1Active] = useState(false);

  const toggleVerificationBox = () => {
    setVerificationBoxVisible(!isVerificationBoxVisible);
    
    };
    const toggleButton1 = () => {
        setButton1Active(!button1Active);
      };
    
    return(
        <div className={styles.leftbar}>
            <Leftuserbox/>
            <NavLink className={`${styles.nav_link} ${styles.post}`} ><h1>Post</h1></NavLink>
            <div className={styles.vl_leftbar}></div>
            <NavLink className={`${styles.nav_link} ${styles.more} ${button1Active ? styles.activeButton : ''}`}  onClick={() => {toggleButton1();toggleVerificationBox();}}><img src={Verified} alt="verified-account"/><h1>Verified</h1></NavLink>
            <NavLink className={`${styles.nav_link} ${styles.more}`} to={"/Settings"}><img width="37" height="37" src={Setting} alt='Settings'/><h1>Settings</h1></NavLink>
            <NavLink className={`${styles.nav_link} ${styles.more}`} to={""}><img width="37" height="37" src="https://img.icons8.com/888888/ios/50/phone--v1.png" alt="phone--v1"/><h1>Help Center</h1></NavLink>
            {isVerificationBoxVisible && <VerificationBox />}
        </div>
    );
} export default Leftbar;