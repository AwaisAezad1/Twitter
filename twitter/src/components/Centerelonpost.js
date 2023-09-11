import styles from './Centerelonpost.module.css'
import profile1 from '../images/profile-1.png'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{faEllipsis} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

function Centerpost(){
    return(
        <div className={styles.center}>
            <div className={styles.posttop}>
                <div className={styles.text}>
                    <NavLink to={""}><img width='60' height='60' src={profile1} alt=''/></NavLink>
                    <h1>
                    Elon Musk
                        <div>
                        <p>13 min</p>
                        </div>
                    </h1>
                    <p className={styles.tag}>@ElonMusk</p>
                    
                </div>
                <FontAwesomeIcon icon={faEllipsis} style={{color: "#8f8f8f",}} />
            </div>
            <div className={styles.postmid}>
                <p>The Tucker-Trump Interview has done over 100M views in LESS THAN 8 hours…</p>
                <p>We’re is just getting started!</p>
            </div>
            <div className={styles.postdown}>
                <button><img width="14" height="12" src="https://img.icons8.com/ff0000/ios/50/like--v1.png" alt="like--v1"/>59</button>
                <button><img width="18" height="12" src="https://img.icons8.com/24ff00/external-bearicons-glyph-bearicons/64/external-Repost-social-media-bearicons-glyph-bearicons.png" alt="external-Repost-social-media-bearicons-glyph-bearicons"/>48</button>
                <button><img width="16" height="14" src="https://img.icons8.com/55acee/ios/50/speech-bubble-with-dots--v1.png" alt="speech-bubble-with-dots--v1"/>67</button>
                <button><img width="12" height="15" src="https://img.icons8.com/ffffff/fluency-systems-regular/48/upload--v1.png" alt="upload--v1"/>Share</button>
            </div>
        </div>
    );
}
export default Centerpost;