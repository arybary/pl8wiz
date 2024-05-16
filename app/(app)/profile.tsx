import { useState } from "react";
import { View, StyleSheet } from "react-native";
import * as Sharing from "expo-sharing";
import { Button } from "@/shared/components/Button";

import { Avatar } from "@/entities/user/ui/Avatar/Avatar";
import { ImageUploader } from "@/shared/components/ImageUploader";
import { useTypedSelector } from "@/hooks/storeHooks";
import { selectUser } from "@/store/selectors/index.";
import { IUser } from "@/model/IUser";
import { Input } from "@/shared/components/Input";

export default function Profile() {
  const user = useTypedSelector(selectUser);
  const { photoURL, displayName } = user as IUser;
  const [first, last] = (displayName as string).split(" ");
  const [image, setImage] = useState<string | undefined>(photoURL);
  const [firstName, setFirstName] = useState<string>(first);
  const [lastName, setLastName] = useState<string>(last);

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
      <View style={styles.container}>
        <Avatar style={styles.avatar} image={image as string} />
        <ImageUploader nameBtn="Змінити Аву" onUpload={setImage} onError={(e) => console.log(e)} />
        <Input
          style={styles.input}
          onChangeText={setFirstName}
          placeholder="First Name"
          value={firstName}
        />
        <Input
          style={styles.input}
          onChangeText={setLastName}
          placeholder="Last Name"
          value={lastName}
        />
      </View>
      <Button text="Сохранить" onPress={submitProfile} />
      <Button text="Поделиться" onPress={shareProfile} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 20,
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  input: { marginVertical: 10 },
  avatar: { borderRadius: 35, width: 200, height: 200 },
});
