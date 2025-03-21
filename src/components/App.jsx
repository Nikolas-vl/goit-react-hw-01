import Profile from './Profile/Profile';
import userData from '../userData.json';
import FriendList from './FriendList/FriendList';
import friends from '../friends.json';

const App = () => {
  return (
    <>
      <Profile username={userData.username} tag={userData.tag} location={userData.location} avatar={userData.avatar} stats={userData.stats} />
      <FriendList />
    </>
  );
};

export default App;
