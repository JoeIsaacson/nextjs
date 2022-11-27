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

        <h6 className={styles.description}>design manager. leader. 🌐 internet money guy.</h6>

        <p className={styles.description}>
        Leading several design teams at Coinbase as a design manager, focused on helping people earn interest, send and spend their crypto. Its been a wild ride. Before that, I was leading the marketplace dynamics team at Uber Freight. Before that - man I was a snotty nosed designer working at a <a className={styles.textLink} href="https://www.linkedin.com/in/joeisaacson/" target="blank">few small start ups</a>.
        </p>
        
        <img alt ="" src="/context_1.svg"></img>
        <img alt ="" src="/context_2.svg"></img>
        <img alt ="" src="/context_3.svg"></img>
        <img alt ="" src="/context_4.svg"></img>
        <img alt ="" src="/context_5.svg"></img>
        <img alt ="" src="/context_6.svg"></img>
        <img alt ="" src="/context_7.svg"></img>
        <img alt ="" src="/context_8.svg"></img>
        <img alt ="" src="/context_9.svg"></img>

        <img alt ="" src="/p1_1.svg"></img>
        <img alt ="" src="/p2_2.svg"></img>
        <img alt ="" src="/p1_3.svg"></img>
        <img alt ="" src="/p1_4.svg"></img>
        <img alt ="" src="/p1_5.svg"></img>
        <img alt ="" src="/p1_6.svg"></img>
        <img alt ="" src="/p1_7.svg"></img>
        <img alt ="" src="/p1_8.svg"></img>
        <img alt ="" src="/p1_9.svg"></img>
        <img alt ="" src="/p1_10.svg"></img>
        <img alt ="" src="/p1_11.svg"></img>
        <img alt ="" src="/p1_12.svg"></img>

        <h3 className={styles.description}>Coinbase → </h3>
        <h3 className={styles.description}>Uber Freight →</h3>

      </main>

      <footer className={styles.footer}>
       designed and built by <a className={styles.textLink} href='https://github.com/JoeIsaacson' target="blank">joey isaacson</a>
      </footer>
    </div>
  );
}
