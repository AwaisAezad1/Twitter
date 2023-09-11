import Notificationpost from './Notificationpost'
import styles from './Notificationscenter.module.css'
function Notificationscenter(){
    return(
        <div className={styles.notificationmain}>
            <div className={styles.notificationbar}>
                <h1>Notifications</h1>
                <img width="24" height="24" src="https://img.icons8.com/1EA1F1/ios/50/settings--v1.png" alt="settings--v1"/>
            </div>
            <Notificationpost/>
        </div>
    )
}export default Notificationscenter