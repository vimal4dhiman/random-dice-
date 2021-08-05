import React, { Fragment, useEffect, useState } from "react";

import "../App.css";
import Section from "./section";

import ImageGenerate from "./imageGenerator";

const Main = () => {
  const [p1Score, setP1Score] = useState(0);
  const [p1Current, setP1Current] = useState(0);
  const [p1Won, setP1Won] = useState(false);

  const [p2Score, setP2Score] = useState(0);
  const [p2Current, setP2Current] = useState(0);
  const [p2Won, setP2Won] = useState(false);

  const [imageShow, setImg] = useState(false);

  const [dice, setDice] = useState(null);

  const [changePlayer, setChangePlayer] = useState(true);

  const [playing, setPlaying] = useState(true);

  const target = 10;

  const newGameHandler = () => {
    setP1Score(0);
    setP1Current(0);
    setP1Won(false);
    setP2Current(0);
    setP2Score(0);
    setP2Won(false);
    setImg(false);
    setDice(null);
    setChangePlayer(true);
    setPlaying(true);
  };

  let diceValue;

  const rollDiceHandler = () => {
    if (playing) {
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
    }
  };

  useEffect(() => {
    if (p1Score >= target) {
      setPlaying(false);
      setP1Won(true);
    }
    if (p2Score >= target) {
      setPlaying(false);
      setP2Won(true);
    }
    return;
  }, [p1Score, p2Score, playing]);

  const holdDiceHandler = () => {
    if (playing) {
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
    }
  };

  let p1cssActive = changePlayer
    ? "player player--0 player--active"
    : "player player--0";

  let p2cssActive = !changePlayer
    ? "player player--1 player--active"
    : "player player--1";

  let diceClass = !playing ? "dice hidden" : "dice";

  p1cssActive = p1Won ? `player player--0 player--winner` : p1cssActive;
  p2cssActive = p2Won ? `player player--1 player--winner` : p2cssActive;

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
        {imageShow && playing && (
          <ImageGenerate value={dice} classes={diceClass} />
        )}
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
