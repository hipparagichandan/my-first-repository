import React from "react";
import "./leftbar.css";
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';

const Leftbar = () => {
  return (
    <div className="leftbar">
      <div className="leftbarWrapper">
        <ul className="leftbarList">
          <li className="leftbarListsItem">
            <RssFeedIcon className="leftbarIcon" />
            <span className="leftbarListItemText">Feed</span>
          </li>
          <li className="leftbarListsItem">
            <ChatIcon className="leftbarIcon" />
            <span className="leftbarListItemText">Chats</span>
          </li>
          <li className="leftbarListsItem">
            <PlayCircleFilledIcon className="leftbarIcon" />
            <span className="leftbarListItemText">Videos</span>
          </li>
          <li className="leftbarListsItem">
            <GroupsIcon className="leftbarIcon" />
            <span className="leftbarListItemText">Group</span>
          </li>
          <li className="leftbarListsItem">
            <BookmarksIcon className="leftbarIcon" />
            <span className="leftbarListItemText">Bookmarks</span>
          </li>
          <li className="leftbarListsItem">
            <QuestionMarkIcon className="leftbarIcon" />
            <span className="leftbarListItemText">Questions</span>
          </li>
          <li className="leftbarListsItem">
            <WorkOutlineIcon className="leftbarIcon" />
            <span className="leftbarListItemText">Jobs</span>
          </li>
          <li className="leftbarListsItem">
            <EventIcon className="leftbarIcon" />
            <span className="leftbarListItemText">Events</span>
          </li>
          <li className="leftbarListsItem">
            <SchoolIcon className="leftbarIcon" />
            <span className="leftbarListItemText">Courses</span>
          </li>
        </ul>
        <button className="leftbarButton">Show more</button>
        <hr className="leftbarHr"/>
        <ul className="leftbarFriendsList">
          <li className="leftbarFriendsListItem">
            <img src="/assets/person/2.jpeg" className="leftbarFriendImg" alt=""/> 
            <span className="leftbarFriendname">Jane doe</span>
          </li>
          <li className="leftbarFriendsListItem">
            <img src="/assets/person/2.jpeg" className="leftbarFriendImg" alt=""/> 
            <span className="leftbarFriendname">Jane doe</span>
          </li>
          <li className="leftbarFriendsListItem">
            <img src="/assets/person/2.jpeg" className="leftbarFriendImg" alt=""/> 
            <span className="leftbarFriendname">Jane doe</span>
          </li>
          <li className="leftbarFriendsListItem">
            <img src="/assets/person/2.jpeg" className="leftbarFriendImg" alt=""/> 
            <span className="leftbarFriendname">Jane doe</span>
          </li>
          <li className="leftbarFriendsListItem">
            <img src="/assets/person/2.jpeg" className="leftbarFriendImg" alt=""/> 
            <span className="leftbarFriendname">Jane doe</span>
          </li>
          <li className="leftbarFriendsListItem">
            <img src="/assets/person/2.jpeg" className="leftbarFriendImg" alt=""/> 
            <span className="leftbarFriendname">Jane doe</span>
          </li>
          <li className="leftbarFriendsListItem">
            <img src="/assets/person/2.jpeg" className="leftbarFriendImg" alt=""/> 
            <span className="leftbarFriendname">Jane doe</span>
          </li>
          <li className="leftbarFriendsListItem">
            <img src="/assets/person/2.jpeg" className="leftbarFriendImg" alt=""/> 
            <span className="leftbarFriendname">Jane doe</span>
          </li>
          <li className="leftbarFriendsListItem">
            <img src="/assets/person/2.jpeg" className="leftbarFriendImg" alt=""/> 
            <span className="leftbarFriendname">Jane doe</span>
          </li>
          <li className="leftbarFriendsListItem">
            <img src="/assets/person/2.jpeg" className="leftbarFriendImg" alt=""/> 
            <span className="leftbarFriendname">Jane doe</span>
          </li>
          <li className="leftbarFriendsListItem">
            <img src="/assets/person/2.jpeg" className="leftbarFriendImg" alt=""/> 
            <span className="leftbarFriendname">Jane doe</span>
          </li>
          <li className="leftbarFriendsListItem">
            <img src="/assets/person/2.jpeg" className="leftbarFriendImg" alt=""/> 
            <span className="leftbarFriendname">Jane doe</span>
          </li>
        </ul>
      </div> 
    </div>
  )
  
};

export default Leftbar;
