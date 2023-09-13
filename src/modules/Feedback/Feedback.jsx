import { useState } from 'react';
import FeedBackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

import styles from './feed-back.module.css';

const FeedBack = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const leaveFeedBack = name => {
    setFeedback(prevState => {
       const value = prevState[name];
       return {...prevState,[name]:value + 1}
  })
  }
  const { good, neutral, bad } = feedback;
  const total =  good + neutral + bad;
  const countPositiveFeedbackPercentage = (propName) => {
    if (!total) {
      return 0;
    }
    const value = feedback[propName];
    const result = ((value / total) * 100).toFixed(0);
    return Number(result);
  }
  const goodPercent = countPositiveFeedbackPercentage('good');
  return (
    <div className={styles.wrapper}>
      <div>
        <Section title="Please leave feedback">
          <FeedBackOptions leaveFeedBack={leaveFeedBack} />
        </Section>
        {total !== 0 && (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              goodPercent={goodPercent}
            />
          </Section>
        )}
        {total === 0 && (
          <Notification message="There is no feedback"></Notification>
        )}
      </div>
    </div>
  );
}
export default FeedBack;
