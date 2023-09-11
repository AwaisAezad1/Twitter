import './Home.module.css'
import Navbar from '../components/Navbar'
import Centerhome from '../components/Centerhome';
import Rightbar from '../components/Rightbar';
import Leftbar from '../components/leftbar'
function Home(){
return(
    <div className='Home'>
        <Navbar/>
        <Leftbar/>
        <Centerhome/>
        <Rightbar/>
    </div>
);
}
export default Home;