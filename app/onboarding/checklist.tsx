import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function OnboardingChecklist() {
  const router = useRouter();

  const tasks = [
    { id: 1, title: 'Upload your avatar', subtitle: 'Help your team recognize you', icon: 'account', status: 'completed' },
    { id: 2, title: 'Join your first project', subtitle: 'Get up to speed with goals', icon: 'rocket-launch', status: 'completed' },
    { id: 3, title: 'Send a team message', subtitle: 'Say hello in #general', icon: 'chat', status: 'active' },
    { id: 4, title: 'Connect your calendar', subtitle: 'Sync your schedule', icon: 'calendar', status: 'pending' },
    { id: 5, title: 'Set notification preferences', subtitle: 'Control how you are alerted', icon: 'bell', status: 'pending' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-slate-900">
      <View className="pt-8 px-6 pb-4 flex-row items-center justify-between bg-white dark:bg-slate-900 z-10">
        <View>
          <Text className="text-slate-900 dark:text-white text-2xl font-bold tracking-tight">Welcome back, Alex</Text>
          <Text className="text-slate-500 dark:text-slate-400 text-sm mt-1">Ready to sync with your team?</Text>
        </View>
        <TouchableOpacity onPress={() => router.replace('/(tabs)')}>
          <Text className="text-primary font-semibold text-sm">Dismiss</Text>
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1">
        <View className="px-6 py-4">
          <View className="bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 rounded-xl p-5">
            <View className="flex-row justify-between items-end mb-3">
              <View>
                <Text className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Onboarding Progress</Text>
                <Text className="text-sm font-medium text-slate-700 dark:text-slate-300 mt-1">40% complete</Text>
              </View>
              <Text className="text-primary text-xs font-bold">2 / 5 Tasks</Text>
            </View>
            <View className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <View className="h-full bg-primary rounded-full" style={{ width: '40%' }} />
            </View>
            <View className="flex-row items-center mt-3">
               <MaterialCommunityIcons name="information-outline" size={14} color="#94a3b8" />
               <Text className="text-xs text-slate-500 dark:text-slate-400 ml-1">Finish these to unlock all team features.</Text>
            </View>
          </View>
        </View>

        <View className="px-6 pb-12">
          <Text className="text-slate-400 dark:text-slate-500 text-[11px] font-bold uppercase tracking-[0.1em] mb-4 mt-2">Next Steps</Text>
          <View>
            {tasks.map((task) => (
              <TouchableOpacity
                key={task.id}
                className={`flex-row items-center p-4 rounded-xl border mb-3 ${
                  task.status === 'active'
                  ? 'border-primary/20 bg-primary/5 dark:bg-primary/10'
                  : 'border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900'
                } ${task.status === 'pending' ? 'opacity-80' : ''}`}
              >
                <View className={`w-12 h-12 rounded-lg items-center justify-center ${
                  task.status === 'completed' ? 'bg-green-50 dark:bg-green-900/20' :
                  task.status === 'active' ? 'bg-primary' : 'bg-slate-100 dark:bg-slate-800'
                }`}>
                   <MaterialCommunityIcons
                    name={task.icon as any}
                    size={24}
                    color={task.status === 'completed' ? '#10b981' : task.status === 'active' ? 'white' : '#94a3b8'}
                  />
                </View>
                <View className="flex-1 ml-4 mr-2">
                   <Text className="text-slate-900 dark:text-slate-100 text-[15px] font-semibold">{task.title}</Text>
                   <Text className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">{task.subtitle}</Text>
                </View>
                <View>
                   <MaterialCommunityIcons
                    name={task.status === 'completed' ? "checkbox-marked" : "checkbox-blank-outline"}
                    size={24}
                    color={task.status === 'completed' ? "#137fec" : "#cbd5e1"}
                  />
                </View>
              </TouchableOpacity>
            ))}
          </View>

          <View className="mt-8 relative overflow-hidden rounded-2xl bg-slate-900 p-6">
             <View className="absolute -right-4 -top-4 w-24 h-24 bg-primary/20 rounded-full" />
             <View className="relative z-10">
                <Text className="text-white font-bold text-lg mb-1">Need help?</Text>
                <Text className="text-slate-300 text-xs leading-relaxed max-w-[200px] mb-4">Our support team is here to help you set up your workspace.</Text>
                <TouchableOpacity className="bg-white px-4 py-2 rounded-lg items-center self-start">
                   <Text className="text-slate-900 text-xs font-bold">Talk to an expert</Text>
                </TouchableOpacity>
             </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
