import { useState, useEffect } from 'react';

import { Statistics } from './Statistics/Statistics';
import { FeedBackOption } from 'components/FeedBackOptions/FeedBackOptions';
import { NotificationMessage } from './NotificationMessage/NotificationMessage';

function FeedBack(params) {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positiveFeedback, setPositiveFeedback] = useState(0);

  const incrementGood = () => {
    setGood(prevState => prevState + 1);
  };

  const incrementNeutral = () => {
    setNeutral(prevSate => prevSate + 1);
  };

  const incrementBad = () => {
    setBad(prevState => prevState + 1);
  };

  useEffect(() => {
    const newTotal = bad + neutral + good;
    setTotal(newTotal);
    const positivePercentage =
      newTotal > 0 ? Math.round((good / newTotal) * 100) : 0;
    setPositiveFeedback(positivePercentage);
  }, [good, neutral, bad]);

  return (
    <div>
      <div>
        <h1>Please leave feedback</h1>
        <FeedBackOption
          incrementGood={incrementGood}
          incrementNeutral={incrementNeutral}
          incrementBad={incrementBad}
        />
      </div>
      <div>
        <h1>Statistics</h1>
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positiveFeedback={positiveFeedback}
          />
        ) : (
          <NotificationMessage />
        )}
      </div>
    </div>
  );
}

export { FeedBack };
