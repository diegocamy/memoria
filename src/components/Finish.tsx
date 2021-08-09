import { GuessCard } from "../App";
import { generateCards } from "../utils/generateCards";

interface Props {
  setFinish: React.Dispatch<React.SetStateAction<boolean>>;
  setCards: React.Dispatch<React.SetStateAction<GuessCard[]>>;
}

function Finish({ setCards, setFinish }: Props) {
  const handleYes = () => {
    const letters = generateCards();
    setCards(
      letters.map((letter, index) => {
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
