import { Component } from 'react';
import FeedBackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

import styles from './feed-back.module.css';

class FeedBack extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage(propName) {
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }
    const value = this.state[propName];
    const result = ((value / total) * 100).toFixed(0);
    return Number(result);
  }
  leaveFeedBack = name => {
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const goodPercent = this.countPositiveFeedbackPercentage('good');

    return (
      <div className={styles.wrapper}>
        <div>
          <Section title="Please leave feedback">
            <FeedBackOptions leaveFeedBack={this.leaveFeedBack} />
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
}

export default FeedBack;
