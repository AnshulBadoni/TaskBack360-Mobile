import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function AnalyticsDashboardScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <View className="bg-white/80 border-b border-slate-200 pt-4 pb-2 px-4">
        <View className="flex-row items-center justify-between">
          <TouchableOpacity onPress={() => router.back()}><MaterialCommunityIcons name="chevron-left" size={28} color="#64748b" /></TouchableOpacity>
          <Text className="text-lg font-bold tracking-tight text-slate-900">Executive Analytics</Text>
          <TouchableOpacity><MaterialCommunityIcons name="share-variant" size={24} color="#64748b" /></TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
        <View className="py-4 space-y-4">
           <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row mb-4">
              <TouchableOpacity className="flex-row items-center bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-200 mr-3">
                 <MaterialCommunityIcons name="calendar-range" size={20} color="#137fec" />
                 <Text className="text-sm font-semibold ml-2">Last 30 Days</Text>
                 <MaterialCommunityIcons name="chevron-down" size={18} color="#94a3b8" className="ml-2" />
              </TouchableOpacity>
              <TouchableOpacity className="flex-row items-center bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-200 mr-3">
                 <MaterialCommunityIcons name="account-group" size={20} color="#137fec" />
                 <Text className="text-sm font-semibold ml-2">Engineering</Text>
                 <MaterialCommunityIcons name="chevron-down" size={18} color="#94a3b8" className="ml-2" />
              </TouchableOpacity>
           </ScrollView>

           <View className="flex-row justify-between mb-4">
              <View className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm w-[48%] mr-[4%]">
                 <Text className="text-xs font-medium text-slate-500 uppercase mb-1">Active Tasks</Text>
                 <View className="flex-row items-baseline">
                    <Text className="text-2xl font-bold text-slate-900">1,284</Text>
                    <Text className="text-xs font-medium text-emerald-500 ml-2">+4%</Text>
                 </View>
              </View>
              <View className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm w-[48%]">
                 <Text className="text-xs font-medium text-slate-500 uppercase mb-1">Cycle Time</Text>
                 <View className="flex-row items-baseline">
                    <Text className="text-2xl font-bold text-slate-900">4.2d</Text>
                    <Text className="text-xs font-medium text-red-500 ml-2">-12%</Text>
                 </View>
              </View>
           </View>

           <View className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm mb-4">
              <View className="flex-row justify-between items-center mb-6">
                 <View>
                    <Text className="font-bold text-slate-900">Project Velocity</Text>
                    <Text className="text-xs text-slate-500">Points delivered per sprint</Text>
                 </View>
                 <View className="items-end">
                    <Text className="text-xl font-bold text-primary">142 pts</Text>
                    <Text className="text-[10px] font-bold text-emerald-500">TRENDING UP</Text>
                 </View>
              </View>
              <View className="h-40 w-full bg-slate-50 rounded-lg items-center justify-center">
                 <Text className="text-slate-400">Chart Visualization</Text>
              </View>
           </View>

           <View className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm mb-4">
              <Text className="font-bold text-slate-900 mb-4">Resolution Rate</Text>
              <View className="space-y-4">
                 {[
                   { label: 'Resolved', value: 92, color: 'bg-emerald-500' },
                   { label: 'Backlog Growth', value: 14, color: 'bg-amber-400' },
                   { label: 'Bug Fixes', value: 78, color: 'bg-primary' },
                 ].map((item, i) => (
                   <View key={i} className="mb-4">
                      <View className="flex-row justify-between mb-1.5">
                         <Text className="text-xs text-slate-500">{item.label}</Text>
                         <Text className="text-xs font-bold text-slate-900">{item.value}%</Text>
                      </View>
                      <View className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                         <View className={`h-full ${item.color}`} style={{ width: `${item.value}%` }} />
                      </View>
                   </View>
                 ))}
              </View>
           </View>
        </View>
        <View className="h-24" />
      </ScrollView>
    </SafeAreaView>
  );
}
