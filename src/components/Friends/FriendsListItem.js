import React from "react";
import styles from "./FriendsListItem.module.css";

function FriendsListItem({ friend }) {
  const { isOnline, avatar, name } = friend;
  return (
    <li className={styles.item}>
      <span className={isOnline ? styles.green : styles.red}>{isOnline}</span>
      <img className={styles.avatar} src={avatar} alt="" width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

FriendsListItem.defaultProps = {
  avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
  name: "Anonim",
};

export default FriendsListItem;
