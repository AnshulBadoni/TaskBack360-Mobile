import { SafeAreaView } from "react-native-safe-area-context";
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Card } from '../components/Card';
import { useRouter } from 'expo-router';

export default function ContextualChatScreen() {
   const router = useRouter();

   return (
      <SafeAreaView className="flex-1 bg-white">
         <View className="bg-white border-b border-slate-200 pt-2">
            <View className="flex-row items-center p-4 pb-2 justify-between">
               <View className="flex-row items-center flex-1">
                  <TouchableOpacity onPress={() => router.back()} className="mr-3 p-2">
                     <MaterialCommunityIcons name="chevron-left" size={24} color="#64748b" />
                  </TouchableOpacity>
                  <View className="flex-col">
                     <Text className="text-slate-900 text-lg font-bold leading-tight">Anshul Badoni</Text>
                     <View className="flex-row items-center">
                        <View className="w-2 h-2 rounded-full bg-green-500 mr-1.5" />
                        <Text className="text-slate-500 text-xs">Active now</Text>
                     </View>
                  </View>
               </View>
               <TouchableOpacity className="bg-primary/10 px-4 py-1.5 rounded-full flex-row items-center">
                  <MaterialCommunityIcons name="link-variant" size={14} color="#137fec" />
                  <Text className="text-primary text-sm font-bold ml-1">Link Task</Text>
               </TouchableOpacity>
            </View>
         </View>

         <ScrollView className="flex-1 p-4" showsVerticalScrollIndicator={false}>
            <View className="items-center mb-6 mt-2">
               <Text className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest">Today</Text>
            </View>

            <View className="flex-row items-end mb-6 max-w-[85%]">
               <View className="w-9 h-9 rounded-full border border-slate-200 overflow-hidden mr-3">
                  <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWOTyf1KHNs0haridjsWHD7HLuPwh7Wxz6dYNOw_xqn7dqv9tOEFcPqgySlriAPNRm-TSKhSrg4Qdo0AqL_hGJwbvHGX0c_Lgfy3vvjLtbvHSo79V7dGhHEoIAiW3p5h5S5ECqvVl18gOvW9xQMcHG4Z7WKURB3cdolAHsYFi5p61Vzw2W7V6vk-IdQuh38j1Jg6VyogNnU7W6CeRZPRdy-cjxMw-i0ldykVTKwuIWoRCPW25BsIVjsTAiP26bVtL_cHyNT0jY3T2X' }} className="w-full h-full" />
               </View>
               <View className="flex-col">
                  <Text className="text-slate-500 text-[12px] font-medium ml-1 mb-1">Anshul Badoni</Text>
                  <View className="rounded-2xl rounded-bl-none px-4 py-3 bg-slate-50 border border-slate-100 shadow-sm">
                     <Text className="text-slate-800 text-[15px]">Hey, have you had a chance to look at the new API documentation for #402?</Text>
                  </View>
               </View>
            </View>

            <Card className="mx-auto w-[90%] mb-6 p-4">
               <View className="flex-row">
                  <View className="flex-1">
                     <View className="flex-row items-center mb-2">
                        <Text className="text-[11px] font-bold text-slate-400 mr-2 uppercase tracking-wider">Linked Task</Text>
                        <View className="bg-blue-100 px-2 py-0.5 rounded-full">
                           <Text className="text-blue-600 text-[10px] font-bold uppercase">In Progress</Text>
                        </View>
                     </View>
                     <Text className="text-slate-900 text-base font-bold mb-1">Refactor Auth Middleware</Text>
                     <Text className="text-slate-500 text-sm">#402 • High Priority • Jira Cloud</Text>
                     <View className="mt-4 flex-row items-center justify-between">
                        <View className="flex-row -space-x-2">
                           <View className="w-6 h-6 rounded-full border-2 border-white bg-slate-200" />
                           <View className="w-6 h-6 rounded-full border-2 border-white bg-slate-300 -ml-2" />
                        </View>
                        <TouchableOpacity className="flex-row items-center">
                           <Text className="text-primary text-sm font-semibold">View Details</Text>
                           <MaterialCommunityIcons name="arrow-right" size={14} color="#137fec" className="ml-1" />
                        </TouchableOpacity>
                     </View>
                  </View>
               </View>
            </Card>

            <View className="flex-row items-end justify-end mb-6">
               <View className="flex-col items-end max-w-[85%]">
                  <Text className="text-slate-500 text-[12px] font-medium mr-1 mb-1">Me</Text>
                  <View className="rounded-2xl rounded-br-none px-4 py-3 bg-primary shadow-sm">
                     <Text className="text-white text-[15px]">Just finished it. It looks good to go! I've updated the status on Jira as well.</Text>
                  </View>
               </View>
            </View>
            <View className="h-20" />
         </ScrollView>

         <View className="bg-white border-t border-slate-200 p-4 pb-8">
            <View className="flex-row items-center">
               <TouchableOpacity className="w-10 h-10 items-center justify-center rounded-full bg-slate-100 mr-3">
                  <MaterialCommunityIcons name="plus" size={24} color="#64748b" />
               </TouchableOpacity>
               <View className="flex-1 bg-slate-100 rounded-full px-5 py-2.5">
                  <TextInput placeholder="Message Alex..." className="text-[15px]" placeholderTextColor="#94a3b8" />
               </View>
               <TouchableOpacity className="w-10 h-10 items-center justify-center rounded-full bg-primary ml-3 shadow-lg">
                  <MaterialCommunityIcons name="send" size={20} color="white" />
               </TouchableOpacity>
            </View>
         </View>
      </SafeAreaView>
   );
}
