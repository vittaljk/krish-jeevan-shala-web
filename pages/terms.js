import Head from 'next/head';
import * as Templates from '@/components/Templates';

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms</title>
      </Head>
      <Templates.Layout>
        <h1>Terms</h1>
      </Templates.Layout>
    </>
  );
}
