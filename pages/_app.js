import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  console.log("is this even working");
  return <Component {...pageProps} />;
}

export default MyApp;
