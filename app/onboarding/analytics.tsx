import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Button } from '../../components/Button';

export default function OnboardingAnalytics() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark">
      <View className="flex-row justify-end px-6 pt-4">
        <TouchableOpacity onPress={() => router.replace('/(tabs)' as any)}>
          <Text className="text-sm font-semibold text-slate-400 dark:text-slate-500">Skip</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-1 items-center justify-center px-8">
        <View className="w-full max-w-[320px] aspect-square relative items-center justify-center mb-12">
          <View className="absolute inset-0 bg-primary/5 rounded-full scale-110" />

          <View className="relative w-full aspect-[4/3] bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 p-6 flex-col">
            <View className="flex-row justify-between items-center mb-6">
              <View>
                <View className="h-2 w-16 bg-slate-200 dark:bg-slate-700 rounded-full mb-1" />
                <View className="h-3 w-24 bg-slate-100 dark:bg-slate-700/50 rounded-full mt-1" />
              </View>
              <MaterialCommunityIcons name="finance" size={24} color="#137fec" />
            </View>

            <View className="flex-1 flex-row items-end justify-between px-2 pb-4">
              <View className="bg-slate-200 dark:bg-slate-700 rounded-t-lg flex-1 h-[40%] mx-1" />
              <View className="bg-primary rounded-t-lg flex-1 h-[85%] shadow-lg mx-1" />
              <View className="bg-slate-300 dark:bg-slate-600 rounded-t-lg flex-1 h-[60%] mx-1" />
              <View className="bg-primary/60 rounded-t-lg flex-1 h-[75%] mx-1" />
              <View className="bg-slate-200 dark:bg-slate-700 rounded-t-lg flex-1 h-[45%] mx-1" />
            </View>

            <View className="flex-row justify-between pt-2 border-t border-slate-50 dark:border-slate-700/50">
              <View className="h-1.5 w-8 bg-slate-100 dark:bg-slate-700 rounded-full" />
              <View className="h-1.5 w-8 bg-slate-100 dark:bg-slate-700 rounded-full" />
              <View className="h-1.5 w-8 bg-slate-100 dark:bg-slate-700 rounded-full" />
            </View>
          </View>

          <View className="absolute -bottom-4 -right-2 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 flex-row items-center">
            <View className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 items-center justify-center">
              <MaterialCommunityIcons name="trending-up" size={16} color="#10b981" />
            </View>
            <View className="ml-3">
              <Text className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Velocity</Text>
              <Text className="text-xs font-bold text-slate-800 dark:text-slate-100">+24%</Text>
            </View>
          </View>
        </View>

        <View className="items-center">
          <Text className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white px-4 text-center">
            Insights at your fingertips
          </Text>
          <Text className="text-base text-slate-500 dark:text-slate-400 font-normal leading-relaxed px-4 text-center mt-4">
            Monitor team velocity and project health in real-time with automated, beautiful reports.
          </Text>
        </View>
      </View>

      <View className="px-8 pb-12">
        <View className="flex-row items-center justify-center py-8">
          <View className="h-2 w-2 rounded-full bg-slate-200 dark:bg-slate-700 mx-1" />
          <View className="h-2 w-6 rounded-full bg-primary mx-1" />
          <View className="h-2 w-2 rounded-full bg-slate-200 dark:bg-slate-700 mx-1" />
        </View>
        <Button
          title="Continue"
          onPress={() => router.push('/onboarding/checklist' as any)}
          icon={<MaterialCommunityIcons name="arrow-right" size={20} color="white" />}
        />
      </View>
    </SafeAreaView>
  );
}
