import s from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <div>
        <img src={avatar} alt='Avatar' width='48' />
        <p>{name}</p>
        <p>{}</p>
      </div>
    </div>
  );
};

export default FriendListItem;
