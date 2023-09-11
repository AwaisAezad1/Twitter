import styles from './Bookmarkpost.module.css'
import Centerpost from './Centerpost'
function Bookmarkpost(){
    return(
        <div className={styles.Bookmarkpostmain}>
            <div className={styles.Bookmarkpostmainbar}>
                <h1>Bookmarks</h1>
                <img width="24" height="24" src="https://img.icons8.com/1EA1F1/ios/50/settings--v1.png" alt="settings--v1"/>
            </div>
            <Centerpost/>
            <Centerpost/>
            <Centerpost/>
            <Centerpost/>
        </div>
    )
}export default Bookmarkpost