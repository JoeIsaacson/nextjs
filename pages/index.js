import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link'
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>isaacson</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav>
        <ul>
          <li>
            <Link href="/">main</Link>
          </li>
          <li>
            <Link href="/uber">Uber</Link>
          </li>
          <li>
            <Link href="/coinbase">Coinbase</Link>
          </li>
        </ul>
      </nav>

      <main className={styles.main}>

        <h1 className={styles.title}>
          Hey, im Joey
        </h1>

        <h6 className={styles.description}>design manager. leader. 🌐 internet money guy.</h6>

        <p className={styles.description}>
          Leading several design teams at <a className={styles.textLink} href="https://www.coinbase.com/" target="blank">Coinbase</a> as a design manager, focused on helping people earn interest, send and spend their crypto. Its been a wild ride. 
        </p>
        <p>
          Before that, I was leading the marketplace dynamics team at <a className={styles.textLink} href='https://www.uberfreight.com/carrier/' target="blank">Uber Freight</a>. Before that - man I was a snotty nosed designer working at a <a className={styles.textLink} href="https://www.linkedin.com/in/joeisaacson/" target="blank">few small start ups</a>.
        </p>
        
        <h3 className={styles.description}>Coinbase → </h3>
        <h3 className={styles.description}>Uber Freight →</h3>

      </main>

      <footer className={styles.footer}>
        <p>designed and built by <a className={styles.textLink} href='https://github.com/JoeIsaacson' target="blank">joey isaacson</a></p>
      </footer>
    </div>
  );
}