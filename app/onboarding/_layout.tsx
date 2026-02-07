import { Stack } from "expo-router";

export default function OnboardingLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="workflow" />
      <Stack.Screen name="alignment" />
      <Stack.Screen name="analytics" />
      <Stack.Screen name="checklist" />
    </Stack>
  );
}
