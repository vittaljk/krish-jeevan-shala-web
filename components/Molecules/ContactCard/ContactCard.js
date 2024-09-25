import PropTypes from 'prop-types';
import styles from './ContactCard.module.scss';

function ContactCard(props) {
  const { icon, title, children } = props;

  return (
    <div className={styles.container}>
      <div className={styles.icon}>{icon}</div>
      {title}
      {children}
    </div>
  );
}

export default ContactCard;

ContactCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
