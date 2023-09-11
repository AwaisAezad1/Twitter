import styles from './Messeges.module.css'
import Leftbar from '../components/leftbar'
import Rightbar from '../components/Rightbar';
import Notificationscenter from '../components/Notificationscenter';
import Navbar from '../components/Navbar'
function Notifications(){
return(
    <div className={styles}>
        <Leftbar/>
        <Notificationscenter/>
        <Navbar/>
        <Rightbar/>
    </div>
);
}
export default Notifications;