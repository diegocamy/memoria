interface Props {
  letter: string;
}

function Card({ letter }: Props) {
  return <div className="card">{letter}</div>;
}

export default Card;
