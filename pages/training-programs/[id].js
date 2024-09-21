import Head from 'next/head';
import PropTypes from 'prop-types';
import * as Templates from '@/components/Templates';
import * as Molecules from '@/components/Molecules';
import { getAllTopicIds, getTopicData } from '@/lib';

function TrainingPrograms(props) {
  const { topicData } = props;

  return (
    <>
      <Head>
        <title>{`${topicData.title}`}</title>
      </Head>
      <Templates.Layout
        bannerProps={{
          title: `${topicData.title}`,
          showCta: false,
          image: `topics/${topicData.image}`,
          // TODO: update this according to view in json
          backgroundPosition: topicData.backgroundPosition || 'top',
        }}
      >
        <Molecules.TrainingProgram topic={topicData} />
      </Templates.Layout>
    </>
  );
}

TrainingPrograms.propTypes = {
  topicData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    backgroundPosition: PropTypes.string,
  }).isRequired,
};

export default TrainingPrograms;

export async function getStaticPaths() {
  const paths = getAllTopicIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const topicData = getTopicData(params.id);
  return {
    props: {
      topicData,
    },
  };
}
