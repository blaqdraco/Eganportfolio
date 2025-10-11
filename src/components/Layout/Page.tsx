import {NextPage} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {memo, PropsWithChildren} from 'react';

import {HomepageMeta} from '../../data/dataDef';

const Page: NextPage<PropsWithChildren<HomepageMeta>> = memo(({children, title, description}) => {
  const {asPath: pathname} = useRouter();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '');
  const canonical = siteUrl ? `${siteUrl}${pathname}` : pathname;
  const ogImage = siteUrl ? `${siteUrl}/resume-screenshot.jpg` : undefined;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />

        {/* several domains list the same content, make sure google knows we mean this one. */}
  {siteUrl && <link href={canonical} key="canonical" rel="canonical" />}

        <link href="/favicon.ico" rel="icon" sizes="any" />
        <link href="/icon.svg" rel="icon" type="image/svg+xml" />
        <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
        <link href="/site.webmanifest" rel="manifest" />

        {/* Open Graph : https://ogp.me/ */}
        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />
  {siteUrl && <meta content={canonical} property="og:url" />}
  {ogImage && <meta content={ogImage} property="og:image" />}
  {ogImage && <meta content="summary_large_image" name="twitter:card" />}
  {ogImage && <meta content={ogImage} name="twitter:image" />}
  {siteUrl && <meta content={siteUrl} property="og:site_name" />}

        {/* Twitter: https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup */}
        <meta content={title} name="twitter:title" />
        <meta content={description} name="twitter:description" />
      </Head>
      {children}
    </>
  );
});

Page.displayName = 'Page';
export default Page;
