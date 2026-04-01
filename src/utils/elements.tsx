export default function separateLetters(str: string, id?: string) {
  return str.split("").map((letter, index) => {
    return (
      <span
        id={`${id || ""}-${index}`}
        key={index}
      >
        {letter}
      </span>
    )
  });
}