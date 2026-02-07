import React from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';

export default function RegisterStep3() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark">
      <Header
        subtitle="Step 3 of 4"
        showBack={true}
      />

      <View className="flex-row px-6 py-4">
        <View className="h-1.5 flex-1 rounded-full bg-primary mr-1" />
        <View className="h-1.5 flex-1 rounded-full bg-primary mx-1" />
        <View className="h-1.5 flex-1 rounded-full bg-primary mx-1" />
        <View className="h-1.5 flex-1 rounded-full bg-slate-200 dark:bg-slate-700 ml-1" />
      </View>

      <ScrollView className="flex-1 px-6 pt-4 pb-32">
        <View className="max-w-md mx-auto">
          <Text className="text-3xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white">
            Finalize your role
          </Text>
          <Text className="mt-2 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Set up your professional identity and link your account to your organization’s private workspace.
          </Text>

          <View className="mt-8 space-y-8">
            <View>
               <Text className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1 mb-2">Your Primary Role</Text>
               <TouchableOpacity className="h-14 w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 flex-row items-center">
                  <MaterialCommunityIcons name="badge-account-horizontal-outline" size={24} color="#137fec" />
                  <Text className="flex-1 ml-3 text-slate-900 dark:text-white">Select your role</Text>
                  <MaterialCommunityIcons name="chevron-down" size={20} color="#94a3b8" />
               </TouchableOpacity>
            </View>

            <View>
              <View className="flex-row items-center justify-between mb-2">
                <Text className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Company Access Code</Text>
                <TouchableOpacity>
                  <Text className="text-xs text-primary font-medium">Where to find?</Text>
                </TouchableOpacity>
              </View>
              <View className="flex-row justify-between">
                {[4, 8, '', '', '', ''].map((val, i) => (
                  <View key={i} className="flex-1 h-14 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg items-center justify-center mx-1">
                    <Text className="text-xl font-bold text-slate-900 dark:text-white">{val}</Text>
                  </View>
                ))}
              </View>
              <Text className="text-xs text-slate-500 mt-2 px-1">Enter the 6-digit code provided by your workspace administrator.</Text>
            </View>
          </View>

          <View className="mt-12 p-4 rounded-xl bg-slate-100 dark:bg-slate-800/50 flex-row">
             <MaterialCommunityIcons name="information" size={24} color="#137fec" />
             <Text className="flex-1 text-sm text-slate-600 dark:text-slate-400 leading-snug ml-3">
                Your role determines your default dashboard view and notification priority settings. These can be adjusted later in Preferences.
             </Text>
          </View>
        </View>
      </ScrollView>

      <View className="p-6 bg-background-light/80 dark:bg-background-dark/80">
        <Button
          title="Finalize Setup"
          onPress={() => router.replace('/onboarding/workflow' as any)}
          icon={<MaterialCommunityIcons name="check-circle" size={20} color="white" />}
        />
      </View>
    </SafeAreaView>
  );
}
