import React from "react";
import styles from "./style.module.css";
import clsx from "clsx";
import Loader from "../loader/Loader";

interface DisplayNumberProps {
  worngUnswer: number;
  showRandomNumber: boolean;
  randomNumber: number | undefined;
}

export default function DisplayNumber({
  worngUnswer,
  showRandomNumber,
  randomNumber,
}: DisplayNumberProps) {
  return (
    <div className={styles.box__container}>
      <div className={styles.inner__box}>
        {worngUnswer === 3 ? (
          <p className={styles.display__end}>
            <span aria-hidden="true">?@#?$&?№</span>
            ?@#?$&?№
            <span aria-hidden="true">?@#?$&?№</span>
          </p>
        ) : (
          <div className={styles.number__box}>
            {showRandomNumber ? (
              <p className={styles.randomNumber}>{randomNumber}</p>
            ) : (
              <Loader />
            )}
          </div>
        )}
      </div>
      <span className={styles.artButtonAngleLeft} />
      <span className={styles.artButtonAngleRight} />
    </div>
  );
}
