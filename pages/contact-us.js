import Head from 'next/head';
import * as Templates from '@/components/Templates';

export default function ContactUs() {
  return (
    <>
      <Head>
        <title>ContactUs</title>
      </Head>
      <Templates.Layout>
        <h1>ContactUs</h1>
      </Templates.Layout>
    </>
  );
}
