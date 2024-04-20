import React from "react";
import feedbackStyles from './style.module.css'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={feedbackStyles.wrap}>
      {options.map(option => (
          <button
            className={feedbackStyles.btn}
            key={option}
            type="button"
            onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
