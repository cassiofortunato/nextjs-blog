import Layout from '../../components/layout';
import Head from 'next/head';
import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
        <Head>
        <title>{postData.title}</title>
      </Head>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
}