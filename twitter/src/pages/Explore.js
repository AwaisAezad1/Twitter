import styles from './Explore.module.css'
import Leftbar from '../components/leftbar'
import Rightbar from '../components/Rightbar';
import Explorepost from '../components/Explorepost';
import Navbar from '../components/Navbar'
function Explore(){
    return(
        <div className={styles}>
             <Leftbar/>
             <Navbar/>
            <Explorepost/>
            <Rightbar/>
        </div>
    )
}export default Explore