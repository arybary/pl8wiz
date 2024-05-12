import {
    StyleSheet,
    View,
    KeyboardAvoidingView,
    Platform,
    FlatList,
    RefreshControl,
    ActivityIndicator,
  } from "react-native";
  import { useActions, useTypedSelector } from "@/hooks/storeHooks";
  import { CustomLink } from "@/shared/components/CustomLink";
  import { selectAllCars, selectUserLoading } from "@/store/selectors/index.";
  import { Colors } from "@/shared/config/theme";
  import { ICar } from "@/model/ICar";
  import React from "react";
  import * as Notificaitons from "expo-notifications";
  import * as Device from "expo-device";
  import Constants from "expo-constants";
  import { CarCard } from "@/widget/CarCard/CarCard";
  import { Button } from "@/shared/components/Button";
  
  export default function App() {
    const cars = useTypedSelector(selectAllCars);
  
    const loading = useTypedSelector(selectUserLoading);
  
    const renderCourse = ({ item }: { item: ICar }) => {
      return (
        <View style={styles.item}>
          <CarCard {...item} />
        </View>
      );
    };
  
    const allowsNotification = async () => {
      const settings = await Notificaitons.getPermissionsAsync();
      return (
        settings.granted ||
        settings.ios?.status == Notificaitons.IosAuthorizationStatus.PROVISIONAL
      );
    };
  
    const requestPermissions = async () => {
      return Notificaitons.requestPermissionsAsync({
        ios: {
          allowAlert: true,
          allowBadge: true,
          allowSound: true,
        },
      });
    };
  
    const scheduleNotification = async () => {
      const granted = await allowsNotification();
      if (!granted) {
        await requestPermissions();
      }
      if (Device.isDevice) {
        const token = await Notificaitons.getExpoPushTokenAsync({
          projectId: Constants.expoConfig?.extra?.eas.projectId,
        });
        console.log(token);
      }
    };
  
    console.log("page head", cars);
    return (
      <>
        {loading && (
          <ActivityIndicator
            style={styles.activity}
            size="large"
            color={Colors.primary}
          />
        )}
        <Button text="Напомнить" onPress={scheduleNotification} />
        {cars.length > 0 && (
          <FlatList
        
            data={cars}
            keyExtractor={(item) => item.id}
            renderItem={renderCourse}
          />
        )}
      </>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      flex: 1,
    },
    content: {
      alignItems: "center",
    },
    item: {
      padding: 20,
    },
    activity: {
      marginTop: 30,
    },
  });
  