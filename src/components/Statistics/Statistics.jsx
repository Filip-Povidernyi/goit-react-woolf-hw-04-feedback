import React from "react"
import listStyles from './style.module.css'

export const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
    return (
        <ul className={listStyles.stat}>
          <li className={listStyles.statItem}>
            Good:{good}
          </li>
          <li className={listStyles.statItem}>
            Neutral:{neutral}
          </li>
          <li className={listStyles.statItem}>
            Bad:{bad}
          </li>
          <li className={listStyles.statItem}>
            Total:{total}
          </li>
          <li className={listStyles.statItem}>
            Positive feedback: {positiveFeedback}%
          </li>
        </ul>
    )
}
