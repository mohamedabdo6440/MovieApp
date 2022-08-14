
import { Link } from 'react-router-dom';

function Sidebar() {

    return (

        <div className="icon-bar">

            <Link to="/nowplay" className="">Now playing</Link>
            <Link to="/toprate" className="">Top Rated</Link>
            <Link to="/upcoming" className="">Up Coming</Link>
            <Link to="/popular" className="">Popular</Link>

        </div>
    );
}
export default Sidebar;