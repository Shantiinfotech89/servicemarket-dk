// Import scss
import './Profile.scss';
// Import Pages
import Header from '../../../Layout/Header/Header'
import Sidebar from '../../../Layout/Sidebar/Sidebar'

function Profile(props) {
    return(
        <div>
            <Header />
            <Sidebar />
        </div>
    )
}

export default Profile