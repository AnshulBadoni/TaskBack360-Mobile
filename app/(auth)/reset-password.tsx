import React from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export default function ResetPassword() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark">
      <View className="px-4 pt-6 pb-2">
        <TouchableOpacity className="flex-row items-center" onPress={() => router.back()}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="#0d141b" />
          <Text className="text-slate-500 dark:text-slate-400 text-sm font-semibold ml-2">Back to Login</Text>
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-8 pt-10">
        <View className="items-center mb-10">
          <View className="relative w-24 h-24 bg-primary/10 rounded-full items-center justify-center">
             <MaterialCommunityIcons name="shield-check" size={48} color="#137fec" />
             <View className="absolute -bottom-1 -right-1 w-8 h-8 bg-white dark:bg-slate-800 rounded-full items-center justify-center shadow-sm">
                <MaterialCommunityIcons name="lock" size={18} color="#137fec" />
             </View>
          </View>
        </View>

        <View className="mb-8">
          <Text className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight text-center">Reset Password</Text>
          <Text className="text-slate-500 dark:text-slate-400 text-base leading-relaxed text-center mt-3">
            Enter your work email address and we'll send you a secure link to reset your password.
          </Text>
        </View>

        <View className="space-y-6">
          <Input
            label="Work Email"
            placeholder="name@company.com"
            rightIcon="email-outline"
          />
          <Button
            title="Send Reset Link"
            onPress={() => router.push('/(auth)/recovery-sent' as any)}
            className="mt-4"
          />
        </View>

        <View className="mt-20 items-center">
          <Text className="text-slate-400 dark:text-slate-500 text-xs uppercase tracking-widest font-bold text-center">
            Secure Recovery Process
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
