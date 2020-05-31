import React from "react";
import Profile from "./Profile/Profile";
import user from "../json/user.json";
import Statistics from "./Statistics/Statistics";
import statisticalData from "../json/statistical-data.json";
import FriendList from "./FriendsList/FriendsList";
import friends from "../json/friends.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from "../json/transactions.json";

function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
