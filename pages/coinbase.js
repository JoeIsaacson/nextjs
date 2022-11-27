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
          
          <img alt ="" src="/context_1.svg"></img>
        </main>

        <footer className={styles.footer}>
          <p>designed and built by <a className={styles.textLink} href='https://github.com/JoeIsaacson' target="blank">joey isaacson</a></p>
        </footer>
      </div>
    </div>);
  };
  
  export default Coinbase;