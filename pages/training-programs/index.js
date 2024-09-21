import Head from 'next/head';
import PropTypes from 'prop-types';
import * as Templates from '@/components/Templates';
import * as Organisms from '@/components/Organisms';
import { getAllTopics } from '@/lib';

export default function TrainingPrograms(props) {
  const { topics } = props;

  return (
    <>
      <Head>
        <title>Training Programmes</title>
      </Head>
      <Templates.Layout
        bannerProps={{
          title: 'Training Programmes',
          showCta: false,
          image: 'banners/training-programmes.jpg',
          backgroundPosition: 'top',
        }}
      >
        <div className="md:container mx-auto p-4 md:px-4 py-10 md:py-16">
          <Organisms.TrainingPrograms topics={topics} />
        </div>
      </Templates.Layout>
    </>
  );
}

export async function getStaticProps() {
  const topics = getAllTopics();

  return {
    props: {
      topics,
    },
  };
}

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
