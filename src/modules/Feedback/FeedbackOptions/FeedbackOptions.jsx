import PropTypes from 'prop-types';
import styles from './feedback-options.module.css';

const FeedBackOptions = ({ leaveFeedBack }) => {
  return (
    <>
      <button onClick={() => leaveFeedBack('good')} className={styles.btn}>
        Good
      </button>
      <button onClick={() => leaveFeedBack('neutral')} className={styles.btn}>
        Neutral
      </button>
      <button onClick={() => leaveFeedBack('bad')} className={styles.btn}>
        Bad
      </button>
    </>
  );
};

export default FeedBackOptions;

FeedBackOptions.propTypes = {
  leaveFeedBack: PropTypes.func.isRequired,
};
