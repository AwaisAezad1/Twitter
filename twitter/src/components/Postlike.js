import styles from './Postlike.module.css'
import people from '../images/people.png'
function Postlike(){
    return(
        <div className={styles.like}>
            <img width="30" height="30" src="https://img.icons8.com/D14747/ios-filled/50/like--v1.png" alt="like--v1"/>
            <img width="30" height="30" src={people} alt=''/>
            <div className={styles.text}>
                <div className={styles.liked}><h1>Local Taiwo </h1><h2>liked your Tweet</h2></div>
                <p>Just finished designing the interface of @AdobeXD with @figmadesign . I designed the all the icons myself and the components.

check out the figma file at https://figma.com/c/file/79882
8219911072435

Pls like and RT and share your thoughts https://pic.twitter.com/muDpkTnsBp</p>
            </div>
        </div>
    )
}export default Postlike