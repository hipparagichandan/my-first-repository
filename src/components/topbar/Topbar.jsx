import './topbar.css'
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Topbar = () => {
  return (
    <div className='topbarContainer'>
        <div className="topbarLeft">
          <div className="logo">ChandanSocial</div>
        </div>
        <div className="topbarCenter">
          <div className="searchBar">
            <SearchIcon className='searchIcon' />
            <input className='searchInput'
              placeholder='Search for friend, post or video'
            />
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">Home</span>
            <span className="topbarLink">Timeline</span>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <PersonIcon />
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <MessageIcon />
              <span className="topbarIconBadge">3</span>
            </div>
            <div className="topbarIconItem">
              <NotificationsIcon />
              <span className="topbarIconBadge">1</span>
            </div>
          </div>
          <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
        </div>
    </div>
  )
}

export default Topbar