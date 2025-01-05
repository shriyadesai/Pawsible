import styles from "./Events.module.css";
import React,{useState} from 'react'
import Button from "../../components/design/Buttons";

const Camps = () => {
return (
    <main className={styles.container}>
        <div className={styles.events__title}>
            CAMPS
        </div>
        <div className={styles.container1}>
        <div className={styles.event_right}>
        <div className={styles.event_text}>
            {"We are having a Camp in Janata Colony, Mysore toll gate, Bangalore."}
        </div>
        <div className={styles.div__over__button}>
            <Button
                onHandle={() => {
                    window.location.href = "https://forms.gle/V6bXPFbf9xo8CDEc8";
                    console.log("Hi");
                  }}
                  disabled={false}>
                VOLUNTEER
                </Button>
                </div>
        </div>
        <div className={styles.event_right}>
        <div className={styles.event_text}>
            {"We are having a Camp in Janata Colony, Mysore toll gate, Bangalore."}
        </div>
        <div className={styles.div__over__button}>
            <Button
                onHandle={() => {
                    window.location.href = "https://forms.gle/V6bXPFbf9xo8CDEc8";
                    console.log("Hi");
                  }}
                  disabled={false}>
                VOLUNTEER
                </Button>
                </div>
        </div>
        <div className={styles.event_right}>
        <div className={styles.event_text}>
            {"We are having a Camp in Janata Colony, Mysore toll gate, Bangalore."}
        </div>
        <div className={styles.div__over__button}>
            <Button
                onHandle={() => {
                    window.location.href = "https://forms.gle/V6bXPFbf9xo8CDEc8";
                    console.log("Hi");
                  }}
                  disabled={false}>
                VOLUNTEER
                </Button>
                </div>
        </div>
        <div className={styles.event_right}>
        <div className={styles.event_text}>
            {"We are having a Camp in Janata Colony, Mysore toll gate, Bangalore."}
        </div>
        <div className={styles.div__over__button}>
            <Button
                onHandle={() => {
                    window.location.href = "https://forms.gle/V6bXPFbf9xo8CDEc8";
                    console.log("Hi");
                  }}
                  disabled={false}>
                VOLUNTEER
                </Button>
                </div>
        </div>
        <div className={styles.event_right}>
        <div className={styles.event_text}>
            {"We are having a Camp in Janata Colony, Mysore toll gate, Bangalore."}
        </div>
        <div className={styles.div__over__button}>
            <Button
                onHandle={() => {
                    window.location.href = "https://forms.gle/V6bXPFbf9xo8CDEc8";
                    console.log("Hi");
                  }}
                  disabled={false}>
                VOLUNTEER
                </Button>
                </div>
        </div>
        <div className={styles.event_right}>
        <div className={styles.event_text}>
            {"We are having a Camp in Janata Colony, Mysore toll gate, Bangalore."}
        </div>
        <div className={styles.div__over__button}>
            <Button
                onHandle={() => {
                    window.location.href = "https://forms.gle/V6bXPFbf9xo8CDEc8";
                    console.log("Hi");
                  }}
                  disabled={false}>
                VOLUNTEER
                </Button>
                </div>
        </div>
        </div>
    </main>
);
}

export default Camps;