import React from 'react';
import PropTypes from 'prop-types';
import styles from './TrainingProgram.module.scss';
import * as Atoms from '@/components/Atoms';

function TrainingProgram(props) {
  const { topic } = props;
  return (
    <div className={styles.trainingProgramContainer}>
      <div className={styles.leftSection}>
        <h2 className="mb-4 text-3xl text-black font-bold">Overview</h2>
        <p className="text-lg text-gray-500">{topic.overview}</p>
        <div className="mt-8">
          <h2 className="mb-4 text-3xl text-black font-bold">
            Course Contents:
          </h2>
          {topic.content.map
            ? topic.content.map((content) => (
                <div key={content} className={styles.contentItem}>
                  <p className="text-2xl text-primary">
                    &#8594; &nbsp; &nbsp;
                    <span className="text-base text-gray-500">{content}</span>
                  </p>
                </div>
              ))
            : null}
        </div>
      </div>
      <div className={styles.rightSection}>
        <Atoms.YoutubeEmbed
          title="Teacher's day speech at Ambedkar Institute of technology...."
          embedId={topic.video}
          width="100%"
          height="200px"
        />
      </div>
    </div>
  );
}

export default TrainingProgram;

TrainingProgram.propTypes = {
  topic: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(PropTypes.string).isRequired,
    video: PropTypes.string.isRequired,
  }).isRequired,
};
