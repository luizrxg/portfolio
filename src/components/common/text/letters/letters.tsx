export default function Letters({
  id,
  containerClassName,
  letterClassName,
  children,
}: {
  id?: string,
  containerClassName?: string,
  letterClassName?: string,
  children?: string,
}) {

  return (
    <h1 className={containerClassName}>
      {children
        ?.split("")
        .map((letter, index) => {
          return (
            <span
              id={`${id || ""}-${index}`}
              className={letterClassName}
              key={index}
            >
              {letter}
            </span>
          )
        })
      }
    </h1>
  )
}