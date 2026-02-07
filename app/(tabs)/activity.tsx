import { SafeAreaView } from "react-native-safe-area-context";
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ActivityScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-background-dark">
      <View className="bg-white dark:bg-background-dark pt-4">
        <View className="flex-row items-center justify-between px-4 mb-4">
          <Text className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Activity</Text>
          <TouchableOpacity>
            <Text className="text-primary text-[15px] font-semibold">Mark all as read</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row border-b border-gray-100 dark:border-slate-800 px-4">
           <TouchableOpacity className="border-b-2 border-primary pb-2.5 mr-6">
              <Text className="text-sm font-semibold text-slate-900 dark:text-white">All</Text>
           </TouchableOpacity>
           <TouchableOpacity className="border-b-2 border-transparent pb-2.5 mr-6">
              <Text className="text-sm font-semibold text-slate-500">Mentions</Text>
           </TouchableOpacity>
           <TouchableOpacity className="border-b-2 border-transparent pb-2.5 mr-6">
              <Text className="text-sm font-semibold text-slate-500">System</Text>
           </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1">
        <Text className="text-slate-400 text-[11px] font-bold tracking-widest px-4 py-4 uppercase">Today</Text>

        <TouchableOpacity className="flex-row p-4 bg-primary/5 border-b border-slate-50">
           <View className="relative">
              <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2ICBbP0uKtB-62wr7azs7-As5AAX6LNKoUdnOitHLvSU8xqioT4LQ4pvr-UIM0m83j6koa0Yv8G87P7ZvfzjgYVJv5QI7blFiZsOrYjOZBMhf1jGn4D5M1llqslLLKNUCutPK2PyZi7ZS3Ns8IPk1RvabqIVniAUkkWn8TakPjsAMXsvv1WKlaYycN4gSQveQv6anH_lzbrfTtIvPwXLV5pc_um0Q-USSe-75Vq0v2mmadZvOYqzuUF7YQvWgGhVMpNt_ltKOiP5Z' }} className="w-12 h-12 rounded-full" />
              <View className="absolute -left-1 top-5 w-2.5 h-2.5 rounded-full bg-primary border-2 border-white" />
           </View>
           <View className="flex-1 ml-4">
              <View className="flex-row justify-between items-start">
                 <Text className="text-sm leading-snug">
                    <Text className="font-bold text-slate-900">Sarah Chen</Text>
                    <Text className="text-slate-600"> tagged you in a task</Text>
                 </Text>
                 <Text className="text-xs text-primary font-medium">2m</Text>
              </View>
              <Text className="text-slate-500 text-sm mt-1" numberOfLines={2}>
                 "Can you review the Q4 strategy phase 1 document? Specifically page 4 metrics."
              </Text>
           </View>
        </TouchableOpacity>

        <View className="flex-row p-4 border-b border-slate-50">
           <View className="w-12 h-12 rounded-full bg-primary/10 items-center justify-center">
              <MaterialCommunityIcons name="rocket-launch" size={24} color="#137fec" />
           </View>
           <View className="flex-1 ml-4">
              <View className="flex-row justify-between items-start">
                 <Text className="text-sm leading-snug">
                    <Text className="font-bold text-slate-900">System</Text>
                    <Text className="text-slate-600"> successfully deployed </Text>
                    <Text className="font-semibold">v2.4.0</Text>
                    <Text className="text-slate-600"> to Production</Text>
                 </Text>
                 <Text className="text-xs text-slate-400">4h</Text>
              </View>
           </View>
        </View>

        <Text className="text-slate-400 text-[11px] font-bold tracking-widest px-4 py-4 uppercase">Yesterday</Text>
        <View className="flex-row p-4 border-b border-slate-50 opacity-80">
           <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIwBPb8IBjG92_1BhhILPTUe-EMvcz_2Da4uK0qFsDtV7-x9qA9fFcv9BElZD7OQQ5cZr5hgEDNGm62aCmesGOonD7Qjs1T83naAmPhVNv6dgfwewhj9z0NPM8tyMHQ3jNR_8pw6NnQiWU5tSo_RhYnhZGWf-glwh_Ys8VkPHEeRqLG7om356LVT38wTlH_FdzZbAH4I4yU00TK_kz7c6aq1R2yssawMrKbl9td4wgb54gqREiXsgMueaHVf1u9GGH_S-lp5Cnjho3' }} className="w-12 h-12 rounded-full" />
           <View className="flex-1 ml-4">
              <View className="flex-row justify-between items-start">
                 <Text className="text-sm leading-snug">
                    <Text className="font-bold text-slate-900">Alex Rivera</Text>
                    <Text className="text-slate-600"> assigned you to </Text>
                    <Text className="font-semibold">Security Audit</Text>
                 </Text>
                 <Text className="text-xs text-slate-400">1d</Text>
              </View>
              <Text className="text-slate-500 text-sm mt-1">Due by Friday, Nov 15th.</Text>
           </View>
        </View>
        <View className="h-24" />
      </ScrollView>
    </SafeAreaView>
  );
}
