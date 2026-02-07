import { SafeAreaView } from "react-native-safe-area-context";
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Button } from '../../components/Button';

export default function OnboardingWorkflow() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark">
      <View className="flex-row justify-end px-6 pt-4">
        <TouchableOpacity onPress={() => router.replace('/(tabs)' as any)}>
          <Text className="text-sm font-medium text-slate-500">Skip</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-1 items-center justify-center px-6">
        <View className="relative w-full max-w-[320px] aspect-square items-center justify-center mb-12">
          <View className="absolute inset-0 bg-primary/5 rounded-full opacity-50" />

          <View className="absolute top-[10%] left-0 w-48 h-32 bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-4 border border-slate-100 dark:border-slate-700" style={{ transform: [{ rotate: '-3deg' }] }}>
             <View className="flex-row items-center mb-2">
                <View className="w-6 h-6 rounded-full bg-indigo-500" />
                <View className="w-16 h-2 bg-slate-200 dark:bg-slate-600 rounded ml-2" />
             </View>
             <View className="w-full h-2 bg-slate-100 dark:bg-slate-700 rounded mb-2" />
             <View className="w-3/4 h-2 bg-slate-100 dark:bg-slate-700 rounded" />
          </View>

          <View className="absolute bottom-[10%] right-0 w-52 h-40 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-5 border border-slate-100 dark:border-slate-700" style={{ transform: [{ rotate: '3deg' }] }}>
             <View className="flex-row justify-between items-start mb-4">
                <View className="w-24 h-3 bg-slate-200 dark:bg-slate-600 rounded" />
                <View className="px-2 py-1 bg-primary/10 rounded">
                   <Text className="text-primary text-[10px] font-bold uppercase">In Progress</Text>
                </View>
             </View>
             <View className="space-y-2">
                <View className="w-full h-2 bg-slate-100 dark:bg-slate-700 rounded mb-2" />
                <View className="w-full h-2 bg-slate-100 dark:bg-slate-700 rounded mb-2" />
                <View className="w-2/3 h-2 bg-slate-100 dark:bg-slate-700 rounded" />
             </View>
             <View className="flex-row justify-end mt-4">
                <View className="w-7 h-7 rounded-full bg-slate-300 border-2 border-white dark:border-slate-800" />
             </View>
          </View>

          <View className="w-16 h-16 bg-primary rounded-2xl shadow-lg items-center justify-center" style={{ transform: [{ rotate: '12deg' }] }}>
             <MaterialCommunityIcons name="sync" size={32} color="white" />
          </View>
        </View>

        <View className="items-center">
          <Text className="text-slate-900 dark:text-white text-3xl font-bold leading-tight tracking-tight text-center px-4">
            Collaborate and track in one place
          </Text>
          <Text className="text-slate-500 dark:text-slate-400 text-lg font-normal leading-relaxed text-center px-6 mt-4">
            Your team’s conversations meet powerful task tracking. Stop switching tabs and start shipping faster.
          </Text>
        </View>
      </View>

      <View className="px-6 pb-12">
        <View className="flex-row items-center justify-center py-8">
          <View className="h-2 w-6 rounded-full bg-primary" />
          <View className="h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-700 ml-2" />
          <View className="h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-700 ml-2" />
        </View>
        <Button
          title="Next"
          onPress={() => router.push('/onboarding/alignment' as any)}
          icon={<MaterialCommunityIcons name="arrow-right" size={20} color="white" />}
        />
      </View>
    </SafeAreaView>
  );
}
