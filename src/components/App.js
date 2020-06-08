import React from "react";
import Profile from "./Profile/Profile";
import user from "../db/user.json";
import Statistics from "./Statistics/Statistics";
import statisticalData from "../db/statistical-data.json";
import FriendList from "./Friends/FriendsList";
import friends from "../db/friends.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from "../db/transactions.json";

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
