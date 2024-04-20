import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions'
import { Statistics } from './Statistics/Statistics'
import { Section } from './Section/Section'
import AppStyles from './style.module.css'


const { Component } = require("react")

export class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

  onLeaveFeedback = state => {
    this.setState(prevState => ({ [state]: prevState[state] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round(100 * this.state.good / (this.countTotalFeedback())) || 0
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    return (<div className={AppStyles.container}>
      <Section title='Please leave your feedback'>
        <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback} />
      </Section>
      <Section title='Statistics'>
        {this.countTotalFeedback() !== 0 ? 
        (<Statistics good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positiveFeedback={this.countPositiveFeedbackPercentage()}/>) : (
          <div className={AppStyles.title}>There is no feedback</div>)}
      </Section>
      </div>
    )
  }
}
