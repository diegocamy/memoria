import { useEffect, useState } from "react";
import Card from "./components/Card";
import Finish from "./components/Finish";

export interface GuessCard {
  letter: string;
  id: number;
  showCard: boolean;
  guessed: boolean;
}

function App() {
  const [cards, setCards] = useState<GuessCard[]>([]);
  const [previous, setPrevious] = useState<{ id: number; letter: string }>();
  const [finish, setFinish] = useState(false);

  useEffect(() => {
    const letters = "abcabc";
    const mixedLetters = letters
      .toUpperCase()
      .split("")
      .sort(() => Math.random() - Math.random());
    setCards(
      mixedLetters.map((letter, index) => {
        return {
          letter,
          guessed: false,
          id: index,
          showCard: false,
        };
      })
    );
  }, []);

  useEffect(() => {
    let remaining;
    if (cards.length > 0) {
      remaining = cards.filter((c) => c.guessed === false).length;
    }

    if (remaining === 0) {
      setFinish(true);
    }
  }, [cards]);

  const handleCardClick = (id: number, letter: string) => {
    //if there's no previous card selected
    if (!previous) {
      //set current selected card as previous
      setPrevious({ id, letter });

      //update cards to show selected card
      setCards(
        cards.map((c) => {
          if (c.id === id) {
            return { ...c, showCard: true };
          }

          return c;
        })
      );
    } else {
      //if the previous card is the same the user selects, do nothing
      if (previous.id === id) return;

      //if the previous card has the same letter set the two as guessed
      if (previous.letter === letter) {
        setCards(
          cards.map((c) => {
            if (c.id === previous.id) {
              return { ...c, guessed: true };
            }

            if (c.id === id) {
              return { ...c, guessed: true, showCard: true };
            }

            return c;
          })
        );

        //then set the previous as undefined
        setPrevious(undefined);

        return;
      }

      //if the previous letter is not equal to the selected letter
      //set the current card visible
      if (previous.letter && previous?.letter !== letter) {
        setCards(
          cards.map((c) => {
            if (c.id === id) {
              return { ...c, showCard: true };
            }

            return c;
          })
        );

        //then wait .5seconds and hide both cards
        setTimeout(() => {
          setCards(
            cards.map((c) => {
              if (c.id === id) {
                return { ...c, showCard: false };
              }

              if (c.id === previous?.id) {
                return { ...c, showCard: false };
              }

              return c;
            })
          );
        }, 500);

        //set previous to undefined
        setPrevious(undefined);
      }
    }
  };

  return (
    <div className="wrapper">
      {finish ? <Finish setFinish={setFinish} setCards={setCards} /> : null}
      <div className="cards-container">
        {cards.map((c) => (
          <Card
            key={c.id}
            id={c.id}
            showCard={c.showCard}
            guessed={c.guessed}
            letter={c.letter}
            handleClick={handleCardClick}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
