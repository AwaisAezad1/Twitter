import styles from './Messeges.module.css'
import Leftbar from '../components/leftbar'
import Messegeslist from '../components/Messegeslist'
import Messegesdisplay from '../components/Messegesdisplay'
import Navbar from '../components/Navbar'
function Messages(){
return(
    <div className={styles}>
        <Leftbar/>
        <Navbar/>
        <Messegeslist/>
        <Messegesdisplay/>
    </div>
);
}
export default Messages;