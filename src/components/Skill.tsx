import { Text, View } from "@react-pdf/renderer";

export type SkillProps = {
  name: string;
  level: string;
};

export default function Skill({ name, level }: SkillProps) {
  return (
    <View
      key={name}
      style={{
        backgroundColor: "#E5E7EB",
        paddingHorizontal: 6,
        paddingVertical: 4,
        borderRadius: 4,
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Text
        style={{
          fontSize: 9,
          fontWeight: "black",
          alignContent: "flex-start",
        }}
      >
        {name}
      </Text>
      <Text
        style={{
          fontSize: 9,
          alignContent: "flex-start",
        }}
      >
        {level}
      </Text>
    </View>
  );
}
