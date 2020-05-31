import React from "react";
import PropTypes from "prop-types";
import FriendsListItem from "../FriendsListItem/FriendsListItem";
import styles from "./FriendsList.module.css";

function FriendsList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map((item) => (
        <FriendsListItem key={item.id} friend={item} />
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
