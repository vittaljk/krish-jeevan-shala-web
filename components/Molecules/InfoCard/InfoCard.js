import Link from 'next/link';
import PropTypes from 'prop-types';
import styles from './InfoCard.module.scss';

function InfoCard(props) {
  const { image, title, description, cta } = props;

  return (
    <div className={styles.card}>
      {image && (
        <img
          src={`/images/topics/${image}`}
          alt={title}
          className={styles.image}
        />
      )}
      <div className={styles.content}>
        <Link href={cta.link}>
          <h2 className={styles.title}>{title}</h2>
        </Link>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.cta}>
        {cta && <Link href={cta.link}>{cta.text}</Link>}
      </div>
    </div>
  );
}

InfoCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cta: PropTypes.shape({
    link: PropTypes.string,
    text: PropTypes.string,
  }),
};

InfoCard.defaultProps = {
  image: null,
  cta: {
    link: '/',
    text: 'Learn More',
  },
};

export default InfoCard;
