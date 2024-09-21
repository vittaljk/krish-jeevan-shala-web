import Head from 'next/head';
import * as Templates from '@/components/Templates';

export default function Activities() {
  return (
    <>
      <Head>
        <title>Activities</title>
      </Head>
      <Templates.Layout>
        <h1>Activities</h1>
      </Templates.Layout>
    </>
  );
}
