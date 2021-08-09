export const generateCards = (): string[] => {
  const letters = "abcdefghijklmnop";
  const letters2 = letters + letters;
  const mixedLetters = letters2
    .toUpperCase()
    .split("")
    .sort(() => Math.random() - Math.random());

  return mixedLetters;
};
