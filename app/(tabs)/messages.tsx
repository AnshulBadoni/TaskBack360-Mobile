import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function MessagesScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-background-dark">
      <View className="bg-white dark:bg-background-dark border-b border-slate-200 dark:border-slate-800">
        <View className="flex-row items-center p-4 pb-2 justify-between">
          <View className="w-10 h-10 rounded-full border-2 border-primary/20 overflow-hidden">
             <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHi5bbZ8n0Z5PKc8bB-Mgb6tl-uovZu5kMQSHzUyNN4xwPRSRg5hVXUbp8je-CzKIsXspjQcxiXPT52Gg_xLRPAeFWpL7N5MOAO6UzOKmIZibAYUg81oo35VejPPBJR839iFsTBufKZT-sA3XLOvkFtppIODiTXnoQwmAJ1zYwD2a6og-Dd6npnjQfeTkGdPAqKowhcOXYlrWmHI8c8JvuauwzhRB6P2TKnH4b8dcm3hKLMTLi_PRgLq1HuorehHYFIDV_cYm2Nx2R' }} className="w-full h-full" />
          </View>
          <Text className="text-slate-900 dark:text-white text-lg font-bold">Messages</Text>
          <TouchableOpacity className="w-10 h-10 items-center justify-end flex-row">
            <MaterialCommunityIcons name="magnify" size={24} color="#64748b" />
          </TouchableOpacity>
        </View>

        <View className="px-4 pb-1">
          <View className="flex-row">
            <TouchableOpacity className="border-b-2 border-primary pb-2 pt-2 mr-6">
              <Text className="text-sm font-semibold text-primary">All</Text>
            </TouchableOpacity>
            <TouchableOpacity className="border-b-2 border-transparent pb-2 pt-2 mr-6">
              <Text className="text-sm font-semibold text-slate-500">Unread</Text>
            </TouchableOpacity>
            <TouchableOpacity className="border-b-2 border-transparent pb-2 pt-2 mr-6">
              <Text className="text-sm font-semibold text-slate-500">Channels</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView className="flex-1">
         <TouchableOpacity className="flex-row items-center p-4 border-b border-slate-50">
            <View className="relative">
               <View className="w-14 h-14 rounded-full border-2 border-slate-200 overflow-hidden">
                  <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUUq62xVH8536JEzwf1vz4Vg7-eaRJuj2rgVEyk_mEK_MEb5ilVKkS-6VzBeKn3c5GFbBXgjWHibUCEuLc03TwwCojdqwwfHXn8P6G6iwRjBmh6QRL1i5GL3JfEJqZjJYwWOkdNWiFb5MRPO5RgeIK_CQ146XdbfypRrwLRnvT61r5BVZU_DGJnWz--2vd8f8sgmvSSthGPG1BU66sQUU7-lQltzGTy0OjqXqNAE-AMfYnfwgY9xCCfSDuLxpkdTdXqiEV9bphO_84' }} className="w-full h-full" />
               </View>
               <View className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-green-500 border-2 border-white" />
            </View>
            <View className="flex-1 ml-4">
               <View className="flex-row justify-between items-baseline mb-0.5">
                  <Text className="text-slate-900 dark:text-white text-base font-semibold">Sarah Chen</Text>
                  <Text className="text-primary text-xs font-semibold">2m ago</Text>
               </View>
               <View className="flex-row justify-between items-center">
                  <Text className="text-slate-600 dark:text-slate-400 text-sm font-medium flex-1 mr-4" numberOfLines={1}>Can you review the latest Figma components? I've updated the spacing...</Text>
                  <View className="w-2.5 h-2.5 rounded-full bg-primary" />
               </View>
            </View>
         </TouchableOpacity>

         <TouchableOpacity className="flex-row items-center p-4 border-b border-slate-50">
            <View className="w-14 h-14 rounded-xl bg-primary/10 items-center justify-center border border-primary/30">
               <MaterialCommunityIcons name="tag" size={24} color="#137fec" />
            </View>
            <View className="flex-1 ml-4">
               <View className="flex-row justify-between items-baseline mb-0.5">
                  <Text className="text-slate-900 dark:text-white text-base font-semibold">#Q4-Roadmap</Text>
                  <Text className="text-slate-500 text-xs">15m ago</Text>
               </View>
               <Text className="text-slate-500 text-sm" numberOfLines={1}>
                  <Text className="font-medium text-slate-700 dark:text-slate-200">Marcus: </Text>
                  The sprint timeline has been updated in Jira.
               </Text>
            </View>
         </TouchableOpacity>

         <TouchableOpacity className="flex-row items-center p-4 border-b border-slate-50">
            <View className="w-14 h-14 rounded-full border-2 border-slate-200 overflow-hidden">
               <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFPY46iJchCkJP3qHP22iq2qy730kchOOqN4BwZLZKs9u_96VdK1w9-kE5Mb6i9QHCuyfU6C6o5LpCCGjZQnkMpl2-wbk_Xvo3SJ_dCQsTH4x03mUuUHmL3liN9zd2YimnBTYHxZ0hrteHYA7g78FuMhG8qMg5lJYIQFAjmTCe8K7L8ZWxqOslHCNs_EAHIaz33fLXtNyahoKSIy81Ti6stdhffCCU4Y46e20iUgg0LIUbLS4E_2MZ4JAByD-__wAxsxBaUdDWTZXy' }} className="w-full h-full" />
            </View>
            <View className="flex-1 ml-4">
               <View className="flex-row justify-between items-baseline mb-0.5">
                  <View className="flex-row items-center">
                     <Text className="text-slate-900 dark:text-white text-base font-semibold mr-2">Marcus Wright</Text>
                     <View className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">
                        <Text className="text-[10px] text-slate-500 font-medium">Focusing</Text>
                     </View>
                  </View>
                  <Text className="text-slate-500 text-xs">1h ago</Text>
               </View>
               <Text className="text-slate-500 text-sm" numberOfLines={1}>The API documentation is ready for your final sign-off before the sprint.</Text>
            </View>
         </TouchableOpacity>
      </ScrollView>

      <TouchableOpacity className="absolute bottom-6 right-6 w-14 h-14 bg-primary rounded-2xl items-center justify-center shadow-lg shadow-primary/40">
        <MaterialCommunityIcons name="plus" size={32} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
