import styles from './Messegeslist.module.css'
import Message from '../images/Message.png';
function Messegeslist(){
    return(
        <div className={styles.Messagemain}>
            <h3>Messages</h3>
            <div className={styles.hl}></div>
           <div className={styles.msg_req}>
           <p>Message requests</p>
            <img width="20" height="20" src="https://img.icons8.com/888888/ios/50/forward--v1.png" alt="forward--v1"/>
           </div>
           <div className={styles.hl}></div>
            <img className={styles.search} width="20" height="20" src="https://img.icons8.com/888888/ios-glyphs/30/search--v1.png" alt="search--v1"/>
            <input type='text' placeholder='Search for people and groups'></input>
            <div className={`${styles.hl} ${styles.hlinput}`}></div>
            <div className={styles.msgpeople}>
            <img src={Message} alt=''/>
            <div className={styles.hl}></div>
            <img src={Message} alt=''/>
            <div className={styles.hl}></div>
            <img src={Message} alt=''/>
            <div className={styles.hl}></div>
            <img src={Message} alt=''/>
            <div className={styles.hl}></div>
            <img src={Message} alt=''/>
            <div className={styles.hl}></div>
            <img src={Message} alt=''/>
            <div className={styles.hl}></div>
            <img src={Message} alt=''/>
            <div className={styles.hl}></div>
            <img src={Message} alt=''/>
            <div className={styles.hl}></div>
            </div>
        
        </div>
    );
}export default Messegeslist;