import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Header } from '../../components/Header';

export default function RegisterStep1() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark">
      <Header
        subtitle="Step 1 of 4"
        showBack={true}
      />

      <View className="flex-row px-6 py-4">
        <View className="h-1.5 flex-1 rounded-full bg-primary mr-1" />
        <View className="h-1.5 flex-1 rounded-full bg-slate-200 dark:bg-slate-700 mx-1" />
        <View className="h-1.5 flex-1 rounded-full bg-slate-200 dark:bg-slate-700 mx-1" />
        <View className="h-1.5 flex-1 rounded-full bg-slate-200 dark:bg-slate-700 ml-1" />
      </View>

      <ScrollView className="flex-1 px-6 pt-4 pb-32">
        <View className="max-w-md mx-auto flex-col items-center">
          <Text className="text-3xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white text-center">
            Setup your identity
          </Text>
          <Text className="mt-2 text-base text-slate-600 dark:text-slate-400 leading-relaxed text-center">
            Choose how you'll appear to your teammates.
          </Text>

          <View className="mt-10 relative">
            <View className="w-32 h-32 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 items-center justify-center overflow-hidden">
              <MaterialCommunityIcons name="account" size={64} color="#94a3b8" />
            </View>
            <TouchableOpacity className="absolute bottom-0 right-0 w-10 h-10 bg-primary rounded-full items-center justify-center border-4 border-background-light dark:border-background-dark shadow-sm">
              <MaterialCommunityIcons name="plus" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity className="mt-4">
            <Text className="text-sm font-medium text-primary">Upload Photo</Text>
          </TouchableOpacity>

          <View className="mt-12 w-full">
            <Input
              label="Username"
              placeholder="username"
              leftIcon={<Text className="text-base font-medium text-slate-400">@</Text>}
            />
            <Text className="text-[11px] text-slate-500 px-1 -mt-2">This is your unique handle for mentions and search.</Text>
          </View>
        </View>
      </ScrollView>

      <View className="p-6 bg-background-light/80 dark:bg-background-dark/80">
        <Button
          title="Continue"
          onPress={() => router.push('/(auth)/register-step-2' as any)}
          icon={<MaterialCommunityIcons name="arrow-right" size={20} color="white" />}
        />
      </View>
    </SafeAreaView>
  );
}
