import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import * as Sharing from "expo-sharing";
import { Button } from "@/shared/components/Button";
import { updateProfile } from "firebase/auth";

export default function Profile() {
  const [image, setImage] = useState<string | null>(null);

  const shareProfile = async () => {
    const isShaingAvailable = await Sharing.isAvailableAsync();
    if (!isShaingAvailable) {
      return;
    }
    await Sharing.shareAsync("https://purpleschool.ru", {
      dialogTitle: "Поделиться профилем",
    });
  };

  const submitProfile = () => {
    if (!image) {
      return;
    }
  };

  return (
    <View>
      <View style={styles.container}></View>
      <Button text="Сохранить" onPress={submitProfile} />
      <Button text="Поделиться" onPress={shareProfile} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
