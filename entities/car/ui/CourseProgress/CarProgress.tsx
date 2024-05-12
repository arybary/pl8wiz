import { Colors, Fonts } from "@/shared/config/theme";
import { StyleSheet, Text, View } from "react-native";

export function CarProgress({
  totalLessons,
  passedLessons,
}: {
  totalLessons: number;
  passedLessons: number;
}) {
  const percent = Math.round((passedLessons / totalLessons) * 100);

  return (
    <View style={styles.wrapper}>
      <View style={styles.head}>
        <Text style={styles.textPercent}>{percent}%</Text>
        <Text style={styles.textCount}>
          {passedLessons}/{totalLessons}
        </Text>
      </View>
      <View style={styles.bar}>
        <View
          style={{
            ...styles.progress,
            width: `${percent}%`,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 18,
  },
  textPercent: {
    fontSize: 16,
    ...Fonts.regular,
    color: Colors.secondary,
  },
  textCount: {
    fontSize: 12,
    ...Fonts.regular,
    color: Colors.grayLight,
  },
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
  },
  bar: {
    height: 5,
    borderRadius: 20,
    backgroundColor: Colors.border,
  },
  progress: {
    height: 5,
    borderRadius: 20,
    backgroundColor: Colors.secondary,
  },
});
