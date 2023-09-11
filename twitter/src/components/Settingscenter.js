import styles from './Settingscenter.module.css'
import { NavLink } from 'react-router-dom'
function Settingscenter(){
    return(
        <div className={styles.Settingsmain}>
            <div className={styles.Settingsmainbar}>
                <h1>Settings</h1>
                <img width="24" height="24" src="https://img.icons8.com/1EA1F1/ios/50/settings--v1.png" alt="settings--v1"/>
            </div>
            <div className={styles.boxes}>
                <div className={styles.leftgrid}>
                    <div className={styles.leftboxes}>
                        <NavLink className={styles.Nav_link}>Your Account</NavLink>
                    </div>
                    <div className={styles.leftboxes}>
                        <NavLink className={styles.Nav_link}>Monetisation</NavLink>
                    </div>
                    <div className={styles.leftboxes}>
                        <NavLink className={styles.Nav_link}>Your Premium</NavLink>
                    </div>
                    <div className={styles.leftboxes}>
                        <NavLink className={styles.Nav_link}>Subscriptions</NavLink>
                    </div>
                    <div className={styles.leftboxes}>
                        <NavLink className={styles.Nav_link}>Display</NavLink>
                    </div>
                    <div className={styles.leftboxes}>
                        <NavLink className={styles.Nav_link}>Privacy</NavLink>
                    </div>
                </div>
                <div>
                    <div className={styles.rightbox}>
                        <h1>Account Information</h1>
                        <p>See your account information like your phone number and email address.</p>
                        <div className={styles.hl}></div>
                        <h1>Change Your Password</h1>
                        <p>Change Your Password At Any Time.</p>
                        <div className={styles.hl}></div>
                        <h1>Download An Archive Of Your Data</h1>
                        <p>Get insights into the type of information stored for your account.</p>
                        <div className={styles.hl}></div>
                        <h1>Deactivate Your Account</h1>
                        <p>Temporarily or Permanently remove your account.</p>
                        <div className={styles.hl}></div>
                        <h1>Audience & Tagging</h1>
                        <p>Manage what information you allow other people on X to see.</p>
                        <div className={styles.hl}></div>
                        <h1>Mute & Block</h1>
                        <p>Manage the accounts, words, and notifications that you’ve muted or blocked.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}export default Settingscenter