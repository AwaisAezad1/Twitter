import styles from './Messegesdisplay.module.css'
import people from '../images/people.png'
import send from '../images/sendmsg.png'
import gif from '../images/addGifs.png'
import emoji from '../images/emoji.png'

function Messegesdisplay(){
    return(
        <div className={styles.displaymain}>
            <div className={styles.displaybox1}>
                <div className={styles.top}>
                    <img width='48' height='48' src={people} alt=''/>
                    <div className={styles.peopletext}>
                        <h1>Milli Smith</h1>
                        <p>@Milli1243</p>
                    </div>
                    <img width="22" height="22" src="https://img.icons8.com/1EA1F1/ios/50/info--v1.png" alt="info--v1"/>
                </div>

                <div className={styles.hl}></div>


                <div className={styles.msg1}>
                <img width='48' height='48' src={people} alt=''/>
                    <div className={styles.msg1text}>
                        <h2>Love the idea of a better twitter</h2>
                        <p>Tue 12:12 AM</p>
                    </div>
                </div>


                <div className={styles.msg2}>
                <h2>I have actually done some research on
                the current ux and made changes that
                are cogent to the users</h2>
                <p>Tue 7:08 AM<img width="24" height="24" src="https://img.icons8.com/1EA1F1/material/24/checkmark--v1.png" alt="checkmark--v1"/></p>
                </div>


                <div className={styles.msg1}>
                    <div className={styles.msg1text}>
                        <h1>Okay</h1>
                    </div>
                </div>

                <div className={styles.msg1}>
                <img width='48' height='48' src={people} alt=''/>
                    <div className={styles.msg1text}>
                        <h3>I will love to share with my team</h3>
                        <p>Tue 7:09 AM</p>
                    </div>
                </div>

                
                <div className={styles.msg2}>
                <h2>Perfect, we shouldn’t come across any
issues.</h2>
                </div>
                
                <div className={styles.msg2}>
                <h3>Not that I’m aware of so let’s see how that
goes for us.</h3>
                <p>Tue 7:10 AM<img width="24" height="24" src="https://img.icons8.com/1EA1F1/material/24/checkmark--v1.png" alt="checkmark--v1"/></p>
                </div>

            </div>
            <div className={styles.displaybox2}>
            <img width="31" height="31" src="https://img.icons8.com/1EA1F1/small/16/image.png" alt=""/>
            <img width="30" height="30" src={gif} alt="gif--v1"/>
            <input type='text' placeholder='Start your message'/>
            <img className={styles.emoji} src={emoji} alt=''/>
            <img  src={send} alt='send'/>
            </div>
        </div>
    );
}export default Messegesdisplay;