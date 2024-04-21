import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions'
import { Statistics } from './Statistics/Statistics'
import { Section } from './Section/Section'
import AppStyles from './style.module.css'
import { useState } from 'react'


export const App = () => {

  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const onLeaveFeedback = type => {
    setFeedback(prevFeedback => ({...prevFeedback, [type]: prevFeedback[type] + 1 }));
    };

  const { good, neutral, bad } = feedback;
  
  const countTotalFeedback = () => {
    return good + neutral + bad
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round(100 * good / (countTotalFeedback())) || 0
  };

  const stateNames = Object.keys(feedback);
  const totalFeedback = countTotalFeedback();
  const totalPercentage = countPositiveFeedbackPercentage();

  return (<div className={AppStyles.container}>
      <Section title='Please leave your feedback'>
        <FeedbackOptions options={stateNames} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title='Statistics'>
        {totalFeedback !== 0 ? 
        (<Statistics good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positiveFeedback={totalPercentage}/>) : (
          <div className={AppStyles.title}>There is no feedback</div>)}
      </Section>
      </div>
    )
  }

