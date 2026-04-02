export default function Letters({
  id,
  className,
  children,
}: {
  id?: string,
  className?: string,
  children?: string,
}) {

  return (
    <h1>
      {children
        ?.split("")
        .map((letter, index) => {
          return (
            <span
              id={`${id || ""}-${index}`}
              className={className}
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