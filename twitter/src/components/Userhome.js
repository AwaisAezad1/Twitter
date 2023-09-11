import styles from './Userhome.module.css'
import backbig from '../images/backbig.png';
import profile2 from '../images/profile-2.png';
import { NavLink } from 'react-router-dom';
import Centerpost from './Centerpost'
function Userhome(){
    return(
        <div className={styles.Userhome}>
          <div className={styles.main}>
            <img className={styles.back} src={backbig} alt='' />
            <NavLink to={""}><img className={styles.profile} width="100" height="100" src={profile2} alt='' /></NavLink>
            <div className={styles.items}>
            <div className={styles.leftitems}>
            <h2>Mark Zuckerburg</h2>
            <p>@Finkd</p>
            <h2>CEO at Facebook<img width="20" height="20" src="https://img.icons8.com/color/48/lizard.png" alt="lizard"/></h2>
            <div className={styles.follow_following}>
              <div className={styles.following}>
                <h1>87</h1> <h3>Following</h3>
              </div>
              <div className={styles.followers}>
                <h1>5.2M</h1> <h3>Followers</h3>
              </div>
            </div>
            </div>
            <div className={styles.vl}></div>
            <div className={styles.rightitems}>
            <h2><img width="23" height="23" src="https://img.icons8.com/687684/external-kiranshastry-lineal-kiranshastry/64/external-calendar-business-kiranshastry-lineal-kiranshastry.png" alt="external-calendar-business-kiranshastry-lineal-kiranshastry"/>Joined Spetember 2011</h2>
            <a href='https://www.facebook.com/'><img width="18" height="18" src="https://img.icons8.com/687684/sf-regular-filled/48/link.png" alt="link"/>Facebook.com</a>
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
        <Centerpost/>
        <Centerpost/>
        <Centerpost/>
        </div>
    );
}export default Userhome;