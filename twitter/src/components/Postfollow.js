import styles from './Postfollow.module.css'
import people from '../images/people.png'
function Postfollow(){
    return(
            <div className={styles.follow}>
            <img width="27" height="30" src="https://img.icons8.com/2AA3EF/material-rounded/48/user.png" alt="user"/>
            <img width="30" height="30" src={people} alt=''/>
            <div className={styles.text}>
                <div className={styles.followed}><h1>Usman </h1><h2>followed you</h2></div>
               </div>
        </div>
    )
}export default Postfollow