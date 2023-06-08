import { useState } from "react";
import questions from "../Data/questions";
import characters from "../Data/points";

function Intro({ qNum, incrementQNum }) {
  return (
    <div className="Intro">
      <div className="intro-text">
        Just Give A Quiz and See For Yourself Which Bleach Character U Are?
      </div>
      <div className="btn">
        <button onClick={incrementQNum} className="start-btn">
          Start Quiz
        </button>
      </div>
    </div>
  );
}

function Result({ score }) {
  var results = characters.map((char) => {
    if (char.score_range.min <= score && char.score_range.max >= score) {
      return char;
    }
  });

  results = results.filter((char) => char != null);

  return (
    <div className="Result">
      <div className="qtn-header">
        <div className="char-name">You are {results[0].name}</div>
        <div className="char-score">{score}/520</div>
      </div>
      <div className="stats-pic-div">
        <ul className="stats">
          {results[0].isHero && (
            <li>
              <span>Bankai Name :</span> {results[0].bankai_name}
            </li>
          )}
          <li>
            <span>Zanpakuto Name :</span>
            {results[0].zanpakuto_name}
          </li>
          <li>
            <span>Height :</span>
            {results[0].height}
          </li>
          <li>
            <span>Weight :</span>
            {results[0].weight}
          </li>
          <li>
            <span>Position :</span>
            {results[0].position}
          </li>
        </ul>
        <div className="pic">
          <img src={results[0].image_link} alt={results[0].name} width={200} />
        </div>
      </div>
      <div className="description-char">{results[0].description}</div>
    </div>
  );
}

function Question({ qNum, incrementQNum, score, incrementScore }) {
  var currentQtn = questions[qNum - 1];
  var answers = currentQtn.answers;

  const handleClickMore = (pts) => {
    incrementScore(pts);
  };

  return (
    <div className="Intro">
      <div className="qtn-header">
        <div className="question-text">{currentQtn.question}</div>
        <div className="score">{score}/520</div>
      </div>
      <div className="options">
        <div className="option">
          <button
            onClick={() => handleClickMore(answers[0].points)}
            className="option-btn"
            value={answers[0].points}
          >
            {answers[0].option}
          </button>
        </div>
        <div className="option">
          <button
            onClick={() => handleClickMore(answers[1].points)}
            className="option-btn"
            value={answers[1].points}
          >
            {answers[1].option}
          </button>
        </div>
        <div className="option">
          <button
            onClick={() => handleClickMore(answers[2].points)}
            className="option-btn"
            value={answers[2].points}
          >
            {answers[2].option}
          </button>
        </div>
        <div className="option">
          <button
            onClick={() => handleClickMore(answers[3].points)}
            className="option-btn"
            value={answers[3].points}
          >
            {answers[3].option}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function MainArena() {
  var [qNum, setQNum] = useState(0);
  var [score, setScore] = useState(0);
  function incrementQNum() {
    setQNum((prevQNum) => prevQNum + 1);
    console.log(qNum);
  }

  function incrementScore(pts) {
    console.log(pts);
    setScore((prevPts) => prevPts + pts);
    setQNum((prevQNum) => prevQNum + 1);
  }

  return (
    <div className="MainArena">
      {qNum <= 0 ? (
        <Intro qNum={qNum} incrementQNum={incrementQNum} />
      ) : qNum > 13 ? (
        <Result score={score} />
      ) : (
        <Question
          qNum={qNum}
          incrementQNum={incrementQNum}
          incrementScore={incrementScore}
          score={score}
        />
      )}
    </div>
  );
}
