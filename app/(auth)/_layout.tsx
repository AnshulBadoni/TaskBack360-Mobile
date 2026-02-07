import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" />
      <Stack.Screen name="register-step-1" />
      <Stack.Screen name="register-step-2" />
      <Stack.Screen name="register-step-3" />
      <Stack.Screen name="reset-password" />
      <Stack.Screen name="recovery-sent" />
    </Stack>
  );
}
