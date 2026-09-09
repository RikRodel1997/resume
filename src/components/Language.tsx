export type LanguageProps = {
  name: string;
  level: string;
};

export default function Language({ name, level }: LanguageProps) {
  return (
    <div
      style={{
        backgroundColor: "#E5E7EB",
        paddingLeft: 6,
        paddingRight: 6,
        paddingTop: 4,
        paddingBottom: 4,
        borderRadius: 4,
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <span
        style={{
          fontSize: 9,
          fontWeight: 900,
        }}
      >
        {name}
      </span>
      <span
        style={{
          fontSize: 9,
          marginLeft: 5,
        }}
      >
        {level}
      </span>
    </div>
  );
}
