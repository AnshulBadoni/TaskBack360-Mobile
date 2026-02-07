import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function NewTaskScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-background-dark">
      <View className="flex-row items-center bg-white/80 px-4 py-3 justify-between border-b border-slate-100">
        <TouchableOpacity onPress={() => router.back()}><Text className="text-slate-500 text-base font-medium">Cancel</Text></TouchableOpacity>
        <Text className="text-slate-900 dark:text-white text-lg font-bold">New Task</Text>
        <TouchableOpacity className="bg-primary px-4 py-1.5 rounded-full"><Text className="text-white text-sm font-bold">Create</Text></TouchableOpacity>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="px-4 pt-6">
           <TextInput
             placeholder="Task name..."
             className="text-2xl font-semibold text-slate-900"
             multiline
             placeholderTextColor="#cbd5e1"
           />
        </View>

        <View className="mt-4 px-4">
           <TouchableOpacity className="flex-row items-center justify-between py-4 border-b border-slate-50">
              <View className="flex-row items-center">
                 <MaterialCommunityIcons name="folder-outline" size={20} color="#94a3b8" />
                 <Text className="text-sm font-medium text-slate-600 ml-3">Project</Text>
              </View>
              <View className="flex-row items-center">
                 <Text className="text-sm font-semibold text-slate-900 mr-1">Mobile Redesign</Text>
                 <MaterialCommunityIcons name="chevron-right" size={18} color="#94a3b8" />
              </View>
           </TouchableOpacity>

           <TouchableOpacity className="flex-row items-center justify-between py-4 border-b border-slate-50">
              <View className="flex-row items-center">
                 <MaterialCommunityIcons name="flag-outline" size={20} color="#94a3b8" />
                 <Text className="text-sm font-medium text-slate-600 ml-3">Priority</Text>
              </View>
              <View className="flex-row items-center">
                 <View className="bg-red-50 px-2 py-0.5 rounded-full flex-row items-center">
                    <View className="w-2 h-2 rounded-full bg-red-500 mr-1.5" />
                    <Text className="text-xs font-bold text-red-600">High</Text>
                 </View>
                 <MaterialCommunityIcons name="chevron-right" size={18} color="#94a3b8" className="ml-1" />
              </View>
           </TouchableOpacity>

           <TouchableOpacity className="flex-row items-center justify-between py-4 border-b border-slate-50">
              <View className="flex-row items-center">
                 <MaterialCommunityIcons name="calendar-blank-outline" size={20} color="#94a3b8" />
                 <Text className="text-sm font-medium text-slate-600 ml-3">Due Date</Text>
              </View>
              <View className="flex-row items-center">
                 <Text className="text-sm font-semibold text-primary mr-1">Oct 24, 2023</Text>
                 <MaterialCommunityIcons name="chevron-right" size={18} color="#94a3b8" />
              </View>
           </TouchableOpacity>
        </View>

        <View className="mt-8 px-4">
           <Text className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Assignees</Text>
           <View className="flex-row flex-wrap items-center">
              <View className="flex-row items-center bg-slate-100 pl-1 pr-2 py-1 rounded-full border border-slate-200 mr-2 mb-2">
                 <View className="w-6 h-6 rounded-full bg-slate-300 mr-1.5" />
                 <Text className="text-xs font-semibold">Sarah M.</Text>
                 <MaterialCommunityIcons name="close" size={14} color="#94a3b8" style={{ marginLeft: 4 }} />
              </View>
              <TextInput placeholder="Type @ to add..." className="text-sm flex-1 min-w-[120px] mb-2" placeholderTextColor="#cbd5e1" />
           </View>
        </View>

        <View className="mt-8 px-4">
           <Text className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Description</Text>
           <View className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50/50">
              <View className="flex-row items-center p-2 border-b border-slate-100 bg-white">
                 <TouchableOpacity className="p-1.5"><MaterialCommunityIcons name="format-bold" size={20} color="#64748b" /></TouchableOpacity>
                 <TouchableOpacity className="p-1.5"><MaterialCommunityIcons name="format-italic" size={20} color="#64748b" /></TouchableOpacity>
                 <TouchableOpacity className="p-1.5"><MaterialCommunityIcons name="format-list-bulleted" size={20} color="#64748b" /></TouchableOpacity>
                 <View className="w-[1px] h-4 bg-slate-200 mx-1" />
                 <TouchableOpacity className="p-1.5"><MaterialCommunityIcons name="link-variant" size={20} color="#64748b" /></TouchableOpacity>
              </View>
              <TextInput
                placeholder="Add more details about this task..."
                className="w-full min-h-[140px] p-4 text-sm align-top"
                multiline
                placeholderTextColor="#94a3b8"
              />
           </View>
        </View>

        <View className="mt-8 px-4 pb-24">
           <View className="flex-row items-center justify-between p-4 bg-primary/5 border border-primary/20 rounded-xl">
              <View className="flex-row items-center flex-1">
                 <View className="bg-primary/20 p-2 rounded-lg mr-3">
                    <MaterialCommunityIcons name="tag" size={20} color="#137fec" />
                 </View>
                 <View>
                    <Text className="text-sm font-bold text-slate-900">Link Channel</Text>
                    <Text className="text-xs text-slate-500 mt-1">Connect to #design-ops</Text>
                 </View>
              </View>
              <View className="flex-row items-center">
                 <Text className="text-xs font-bold text-primary mr-2">Connected</Text>
                 <MaterialCommunityIcons name="check-circle" size={18} color="#137fec" />
              </View>
           </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
