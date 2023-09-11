import styles from './Explorepost.module.css'
import { NavLink } from 'react-router-dom';
function Explorepost(){
    return(
        <div className={styles.Explorepostmain}>
            <div className={styles.Explorepostmainbar}>
                <h1>Explore</h1>
                <img width="24" height="24" src="https://img.icons8.com/1EA1F1/ios/50/settings--v1.png" alt="settings--v1"/>
            </div>
            <div className={styles.links}>
                <NavLink className={styles.navlinks}>For You</NavLink>
                <NavLink className={styles.navlinks}>Trending</NavLink>
                <NavLink className={styles.navlinks}>Entertainment</NavLink>
                <NavLink className={styles.navlinks}>Sports</NavLink>
                <NavLink className={styles.navlinks}>News</NavLink>
            </div>
            <div className={styles.trendings}>
                <h1>#Pakistan</h1>
                <p>206k posts</p>
            </div>
            <div className={styles.trendings}>
                <h1>#Imran Khan <img width="20" height="15" src="https://img.icons8.com/emoji/48/pakistan-emoji.png" alt="pakistan-emoji"/></h1>
                <p>101k posts</p>
            </div>
            <div className={styles.trendings}>
                <div className={styles.Nowtrending}>
                    <div className={styles.text}>
                        <h1>Netflix</h1>
                        <p>101k posts</p>
                    </div>
                    <p>Trending in Pakistan</p>
                </div>
            </div>
            <div className={styles.trendings}>
                <h1>Porsche GT</h1>
                <p>498k posts</p>
            </div>
            <div className={styles.trendings}>
                <h1>Porsche GT</h1>
                <p>498k posts</p>
            </div>
            <div className={styles.trendings}>
                <h1>Porsche GT</h1>
                <p>498k posts</p>
            </div>
        </div>
    )
}export default Explorepost