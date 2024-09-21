import Head from 'next/head';
import * as Templates from '@/components/Templates';

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About us</title>
      </Head>
      <Templates.Layout>
        <h1>About us</h1>
      </Templates.Layout>
    </>
  );
}
