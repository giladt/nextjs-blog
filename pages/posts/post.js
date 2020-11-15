import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function Post(){
  return (
    <Layout>
      <Head>
        <title>Post</title>
      </Head>
      <h1>Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}