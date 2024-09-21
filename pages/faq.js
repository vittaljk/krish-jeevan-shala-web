import Head from 'next/head';
import * as Templates from '@/components/Templates';

export default function Faq() {
  return (
    <>
      <Head>
        <title>Faq</title>
      </Head>
      <Templates.Layout>
        <h1>Faq</h1>
      </Templates.Layout>
    </>
  );
}
