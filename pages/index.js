import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>isaacson</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          Hey, im Joey
        </h1>

        <h5 className={styles.description}>
          I am leading several design teams at Coinbase as a design manager, focused on helping people earn interest, send and spend their crypto. Its been a wild ride. Before that, I was leading the marketplace dynamics team at Uber Freight. Before that - man I was a snotty nosed designer working at a <a href="https://www.linkedin.com/in/joeisaacson/">few small start ups</a>.
        </h5>

        <p className={styles.description}>
          Leading my team of 7 across.
        </p>

      </main>

      <footer className={styles.footer}>
       designed and built by joey isaacson
      </footer>
    </div>
  );
}
