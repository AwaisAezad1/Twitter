import './Userprofile.module.css'
import Navbar from '../components/Navbar'
import Rightbar from '../components/Rightbar';
import Userhome from '../components/Userhome';
import Leftbar from '../components/leftbar'
function Userprofile(){
return(
    <div className='Home'>
        <Leftbar/>
        <Navbar/>
        <Userhome/>
        <Rightbar/>
    </div>
);
}
export default Userprofile;