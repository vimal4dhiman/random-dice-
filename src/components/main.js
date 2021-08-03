import React, { Fragment, useState } from "react";

import "../App.css";
import Section from "./section";

import ImageGenerate from "./imageGenerator";

const Main = () => {
  const [p1Score, setP1Score] = useState(0);
  const [p1Current, setP1Current] = useState(0);

  const [p2Score, setP2Score] = useState(0);
  const [p2Current, setP2Current] = useState(0);

  const [imageShow, setImg] = useState(false);

  const [dice, setDice] = useState(null);

  const [changePlayer, setChangePlayer] = useState(true);

  const newGameHandler = () => {
    setImg(false);
    setP1Score(0);
    setP1Current(0);
    setP2Current(0);
    setP2Score(0);
    setDice(0);
    setChangePlayer(true);
  };

  let diceValue;

  const rollDiceHandler = () => {
    diceValue = Math.trunc(Math.random() * 6) + 1;
    setImg(true);
    setDice(diceValue);
    if (changePlayer) {
      if (diceValue === 1) {
        setChangePlayer(false);
        setP1Current(0);
        setP1Score(p1Score);
      } else if (p1Current === 0) {
        setP1Current(diceValue);
      } else if (p1Current !== 0) {
        setP1Current(diceValue + p1Current);
      }
    }
    if (!changePlayer) {
      if (diceValue === 1) {
        setChangePlayer(true);
        setP2Current(0);
        setP2Score(p2Score);
      } else if (p2Current === 0) {
        setP2Current(diceValue);
      } else if (p2Current !== 0) {
        setP2Current(diceValue + p2Current);
      }
    }
  };

  const holdDiceHandler = () => {
    if (changePlayer) {
      setP1Score(p1Score + p1Current);
      setP1Current(0);
      setChangePlayer(false);
    }
    if (!changePlayer) {
      setP2Score(p2Score + p2Current);
      setP2Current(0);
      setChangePlayer(true);
    }
  };

  let p1cssActive = changePlayer
    ? "player player--0 player--active"
    : "player player--0";

  let p2cssActive = !changePlayer
    ? "player player--1 player--active"
    : "player player--1";

  return (
    <Fragment>
      <main>
        <Section
          sectionCss={p1cssActive}
          head="name"
          score="score"
          current="current"
          currentLabel="current-label"
          currentScore="current-score"
          name="Player 1"
          value={p1Score}
          currentValue={p1Current}
        />
        <Section
          sectionCss={p2cssActive}
          head="name"
          score="score"
          current="current"
          currentLabel="current-label"
          currentScore="current-score"
          name="Player 2"
          value={p2Score}
          currentValue={p2Current}
        />
        {imageShow && <ImageGenerate value={dice} />}
        <button className="btn btn--new" onClick={newGameHandler}>
          🔄 New Game
        </button>
        <button className="btn btn--roll" onClick={rollDiceHandler}>
          🎲 Roll dice
        </button>
        <button className="btn btn--hold" onClick={holdDiceHandler}>
          📥 Hold
        </button>
      </main>
    </Fragment>
  );
};

export default Main;
