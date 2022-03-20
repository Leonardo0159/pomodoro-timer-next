import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { DescriptionPomodoro } from '../components/DescriptionPomodoro.js'
import { MyTimer } from '../components/MyTimer';
import { Notifyer } from '../services/notifyer';

export default function Home() {
  Notifyer.init();

  const time = new Date();
  time.setSeconds(time.getSeconds() + 25 * 60); // 25 minutes timer

  return (
    <div className={styles.app}>
      <Head>
        <title>Técnica Pomodoro</title>
        <meta name="Pomodoro" content="Auxílo na técnica pomodoro" />
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