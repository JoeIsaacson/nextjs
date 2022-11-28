import styles from '../styles/Home.module.css';
import Link from 'next/link'

function Uber () {
    console.log("our little test is working");
};

function Coinbase() {
      
    return (
    
    <div className={styles.parent}>

      <nav className={styles.navigation}>
        <ul className={styles.navigationUL}>
          <li className={styles.navigationLI}>
            <Link href="/">← main</Link>
          </li>
        </ul>
      </nav>
   
      <div className={styles.container}>
        <main className={styles.main}>

          <h1 className={styles.title}>
            Coinbase
          </h1>
          
          <img className={styles.workshot} alt ="" src="/coin_context_01.svg"></img>
          <img className={styles.workshot} alt ="" src="/coin_context_02.svg"></img>
          <img className={styles.workshot} alt ="" src="/coin_context_03.svg"></img>
          <img className={styles.workshot} alt ="" src="/coin_context_04.svg"></img>
          <img className={styles.workshot} alt ="" src="/coin_context_05.svg"></img>
          <img className={styles.workshot} alt ="" src="/coin_context_06.svg"></img>

          <img className={styles.workshot} alt ="" src="/coin_p1_01.svg"></img>
          <img className={styles.workshot} alt ="" src="/coin_p1_02.svg"></img>
          <img className={styles.workshot} alt ="" src="/coin_p1_03.svg"></img>
          <img className={styles.workshot} alt ="" src="/coin_p1_04.svg"></img>
          <img className={styles.workshot} alt ="" src="/coin_p1_05.svg"></img>
          <img className={styles.workshot} alt ="" src="/coin_p1_06.svg"></img>
          <img className={styles.workshot} alt ="" src="/coin_p1_07.svg"></img>
          <img className={styles.workshot} alt ="" src="/coin_p1_08.png"></img>
          <img className={styles.workshot} alt ="" src="/coin_p1_09.svg"></img>

          <img className={styles.workshot} alt ="" src="/coin_p1_13.svg"></img>
          <img className={styles.workshot} alt ="" src="/coin_p1_14.svg"></img>
          <img className={styles.workshot} alt ="" src="/coin_p1_15.svg"></img>
          <img className={styles.workshot} alt ="" src="/coin_p1_16.svg"></img>
          <img className={styles.workshot} alt ="" src="/coin_p1_10.png"></img>
          <img className={styles.workshot} alt ="" src="/coin_p1_11.svg"></img>
          <img className={styles.workshot} alt ="" src="/coin_p1_17.svg"></img>
          <img className={styles.workshot} alt ="" src="/coin_p1_18.png"></img>
          <img className={styles.workshot} alt ="" src="/coin_p1_19.svg"></img>
          <img className={styles.workshot} alt ="" src="/coin_p1_20.png"></img>
          <img className={styles.workshot} alt ="" src="/coin_p1_21.svg"></img>
          <img className={styles.workshot} alt ="" src="/coin_p1_22.png"></img>
          <img className={styles.workshot} alt ="" src="/coin_p1_23.svg"></img>
          <img className={styles.workshot} alt ="" src="/coin_p1_24.svg"></img>

          <img className={styles.workshot} alt ="" src="/coin_p2_01.svg"></img>
          <img className={styles.workshot} alt ="" src="/coin_p2_02.svg"></img>
        </main>

        <footer className={styles.footer}>
          <p>designed and built by <a className={styles.textLink} href='https://github.com/JoeIsaacson' target="blank">joey isaacson</a></p>
        </footer>
      </div>
    </div>);
  };
  
  export default Coinbase;