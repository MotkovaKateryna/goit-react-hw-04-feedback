import styles from './notification.module.css';

const Notification = ({ message }) => {
  return <p className={styles.notificTitle}>{message}</p>;
};
export default Notification;
