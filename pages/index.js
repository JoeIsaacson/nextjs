import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link'
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
 
  <div className={styles.parent}>
    
    <nav className={styles.navigation}>
        <ul className={styles.navigationUL}>
          <li className={styles.navigationLI}>
            <Link href="/">main</Link>
          </li>
        </ul>
    </nav>
    
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
          Leading several design teams at <a className={styles.textLink} href="https://www.coinbase.com/" target="blank">Coinbase</a> as a design manager, focused on helping people earn interest, send and spend their crypto. Its been a wild ride. 
        </p>
        <p>
          Before that, I was leading the marketplace dynamics team at <a className={styles.textLink} href='https://www.uberfreight.com/carrier/' target="blank">Uber Freight</a>. Before that - man I was a snotty nosed designer working at a <a className={styles.textLink} href="https://www.linkedin.com/in/joeisaacson/" target="blank">few small start ups</a>.
        </p>

        <div id="container">
          <div id="circle">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="300px" height="300px" viewBox="0 0 300 300" enable-background="new 0 0 300 300" xml:space="preserve">
              <defs>
                  <path id="circlePath" d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "/>
              </defs>
              <circle cx="150" cy="100" r="75" fill="none"/>
              <g>
                  <use xlink:href="#circlePath" fill="none"/>
                  <text fill="#000">
                      <textPath xlink:href="#circlePath">Text rotating around a circle path with SVG!</textPath>
                  </text>
              </g>
          </svg>
          </div>
        </div>

        
        <h3 className={styles.description}>
          <Link href="/coinbase">Coinbase → </Link>        
        </h3>
        <h3 className={styles.description}>
          <Link href="/uber">Uber Freight → </Link>
        </h3>

      </main>

      <footer className={styles.footer}>
        <p>designed and built by <a className={styles.textLink} href='https://github.com/JoeIsaacson' target="blank">joey isaacson</a></p>
      </footer>
    </div>
  </div>  
  );
}