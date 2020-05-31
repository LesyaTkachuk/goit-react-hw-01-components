import React from "react";
import PropTypes from "prop-types";
import styles from "./TransactionHistory.module.css";

function TransactionHistory({ items }) {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr className={styles.tableHead}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={styles.tableBody}>
        {items.map(({ id, type, amount, currency }, idx) => (
          <tr key={id} className={idx % 2 === 0 ? styles.even : styles.odd}>
            <td className={styles.type}>
              {type.slice(0, 1).toUpperCase() + type.slice(1).toLowerCase()}
            </td>
            <td className={styles.amount}>{amount}</td>
            <td className={styles.currency}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
