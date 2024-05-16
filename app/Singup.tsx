import React, { useState } from "react";
import {
  Alert,
  Linking,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
  Pressable,
} from "react-native";
import { Input } from "@/shared/components/Input";
import { Colors } from "@/shared/config/theme";
import { ErrorNotification } from "@/shared/components/ErrorNotification";
import { Button } from "@/shared/components/Button";
import { CustomLink } from "@/shared/components/CustomLink";
import { useActions } from "@/hooks/storeHooks";
import { router } from "expo-router";
import GoogleIcon from "@/assets/icons/google";
import { Checkbox } from "@/shared/components/Chekbox";
import {
  TERMS_CONDITIONS_LINK,
  PRIVACY_POLICY_LINK,
} from "@/shared/config/links";
import { ImageUploader } from "@/shared/components/ImageUploader";
import { Avatar } from "@/entities/user/ui/Avatar/Avatar";

export default function Signup() {
  const [agreed, setAgreed] = useState(false);
  const [localError, setLocalError] = useState<string | undefined>();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [image, setImage] = useState<string | null>(null);
  const [lastName, setLastName] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>();
  const { singUp, signUpWithGoogle } = useActions();

  const onLinkPress = (url: string) => {
    Linking.openURL(url);
  };

  const onCheckboxPress = () => {
    setAgreed((value) => !value);
  };

  const onSubmit = () => {
    if (!agreed) {
      setLocalError("accept the terms");
      return;
    }
    if (!firstName || !lastName) {
      setLocalError("Please enter first name and last name");
      return;
    }
    if (password !== confirmPassword) {
      setLocalError("Passwords do not match");
      return;
    }

    singUp({ email, password, firstName, lastName, image: image as string });
    Alert.alert(
      "Регистрація",
      `${firstName} успішно зареструвались!`,
      [{ text: "OK", onPress: () => router.replace("/login") }],
      { cancelable: false },
    );
  };

  const onSubmitSingUpGoogle = () => {
    signUpWithGoogle();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ErrorNotification error={localError} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Join the hub!</Text>
        <Input
          style={styles.input}
          onChangeText={setFirstName}
          placeholder="First Name"
        />
        <Input
          style={styles.input}
          onChangeText={setLastName}
          placeholder="Last Name"
        />
        <Input
          style={styles.input}
          onChangeText={setEmail}
          placeholder="Email"
          keyboardType="email-address"
        />
        <Input
          style={styles.input}
          onChangeText={setPassword}
          placeholder="Password"
          isPassword
        />
        <Input
          style={styles.input}
          onChangeText={setConfirmPassword}
          placeholder="Confirm Password"
          isPassword
        />
        <Avatar style={styles.avatar} image={image} />
        <ImageUploader
          nameBtn="вибири Аву"
          onUpload={setImage}
          onError={(e) => console.log(e)}
        />
        <View style={styles.row}>
          <Checkbox checked={agreed} onPress={onCheckboxPress} />
          <Text style={styles.agreeText}>
            I agree to
            <Text
              style={styles.link}
              onPress={() => onLinkPress(TERMS_CONDITIONS_LINK)}
            >
              {" Terms and Conditions "}
            </Text>
            and
            <Text
              style={styles.link}
              onPress={() => onLinkPress(PRIVACY_POLICY_LINK)}
            >
              {" Privacy Policy "}
            </Text>
          </Text>
        </View>
        <View style={styles.btns}>
          <Button text={" Create new account"} onPress={onSubmit} />
          <Text style={styles.footerText}>OR </Text>
          <Pressable onPress={onSubmitSingUpGoogle} style={styles.googleIcon}>
            <GoogleIcon />
          </Pressable>
        </View>
        <View style={styles.btns}>
          <Text style={styles.footerText}>Already Registered? </Text>
          <CustomLink style={styles.footerLink} href={"/login"} text="Login!" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 24,
    gap: 10,
  },
  title: { fontSize: 22, fontWeight: "600", textAlign: "center" },
  input: { marginVertical: 10 },
  footerText: {
    color: Colors.blackLight,
    fontSize: 15,
    textAlign: "center",
    marginTop: 28,
  },
  footerLink: {
    color: Colors.link,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
  },
  agreeText: {
    color: Colors.blackLight,
    fontSize: 12,
    marginLeft: 8,
  },
  avatar: { borderRadius: 25, borderBottomWidth: 20, width: 120, height: 120 },
  btns: {
    flexDirection: "row",
    gap: 5,
    justifyContent: "space-between",
    alignItems: "center",
  },
  link: {
    textDecorationLine: "underline",
  },
  googleIcon: {
    height: 75,
    width: 75,
  },
});
