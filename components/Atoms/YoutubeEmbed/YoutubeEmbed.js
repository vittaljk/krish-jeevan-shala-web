import PropTypes from 'prop-types';
import styles from './YoutubeEmbed.module.scss';

function YoutubeEmbed({ width, height, embedId, title }) {
  return (
    <iframe
      className={styles.container}
      width={width}
      height={height}
      src={`https://www.youtube.com/embed/${embedId}`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  );
}

YoutubeEmbed.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  embedId: PropTypes.string.isRequired,
  title: PropTypes.string,
};

YoutubeEmbed.defaultProps = {
  width: '853',
  height: '480',
  title: 'Video Title',
};

export default YoutubeEmbed;
