interface Props {
  id: number;
  guessed: boolean;
  letter: string;
  showCard: boolean;
  handleClick: (id: number, letter: string) => void;
}

function Card({ guessed, id, letter, showCard, handleClick }: Props) {
  return (
    <div
      className={`card ${showCard ? "show" : ""}`}
      onClick={() => {
        if (!guessed) {
          handleClick(id, letter);
        }
      }}
    >
      {showCard ? letter : "¿?"}
    </div>
  );
}

export default Card;
