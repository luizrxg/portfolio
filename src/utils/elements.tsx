export default function separateLetters(
  str: string,
  id?: string,
  className?: string,
) {
  return str.split("").map((letter, index) => {
    return (
      <span
        id={`${id || ""}-${index}`}
        className={className}
        key={index}
      >
        {letter}
      </span>
    )
  });
}