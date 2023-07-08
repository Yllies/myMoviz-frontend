import "../styles/globals.css";
import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>myMoviz</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
