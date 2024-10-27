import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

function FriendList({friends}) {
  return (
<div className={css.container}>
  <ul className={css.friendList}>
        {friends.map(friend => (
            <li key={friend.id}  className={css.friendListItem}><FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}/></li>
	  ))}
  </ul>
</div>
  );
};
export default FriendList;