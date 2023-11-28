import React from "react";
import styles from "./style.module.css";

interface InfoBox {
  levl: number;
  worngUnswer: number;
}

export default function InfoBox({ levl, worngUnswer }: InfoBox) {
  return (
    <div className={styles.box__container}>
      <div className={styles.flex__group}>
        <p className={styles.levl}>Level: {levl}</p>
        <p className={styles.worngUnswer}>Wrong unswer: {worngUnswer}</p>
      </div>
      <span className={styles.artButtonAngleLeft} />
      <span className={styles.artButtonAngleRight} />
    </div>
  );
}
