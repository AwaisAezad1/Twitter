import styles from './Notificationpost.module.css'
import Postlike from './Postlike'
import Postfollow from './Postfollow'
function Notificationpost(){
    return(
        <div className={styles}>
            <Postlike/>
            <Postfollow/>
            <Postfollow/>
            <Postfollow/>
            <Postlike/>
        </div>
    )
}export default Notificationpost