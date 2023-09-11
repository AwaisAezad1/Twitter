import styles from './Viewpost.module.css'
import pic1 from '../images/pic1.png'
import pic2 from '../images/pic2.png'
import pic3 from '../images/pic3.png'
import pic4 from '../images/pic4.png'

function Viewpost(){
    return(
        <div className={styles.view}>
            <img src={pic1} alt=''/>
            <img src={pic2} alt=''/>
            <img src={pic3} alt=''/>
            <img src={pic4} alt=''/>
            <img src={pic2} alt=''/>
            <img src={pic1} alt=''/>
        </div>
    );
}export default Viewpost;