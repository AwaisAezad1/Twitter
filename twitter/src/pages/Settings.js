import styles from './Settings.module.css'
import Leftbar from '../components/leftbar'
import Rightbar from '../components/Rightbar';
import Settingscenter from '../components/Settingscenter';
import Navbar from '../components/Navbar'
function Settings(){
    return(
        <div className={styles}>
            <Leftbar/>
            <Navbar/>
            <Settingscenter/>
            <Rightbar/>
        </div>
    )
}export default Settings