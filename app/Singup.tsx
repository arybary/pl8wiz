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

export default function Signup() {
  const [agreed, setAgreed] = useState(false);
  const [localError, setLocalError] = useState<string | undefined>();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
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
    if(agreed){setLocalError("accept the terms");
    return;}
    if (!firstName || !lastName) {
      setLocalError("Please enter first name and last name");
      return;
    }
    if (password !== confirmPassword) {
      setLocalError("Passwords do not match");
      return;
    }

    singUp({ email, password, firstName, lastName });
    router.replace("/login");
  };

  const onSubmitSingUpGoogle = () => {
    signUpWithGoogle();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ErrorNotification error={localError} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text>Join the hub!</Text>

        <Input onChangeText={setFirstName} placeholder="First Name" />
        <Input onChangeText={setLastName} placeholder="Last Name" />
        <Input
          onChangeText={setEmail}
          placeholder="Email"
          keyboardType="email-address"
        />
        <Input onChangeText={setPassword} placeholder="Password" isPassword />
        <Input
          onChangeText={setConfirmPassword}
          placeholder="Confirm Password"
          isPassword
        />

        <View style={styles.row}>
          <Checkbox checked={agreed} onPress={onCheckboxPress} />
          <Text style={styles.agreeText}>
            I agree to
            <Text
              style={styles.link}
              onPress={() => onLinkPress(TERMS_CONDITIONS_LINK)}
            >
              Terms and Conditions 
            </Text>
             and 
            <Text
              style={styles.link}
              onPress={() => onLinkPress(PRIVACY_POLICY_LINK)}
            >
              Privacy Policy
            </Text>
          </Text>
        </View>

        <Button text={" Create new account"} onPress={onSubmit} />
        <Pressable onPress={onSubmitSingUpGoogle} style={styles.googleIcon}>
          <GoogleIcon />
        </Pressable>

        <Text style={styles.footerText}>Already Registered? </Text>
        <CustomLink style={styles.footerLink} href={"/login"} text="Login!" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 24,
  },
  footerText: {
    color: Colors.gray,
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
    color: Colors.gray,
    fontSize: 12,
    marginLeft: 8,
  },
  link: {
    textDecorationLine: "underline",
  },
  googleIcon: {
    height: 75,
    width: 75,
  },
});
