import Head from 'next/head';
import * as Templates from '@/components/Templates';
import * as Atoms from '@/components/Atoms';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Templates.Layout
        bannerProps={{
          title: 'We Are Unique',
          description:
            'We are a unique organization engaged in conducting high quality, result oriented and practical Training Programs on soft skills and offering management consultancy services globally.',
        }}
      >
        <div className="p-5 md:p-20">
          <Atoms.YoutubeEmbed
            title="Teacher's day speech at Ambedkar Institute of technology...."
            embedId="8cPXpUjZODo"
          />
        </div>
      </Templates.Layout>
    </>
  );
}
