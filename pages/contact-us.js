import Head from 'next/head';
import * as Templates from '@/components/Templates';
import * as Organisms from '@/components/Organisms';

export default function ContactUs() {
  return (
    <>
      <Head>
        <title>ContactUs</title>
      </Head>
      <Templates.Layout
        bannerProps={{
          title: 'Contact Us',
          showCta: false,
        }}
      >
        <div className="md:container mx-auto p-4 md:px-4 py-10 md:py-16">
          <Organisms.ContactUs />
        </div>
      </Templates.Layout>
    </>
  );
}
