import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { DescriptionPomodoro } from '../components/DescriptionPomodoro.js'
import { MyTimer } from '../components/MyTimer';
import { Notifyer } from '../services/notifyer';
import { useEffect } from 'react';
import ReactGA from "react-ga4";

ReactGA.initialize("G-JZGVS1E997");
export default function Home() {

  useEffect(() => {
    ReactGA.send("pageview");
    Notifyer.init();
  })

  const time = new Date();
  time.setSeconds(time.getSeconds() + 25 * 60); // 25 minutes timer

  return (
    <div className={styles.app}>
      <Head>
        <title>Técnica Pomodoro</title>
        <meta name="Pomodoro" content="Auxílo na técnica pomodoro" />
        <meta name="google-site-verification" content="4hknokc29rYvjdwLBSDdFIfNxBT6H7Ygo3HYXZnR2nU" />
        <meta property="og:title" content="pomodoro timer next" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pomodoro-timer-next.vercel.app/" />
        <meta
          property="og:image"
          content="/tomato.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div className={styles.container}>
        <div className={styles.sideLeft}>

        </div>
        <div className={styles.sideCenter}>
          <MyTimer expiryTimestamp={time} />
        </div>
        <div className={styles.sideRight}>

        </div>
      </div>
      <div className={styles.description}>
        <div className={styles.sideLeft}>

        </div>
        <div className={styles.sideCenter}>
          <DescriptionPomodoro />
        </div>
        <div className={styles.sideRight}>

        </div>
      </div>

    </div>
  )
}


