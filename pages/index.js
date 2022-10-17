import Head from 'next/head'
import Landing from './home'
export default function Home() {
  return (
    <>
      <Head>
        <title>Room for rent</title>
        <meta name="description" content="room for rent." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <Landing/>
    </>
  )
}
