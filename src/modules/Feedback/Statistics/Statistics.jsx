import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, goodPercent }) => {
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {goodPercent} %</p>
    </>
  );
};
export default Statistics;
Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  goodPercent: PropTypes.number.isRequired,
};
