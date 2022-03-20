import { useTimer } from 'react-timer-hook';
import { Notifyer } from '../services/notifyer';
import styles from '../styles/MyTimer.module.css'
import { useState } from 'react';

export const MyTimer = ({ expiryTimestamp }) => {

    const [statusUser, setStatusUser] = useState("Aguardando");

    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,
    } = useTimer({
        expiryTimestamp,
        onExpire: () => {
            if (statusUser == "Trabalhando") {
                Notifyer.notify({ title: "Hora de Descansar!", body: "Muito bem, você já trabalhou o suficiente!\n\nClique em Descansar.", icon: '/tomato.png' })
                handleRest();
            } else {
                Notifyer.notify({ title: "Chega de Descansar!", body: "Você já descansou o suficiente... Volte ao trabalho!\n\nClique em Recomeçar.", icon: '/tomato.png' })
                handleRestart();
            }

        }, autoStart: false
    });

    const handleStart = () => {
        setStatusUser("Trabalhando");
        resume();
    }

    const handlePause = () => {
        setStatusUser("Aguardando");
        pause();
    }

    const handleRestart = () => {
        console.log("Trabalhando")
        setStatusUser("Trabalhando");
        // Restarts to 25 minutes timer
        const time = new Date();
        time.setSeconds(time.getSeconds() + 25 * 60);
        restart(time)
    }

    const handleRest = () => {
        console.log("Descansando")
        setStatusUser("Descansando");
        // Restarts to 5 minutes timer
        const time = new Date();
        time.setSeconds(time.getSeconds() + 5 * 60);
        restart(time)
    }

    return (
        <div className={styles.box}>
            <div className={styles.pomodoro}>
                <div className={styles.logoPomodoro}>
                    <h1>Pomodoro</h1>
                    <div className={styles.tomato}>
                        <img src="/tomato.png" alt='Imagem de um tomate que seria a logo'/>
                    </div>
                </div>
                <div style={{ fontSize: '100px' }}>
                    <span>{String(minutes).padStart(2, "0")}</span>:<span>{String(seconds).padStart(2, "0")}</span>
                </div>
                <p>{isRunning ? 'O tempo está passando...' : 'Pausado'}</p>
                <div className={styles.buttons}>
                    <button className={styles.buttonResume} onClick={handleStart}>Comerçar</button>
                    <button className={styles.buttonPause} onClick={handlePause}>Pausar</button>
                    <button className={styles.buttonRestart} onClick={handleRestart}>Recomeçar</button>
                    <button className={styles.buttonRest} onClick={handleRest}>Descansar</button>
                </div>
            </div>
        </div>
    )
}