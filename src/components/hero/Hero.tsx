"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { Container } from "../container/Container";
import InfoBox from "../infoBox/InfoBox";
import DisplayNumber from "../displayNumber/DisplayNumber";
import styles from "./style.module.css";
import { Button } from "../button/Button";
import DescriptionBlock from "../descriptionBlock/DescriptionBlock";

export default function Hero() {
  const [randomNumber, setRandomNumber] = useState<number>();
  const [inputValue, setInputValue] = React.useState("");
  const [levl, setLevl] = useState(1);
  const [worngUnswer, setWorngUnswer] = useState(0);
  const [showRandomNumber, setShowRandomNumber] = useState(true);
  const [minValue, setMinValue] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const id = useId();

  const random = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;
  useEffect(() => {
    const generatedNumber = random(10, 99);
    setRandomNumber(generatedNumber);
    setShowRandomNumber(true);
    inputRef.current?.focus();
    setTimeout(() => {
      setShowRandomNumber(false);
    }, 1000);
  }, []);

  const handleClickAdd = () => {
    if (inputValue.trim().length < 2) {
      setMinValue(true);
      return;
    }
    if (randomNumber === +inputValue) {
      setLevl((prevLevl) => prevLevl + 1);
    } else {
      setWorngUnswer((prevWrongUnswer) => prevWrongUnswer + 1);
    }
    setInputValue("");
    setShowRandomNumber(true);
    setTimeout(() => {
      setShowRandomNumber(false);
    }, 1000);

    if (levl >= 11) {
      setRandomNumber(random(1000000, 9999999));
    } else if (levl >= 9) {
      setRandomNumber(random(100000, 999999));
    } else if (levl >= 7) {
      setRandomNumber(random(10000, 99999));
    } else if (levl >= 5) {
      setRandomNumber(random(1000, 9999));
    } else if (levl >= 3) {
      setRandomNumber(random(100, 999));
    } else if (levl < 3) {
      setRandomNumber(random(10, 99));
    }
  };

  const handelClickResetBtn = () => {
    setRandomNumber(random(10, 99));
    setLevl(1);
    setWorngUnswer(0);
    setShowRandomNumber(true);
    setTimeout(() => {
      setShowRandomNumber(false);
    }, 1000);
  };
  const numberValumeId = `${id}-number-value`;

  return (
    <section className={styles.hero}>
      <Container>
        <h1 className={styles.hero__title}>
          The Magical Number Seven, Plus or Minus Two
        </h1>
        <div className={styles.hero__box}>
          <InfoBox levl={levl} worngUnswer={worngUnswer} />
          <DisplayNumber
            worngUnswer={worngUnswer}
            showRandomNumber={showRandomNumber}
            randomNumber={randomNumber}
          />
          <div className={styles.form__wrapper}>
            {worngUnswer === 3 ? (
              <p>Better luck next time (✧ω✧)</p>
            ) : (
              <form
                className={styles.form}
                onSubmit={(event) => {
                  event.preventDefault();
                  handleClickAdd();
                }}
              >
                <div className={styles.form__innerBox}>
                  <label htmlFor={numberValumeId}>Number is:</label>
                  <input
                    ref={inputRef}
                    type="number"
                    className={styles.input}
                    id={numberValumeId}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  {minValue && inputValue.trim().length < 2 && (
                    <p className={styles.test}>
                      Please enter a number of at least 2 characters.
                    </p>
                  )}
                  <button className={styles.form__btn} type="submit">
                    add
                  </button>
                </div>
              </form>
            )}
          </div>
          <Button onClick={handelClickResetBtn}>reset</Button>
          <DescriptionBlock>
            &quot;The Magical Number Seven, Plus or Minus Two: Some Limits on
            Our Capacity for Processing Information&quot; is one of the most
            highly cited papers in psychology. It was written by the cognitive
            psychologist George A. Miller of Harvard Universitys Department of
            Psychology and published in 1956 in Psychological Review. It is
            often interpreted to argue that the number of objects an average
            human can hold in short-term memory is 7 ± 2. This has occasionally
            been referred to as Millers law.
          </DescriptionBlock>
        </div>
      </Container>
    </section>
  );
}
