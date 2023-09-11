import styles from './Selfhome.module.css'
import backbig from '../images/backbig.png';
import profile1 from '../images/profile-1.png';
import { NavLink } from 'react-router-dom';
import Centerelonpost from './Centerelonpost'
function Selfhome(){
    return(
        <div className={styles.Selfhome}>
          <div className={styles.main}>
            <img className={styles.back} src={backbig} alt='' />
            <NavLink to={""}><img className={styles.profile} width="100" height="100" src={profile1} alt='' /></NavLink>
            <div className={styles.items}>
            <div className={styles.leftitems}>
            <h2>Elon Musk</h2>
            <p>@ElonMusk</p>
            <h2>CEO at Tesla, SpaceX & X.</h2>
            <div className={styles.follow_following}>
              <div className={styles.following}>
                <h1>200</h1> <h3>Following</h3>
              </div>
              <div className={styles.followers}>
                <h1>154.2M</h1> <h3>Followers</h3>
              </div>
            </div>
            </div>
            <div className={styles.vl}></div>
            <div className={styles.rightitems}>
            <h2><img width="23" height="23" src="https://img.icons8.com/687684/external-kiranshastry-lineal-kiranshastry/64/external-calendar-business-kiranshastry-lineal-kiranshastry.png" alt="external-calendar-business-kiranshastry-lineal-kiranshastry"/>Joined Spetember 2011</h2>
            <a href='https://www.tesla.com/'><img width="18" height="18" src="https://img.icons8.com/687684/sf-regular-filled/48/link.png" alt="link"/>Tesla.com</a>
            <NavLink className={styles.nav_link}>Edit profile</NavLink>
            </div>
            </div>
        </div>
        <div className={styles.links}>
          <NavLink className={styles.navlinks}>Posts</NavLink>
          <NavLink className={styles.navlinks}>Replies</NavLink>
          <NavLink className={styles.navlinks}>Highlights</NavLink>
          <NavLink className={styles.navlinks}>Media</NavLink>
          <NavLink className={styles.navlinks}>Likes</NavLink>
        </div>
        <Centerelonpost/>
        <Centerelonpost/>
        <Centerelonpost/>
        </div>
    );
}export default Selfhome;