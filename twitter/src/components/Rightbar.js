import styles from './Rightbar.module.css'
import people from '../images/people.png'
import { NavLink } from 'react-router-dom'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{faEllipsis} from '@fortawesome/free-solid-svg-icons'
function Rightbar(){
    return(
        <div className={styles.right}>
           <div className={styles.box1}>
           <h1>People you may know</h1>
            <div className={styles.people}>
                <img src={people} alt=''/>
                <div className={styles.peopletext}>
                    <h1>Milli Smith</h1>
                    <p>@Milli1243</p>
                </div>
                <button>Follow</button>
            </div>
            <div className={styles.people}>
                <img src={people} alt=''/>
                <div className={styles.peopletext}>
                    <h1>Milli Smith</h1>
                    <p>@Milli1243</p>
                </div>
                <button>Follow</button>
            </div>
            <div className={styles.people}>
                <img src={people} alt=''/>
                <div className={styles.peopletext}>
                    <h1>Milli Smith</h1>
                    <p>@Milli1243</p>
                </div>
                <button>Follow</button>
            </div>
            <NavLink className={styles.nav_link} to={""}><h1>Show More</h1></NavLink>
           </div>
           <div className={styles.box2}>
            <div className={styles.top}>
                <h1>Trends for you</h1>
                <img width="28" height="28" src="https://img.icons8.com/ffffff/ios/50/settings--v1.png" alt="settings--v1"/>
            </div>
            <p>Trending in United States</p>
            <div className={styles.tweets}>
                <div className={styles.tweettop}>
                    <h1>#ElonMusk</h1>
                    <FontAwesomeIcon className={styles.icon} icon={faEllipsis} style={{color:'#888888'}} />
                </div>
                <p>83.6 k Tweets</p>
            </div>
            <div className={styles.tweets}>
                <div className={styles.tweettop}>
                    <h1>#Startups</h1>
                    <FontAwesomeIcon className={styles.icon} icon={faEllipsis} style={{color:'#888888'}} />
                </div>
                <p>12 k Tweets</p>
            </div>
            
           </div>
        </div>
    );
}export default Rightbar;