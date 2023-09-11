import './Selfprofile.module.css'
import Navbar from '../components/Navbar'
import Rightbar from '../components/Rightbar';
import Selfhome from '../components/Selfhome';
import Leftbar from '../components/leftbar'
function Selfprofile(){
return(
    <div className='Home'>
        <Leftbar/>
        <Navbar/>
        <Selfhome/>
        <Rightbar/>
    </div>
);
}
export default Selfprofile;