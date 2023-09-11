import styles from './Centerhome.module.css'
import Centerpost from './Centerpost'
import profile1 from '../images/profile-1.png'
import emoji from '../images/emoji.png'
import GIFs from '../images/addGifs.png'
import picture from '../images/addPicture.png'
import history from '../images/history.png'
import stats from '../images/stats.png'
import { NavLink } from 'react-router-dom'

function Centerhome(){
    return(
        <div className={styles.main}>
            <div className={styles.toppost}>
                <div className={styles.topsection}>
                    <NavLink to={"/home"}><img className={styles.profile} width="60" height="60" src={profile1} alt=''/></NavLink>
                    <input type='text' placeholder="What's happening?"/><img className={styles.emoji} src={emoji} alt=''/>
                </div>
                <div className={styles.btn}>
                    <button><img src={picture} alt=''/>Photo</button>
                    <button><img src={GIFs} alt=''/>GIF</button>
                    <button><img src={history} alt=''/>Schedule</button>
                    <button><img src={stats} alt=''/>Poll</button>
                </div>
            </div>

            <Centerpost/>
            <Centerpost/>
            <Centerpost/>
            <Centerpost/>
        </div>
    );
}export default Centerhome;