import Head from 'next/head';
import PropTypes from 'prop-types';
import * as Templates from '@/components/Templates';
import { getAllFaqs } from '@/lib';
import * as Organisms from '@/components/Organisms';

export default function Faq(props) {
  const { faqs } = props;

  return (
    <>
      <Head>
        <title>Faq</title>
      </Head>
      <Templates.Layout
        bannerProps={{
          title: 'FAQ',
          showCta: false,
        }}
      >
        <div className="md:container mx-auto p-4 md:px-4 py-10 md:py-16">
          <Organisms.Faq faqs={faqs} />
        </div>
      </Templates.Layout>
    </>
  );
}

export async function getStaticProps() {
  const faqs = getAllFaqs();

  return {
    props: {
      faqs,
    },
  };
}

Faq.propTypes = {
  faqs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ).isRequired,
};
