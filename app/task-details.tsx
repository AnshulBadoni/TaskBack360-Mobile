import { SafeAreaView } from "react-native-safe-area-context";
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Card } from '../components/Card';

export default function TaskDetailsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row items-center justify-between px-4 h-14 bg-white border-b border-slate-100">
        <TouchableOpacity onPress={() => router.back()} className="flex-row items-center">
          <MaterialCommunityIcons name="chevron-left" size={24} color="#137fec" />
          <Text className="text-[17px] text-primary ml-1">Back</Text>
        </TouchableOpacity>
        <Text className="text-[17px] font-semibold">Task Insight</Text>
        <View className="flex-row items-center">
          <TouchableOpacity><MaterialCommunityIcons name="share-variant-outline" size={22} color="#137fec" /></TouchableOpacity>
          <TouchableOpacity className="ml-4"><MaterialCommunityIcons name="dots-horizontal" size={22} color="#137fec" /></TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="p-4 bg-white">
           <View className="flex-row items-center justify-between mb-2">
              <Text className="text-xs font-bold tracking-wider text-primary uppercase">#TASK-102</Text>
              <View className="bg-primary/10 rounded-full px-4 py-1 flex-row items-center">
                 <Text className="text-sm font-semibold text-primary mr-1">In Progress</Text>
                 <MaterialCommunityIcons name="chevron-down" size={16} color="#137fec" />
              </View>
           </View>
           <Text className="text-2xl font-bold leading-tight text-slate-900 mt-2">Refactor authentication module with OAuth2 compliance</Text>
        </View>

        <View className="flex-row flex-wrap bg-slate-200 border-y border-slate-200">
           <View className="w-[50%] bg-white p-3 border-r border-b border-slate-100">
              <Text className="text-[11px] uppercase tracking-wider text-slate-500 font-bold mb-2">Assignee</Text>
              <View className="flex-row items-center">
                 <View className="w-6 h-6 rounded-full bg-slate-200 overflow-hidden mr-2">
                    <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApBZs0J_rMedctrjn3hMoneMePJ1nbjK4L7qgRG8Bfm36TeQfVMmZ84CqvX42NvE1U8UEKZClgXxaTiH5MPkPFd5zeGD1FD-AX2DAsGNIuQXhY9CFsEYrjWgdTPSmgQkk5ijYlbEh7MRRhXe5xNYoL6IMdC5R6QsDc632how_stqCifRoyUSnUi0CBEnP4IhCbLBfH8LFOGNV2R3bFM6RJ4kesGf_n42Sagbz5STt4m_Vu7_6eOFOmldrHnmZTM0jWrWVFk3Qa9k9J' }} className="w-full h-full" />
                 </View>
                 <Text className="text-sm font-medium">Alex Rivera</Text>
              </View>
           </View>
           <View className="w-[50%] bg-white p-3 border-b border-slate-100">
              <Text className="text-[11px] uppercase tracking-wider text-slate-500 font-bold mb-2">Due Date</Text>
              <View className="flex-row items-center">
                 <MaterialCommunityIcons name="calendar-blank-outline" size={16} color="#94a3b8" />
                 <Text className="text-sm font-medium ml-2 text-slate-900">Oct 24, 2023</Text>
              </View>
           </View>
           <View className="w-[50%] bg-white p-3 border-r border-slate-100">
              <Text className="text-[11px] uppercase tracking-wider text-slate-500 font-bold mb-2">Priority</Text>
              <View className="flex-row items-center">
                 <MaterialCommunityIcons name="flag" size={16} color="#ef4444" />
                 <Text className="text-sm font-medium ml-2">High Urgency</Text>
              </View>
           </View>
           <View className="w-[50%] bg-white p-3">
              <Text className="text-[11px] uppercase tracking-wider text-slate-500 font-bold mb-2">Labels</Text>
              <View className="flex-row flex-wrap">
                 <View className="bg-slate-100 px-1.5 py-0.5 rounded mr-1"><Text className="text-[10px] font-bold">BACKEND</Text></View>
                 <View className="bg-slate-100 px-1.5 py-0.5 rounded"><Text className="text-[10px] font-bold text-red-600">SECURITY</Text></View>
              </View>
           </View>
        </View>

        <View className="p-4 bg-white">
           <Text className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-2">Description</Text>
           <View className="space-y-3">
              <Text className="text-[15px] leading-relaxed text-slate-700 mb-2">
                We need to transition our current JWT implementation to a full OAuth2 flow. This includes updating the middleware to support refresh tokens and implementing scope-based authorization.
              </Text>
              <Text className="text-[15px] leading-relaxed text-slate-700">• Update /authorize endpoint</Text>
              <Text className="text-[15px] leading-relaxed text-slate-700">• Configure PKCE for mobile clients</Text>
              <Text className="text-[15px] leading-relaxed text-slate-700">• Migrate existing user sessions</Text>
           </View>
        </View>

        <View className="px-4 py-3 bg-white border-t border-slate-100">
           <View className="flex-row items-center justify-between mb-3">
              <Text className="text-sm font-bold uppercase tracking-wider text-slate-500">Attachments (2)</Text>
              <TouchableOpacity><Text className="text-primary text-sm font-medium">View All</Text></TouchableOpacity>
           </View>
           <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row pb-2">
              <Card className="w-32 mr-3 p-0 overflow-hidden">
                 <View className="aspect-video bg-blue-50 items-center justify-center">
                    <MaterialCommunityIcons name="file-document-outline" size={24} color="#137fec" />
                 </View>
                 <View className="p-1.5"><Text className="text-[10px] font-medium" numberOfLines={1}>spec_v2.pdf</Text></View>
              </Card>
              <Card className="w-32 mr-3 p-0 overflow-hidden">
                 <View className="aspect-video bg-green-50 items-center justify-center">
                    <MaterialCommunityIcons name="image-outline" size={24} color="#10b981" />
                 </View>
                 <View className="p-1.5"><Text className="text-[10px] font-medium" numberOfLines={1}>auth_flow_diagram.png</Text></View>
              </Card>
           </ScrollView>
        </View>

        <View className="mt-4 px-4 pb-24">
           <Text className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">Activity & Discussion</Text>
           <View className="space-y-6">
              <View className="flex-row">
                 <View className="w-8 h-8 rounded-full bg-slate-100 items-center justify-center mr-4">
                    <MaterialCommunityIcons name="history" size={16} color="#64748b" />
                 </View>
                 <View className="flex-1 pt-1">
                    <Text className="text-xs text-slate-500"><Text className="font-semibold text-slate-700">Alex Rivera</Text> changed status to <Text className="text-primary font-bold">In Progress</Text></Text>
                    <Text className="text-[10px] text-slate-400 mt-0.5">2 hours ago</Text>
                 </View>
              </View>
              <View className="flex-row">
                 <View className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden mr-4">
                    <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxwmfMPtPn-vE6ez5YcLXXhy2gEio5v70fIBbSD6zAGcnhI0LdTFGC_0jJh8kHEPolD9UGBB_RkQqwYLfNSf-Cj_4y9ejoq9EfVpAG0yHFb4zIrKRhnibyfvhn79Ce0gWdVKD-vmrpXn-Ll0_tMasmt8dFmDNBrPW7Hi39-9s7sIjI36-t5oXzl_sLlgg12etJX-HKrrjimdqlkoxHirCyU2f9gDf6syjaMb0vbi-2TugPzfB-7fHQgCcqufnAVCQaUJf0oy0CTUyq' }} className="w-full h-full" />
                 </View>
                 <View className="flex-1 bg-slate-50 p-3 rounded-xl border border-slate-100 shadow-sm">
                    <View className="flex-row items-center justify-between mb-1">
                       <Text className="text-[13px] font-bold">Sarah Smith</Text>
                       <Text className="text-[10px] text-slate-400">1 hour ago</Text>
                    </View>
                    <Text className="text-sm text-slate-700">I've uploaded the new OAuth flow diagrams. Alex, can you review the session timeout parameters?</Text>
                 </View>
              </View>
           </View>
        </View>
      </ScrollView>

      <View className="absolute bottom-0 left-0 right-0 bg-white border-t border-slate-100 px-4 py-3 pb-8">
         <View className="flex-row items-center">
            <TouchableOpacity><MaterialCommunityIcons name="paperclip" size={24} color="#94a3b8" /></TouchableOpacity>
            <View className="flex-1 bg-slate-100 rounded-full px-4 py-2 ml-3">
               <TextInput placeholder="Add a comment..." className="text-sm" />
            </View>
            <TouchableOpacity className="bg-primary w-9 h-9 rounded-full items-center justify-center ml-3">
               <MaterialCommunityIcons name="arrow-up" size={20} color="white" />
            </TouchableOpacity>
         </View>
      </View>
    </SafeAreaView>
  );
}
