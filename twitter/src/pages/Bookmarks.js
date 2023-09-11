import styles from './Bookmarks.module.css'
import Leftbar from '../components/leftbar'
import Rightbar from '../components/Rightbar';
import Bookmarkpost from '../components/Bookmarkpost';
import Navbar from '../components/Navbar'
function Bookmarks(){
    return(
        <div className={styles}>
            <Navbar/>
        <Leftbar/>
        <Bookmarkpost/>
        <Rightbar/>
        </div>
    )

}export default Bookmarks