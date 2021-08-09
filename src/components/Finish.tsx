import { GuessCard } from "../App";

interface Props {
  setFinish: React.Dispatch<React.SetStateAction<boolean>>;
  setCards: React.Dispatch<React.SetStateAction<GuessCard[]>>;
}

function Finish({ setCards, setFinish }: Props) {
  const handleYes = () => {
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

    setFinish(false);
  };

  const handleNo = () => {
    setFinish(false);
  };

  return (
    <div className="finish">
      Comenzar de nuevo?
      <div className="buttons">
        <button onClick={handleYes}>Si</button>{" "}
        <button onClick={handleNo}>No</button>
      </div>
    </div>
  );
}

export default Finish;
