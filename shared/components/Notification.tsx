import * as Notificaitons from "expo-notifications";
import { useRouter } from "expo-router";
import { useEffect } from "react";
export function Notificaiton() {
  const router = useRouter();

  Notificaitons.setNotificationHandler({
    handleNotification: async () => ({
      shouldPlaySound: true,
      shouldSetBadge: true,
      shouldShowAlert: true,
    }),
  });

  useEffect(() => {
    const subRecieved = Notificaitons.addNotificationReceivedListener(
      (notification) => {
        console.log("nitifict", notification.request.content.data);
      },
    );
    const subResponseReceived =
      Notificaitons.addNotificationResponseReceivedListener((notification) => {
        const carNumber =
          notification.notification.request.content.data.carNumber;
        router.push(`/(app)/car/${carNumber}`);
      });
    return () => {
      subRecieved.remove();
      subResponseReceived.remove();
    };
  }, []);

  return <></>;
}
