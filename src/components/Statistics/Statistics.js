import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

function Statistics({ title, stats }) {
  const randomColor = () => Math.floor(Math.random() * 256);
  const randonRGB = () =>
    `rgb(${randomColor()},${randomColor()},${randomColor()})`;

  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.list}>
        {stats.map(({ id, label, percentage }) => (
          <li
            style={{ backgroundColor: `${randonRGB()}` }}
            className={styles.item}
            key={id}
          >
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
