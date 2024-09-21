import Link from 'next/link';
import PropTypes from 'prop-types';
import * as Molecules from '@/components/Molecules';
import styles from './TrainingPrograms.module.scss';

function TrainingPrograms(props) {
  const { topics } = props;

  return (
    <div className={styles.container}>
      {topics.map((topic) => (
        // TODO: fix this somehow
        // <Link key={topic.id} href={`/training-programs/${topic.id}`} passHref>
        <Molecules.InfoCard
          key={topic.id}
          title={topic.title}
          description={topic.description}
          image={topic.image}
          cta={{
            link: `/training-programs/${topic.id}`,
            text: 'Learn More',
          }}
        />
        // </Link>
      ))}
    </div>
  );
}

export default TrainingPrograms;

TrainingPrograms.propTypes = {
  topics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};
