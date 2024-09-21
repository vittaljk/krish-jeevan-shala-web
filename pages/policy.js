import Head from 'next/head';
import * as Templates from '@/components/Templates';

export default function Policy() {
  return (
    <>
      <Head>
        <title>Policy</title>
      </Head>
      <Templates.Layout>
        <h1>Policy</h1>
      </Templates.Layout>
    </>
  );
}
