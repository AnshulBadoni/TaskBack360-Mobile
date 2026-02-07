import { Stack } from "expo-router";
import "react-native-reanimated";
import "../global.css";

export const unstable_settings = {
  initialRouteName: "(auth)/login",
};

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="onboarding" />
    </Stack>
  );
}
