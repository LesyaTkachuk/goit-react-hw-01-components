import React from "react";
import PropTypes from "prop-types";
import FriendsListItem from "./FriendsListItem";
import styles from "./FriendsList.module.css";

function FriendsList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map((friend) => (
        <FriendsListItem key={friend.id} friend={friend} />
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};

export default FriendsList;
