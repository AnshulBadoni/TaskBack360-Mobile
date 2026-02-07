import { SafeAreaView } from "react-native-safe-area-context";
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function CollaborationHubScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="bg-white/95 border-b border-slate-100 px-4 pt-4 pb-3">
        <View className="flex-row items-center justify-between mb-4">
          <View className="flex-row items-center">
            <View className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 overflow-hidden mr-3">
              <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwPGbYG9IFVwc25E1IbPSaCYCUJVdxj34rH08FcuiOJ-HHkV4QxatockIf0cvC222bPIsf-iqk90Tog5c69u23aXJ6GFUqwrbmIE_h1z4bd0aJXp94miyONyj1SijG7M3QwupLUYw4Vn5XcZH8A7XJt_0g3p14f2ZltDAqwS20TZkqk8-453atYSJtYeUrVll1eYoZKP2KKdrseX7pFhEsOy7yEUzScEik38ClnvlRxPw6pPl6yeJxnh1-mGCOGigcN-X84Jim8-Ym' }} className="w-full h-full" />
            </View>
            <Text className="text-lg font-bold tracking-tight text-slate-900">Collaboration Hub</Text>
          </View>
          <View className="flex-row space-x-2">
             <TouchableOpacity className="p-2 mr-2"><MaterialCommunityIcons name="magnify" size={24} color="#64748b" /></TouchableOpacity>
             <TouchableOpacity className="p-2"><MaterialCommunityIcons name="square-edit-outline" size={24} color="#64748b" /></TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="mt-4 px-4">
           <View className="flex-row items-center justify-between mb-3">
              <Text className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Workspace Directory</Text>
              <TouchableOpacity><Text className="text-[11px] font-semibold text-primary">Browse</Text></TouchableOpacity>
           </View>
           <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row pb-4">
              {['Alex', 'Sarah', 'Marcus', 'Elena'].map((name, i) => (
                <View key={i} className="items-center mr-6">
                   <View className="relative">
                      <View className="w-12 h-12 rounded-full bg-slate-200 border border-slate-200 overflow-hidden" />
                      <View className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
                   </View>
                   <Text className="text-[11px] font-medium text-slate-600 mt-2">{name}</Text>
                </View>
              ))}
              <TouchableOpacity className="items-center">
                 <View className="w-12 h-12 rounded-full border border-dashed border-slate-300 items-center justify-center">
                    <MaterialCommunityIcons name="plus" size={24} color="#94a3b8" />
                 </View>
                 <Text className="text-[11px] font-medium text-slate-400 mt-2">Invite</Text>
              </TouchableOpacity>
           </ScrollView>
        </View>

        <View className="mt-6 border-t border-slate-50">
           <View className="px-4 py-3 bg-slate-50 flex-row items-center justify-between border-b border-slate-100">
              <Text className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Recent Threads</Text>
              <MaterialCommunityIcons name="filter-variant" size={16} color="#94a3b8" />
           </View>

           {[
             { task: 'TASK-102', title: 'Redesign Hero Section', user: 'Alex Rivera', time: '2m ago', unread: true },
             { task: 'TASK-084', title: 'API Auth Layer', user: 'Marcus Chen', time: '1h ago', unread: false },
           ].map((thread, i) => (
             <TouchableOpacity key={i} className="px-4 py-4 bg-white border-b border-slate-100">
                <View className="flex-row items-center mb-2">
                   <View className="bg-slate-100 px-1.5 py-0.5 rounded flex-row items-center mr-2">
                      <MaterialCommunityIcons name="checkbox-marked-circle-outline" size={12} color="#137fec" />
                      <Text className="text-[10px] font-bold text-slate-700 ml-1">{thread.task}</Text>
                   </View>
                   <Text className="text-[10px] font-medium text-slate-500 flex-1" numberOfLines={1}>{thread.title}</Text>
                </View>
                <View className="flex-row items-start">
                   <View className="w-10 h-10 rounded-lg bg-slate-200 overflow-hidden mr-3" />
                   <View className="flex-1">
                      <View className="flex-row justify-between items-baseline">
                         <Text className="font-semibold text-[14px] text-slate-900">{thread.user}</Text>
                         <Text className={`text-[11px] ${thread.unread ? 'text-primary font-semibold' : 'text-slate-400'}`}>{thread.time}</Text>
                      </View>
                      <Text className="text-[13px] text-slate-600 mt-0.5" numberOfLines={2}>
                        I've updated the Figma files with the new brand guidelines. Could you check the blue accents?
                      </Text>
                   </View>
                   {thread.unread && <View className="w-2 h-2 bg-primary rounded-full mt-2 ml-2" />}
                </View>
             </TouchableOpacity>
           ))}
        </View>
        <View className="h-24" />
      </ScrollView>
    </SafeAreaView>
  );
}
