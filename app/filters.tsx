import { SafeAreaView } from "react-native-safe-area-context";
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Button } from '../components/Button';

export default function FiltersScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="items-center pt-2">
         <View className="h-1.5 w-10 rounded-full bg-slate-300" />
      </View>
      <View className="flex-row items-center justify-between px-5 pt-4 pb-2">
        <TouchableOpacity onPress={() => router.back()}><MaterialCommunityIcons name="close" size={24} color="#64748b" /></TouchableOpacity>
        <Text className="text-lg font-bold tracking-tight text-slate-900">Advanced Filters</Text>
        <TouchableOpacity><Text className="text-primary text-sm font-semibold">Reset</Text></TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false}>
        <View className="py-4">
           <View className="relative justify-center">
              <View className="absolute left-3 z-10">
                 <MaterialCommunityIcons name="magnify" size={20} color="#94a3b8" />
              </View>
              <TextInput
                placeholder="Search tasks, labels..."
                className="w-full bg-slate-100 rounded-lg py-2.5 pl-10 pr-4 text-base"
                placeholderTextColor="#64748b"
              />
           </View>
           <View className="mt-4">
              <Text className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">Recent Searches</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row">
                 {['Refactor', 'Sprint 4', 'Bug Fixes'].map((search) => (
                   <TouchableOpacity key={search} className="flex-row items-center bg-slate-100 px-3 py-1.5 rounded-full mr-2 border border-transparent">
                      <MaterialCommunityIcons name="history" size={14} color="#64748b" />
                      <Text className="text-sm font-medium text-slate-700 ml-1.5">{search}</Text>
                   </TouchableOpacity>
                 ))}
              </ScrollView>
           </View>
        </View>

        <View className="py-6 border-t border-slate-100">
           <View className="flex-row items-center justify-between mb-4">
              <Text className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Assignee</Text>
              <TouchableOpacity><Text className="text-primary text-xs font-semibold">Select Me</Text></TouchableOpacity>
           </View>
           <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row">
              <View className="items-center mr-4">
                 <View className="relative">
                    <View className="w-14 h-14 rounded-full border-2 border-primary p-0.5 overflow-hidden">
                       <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDG817yjCtYzHZ80W4-tHRHNvV3sC7pTb2k_fpXUGoBQL_qUBHmZ8KL8mKLtdYJ-5o-N8OnxJ8DcXosH6GOloYrwE-upvg2wRf9sBLIC8NI3rIIfU6UNTzMWsiVv7G7z-3zwwlbvgkZ9Zam6v_4Eswp_tDGkAKAsWk57wFANBT_d7GCizXU-4wSrdht9yYdqWG1f3iPCDbdMdLwGy3O9HLqfOxWco_-q0av_zJcyJuh94ds8p-IPVGJxWYqNyYhH8tMKjpK2gm9oLny' }} className="w-full h-full rounded-full" />
                    </View>
                    <View className="absolute -bottom-1 -right-1 bg-primary rounded-full p-0.5 border-2 border-white">
                       <MaterialCommunityIcons name="check" size={10} color="white" />
                    </View>
                 </View>
                 <Text className="text-xs font-medium text-slate-900 mt-2">Sarah</Text>
              </View>
              {/* More assignees here */}
           </ScrollView>
        </View>

        <View className="py-6 border-t border-slate-100">
           <Text className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-4">Priority Level</Text>
           <View className="flex-row flex-wrap">
              {[
                { label: 'Urgent', desc: 'High Impact', color: 'bg-red-500' },
                { label: 'High', desc: 'Important', color: 'bg-orange-500', active: true },
                { label: 'Medium', desc: 'Normal flow', color: 'bg-yellow-500' },
                { label: 'Low', desc: 'Flexible', color: 'bg-green-500' },
              ].map((p, i) => (
                <TouchableOpacity key={i} className={`w-[48%] flex-row items-center p-3 rounded-lg border mb-3 mr-[2%] ${p.active ? 'border-primary/40 bg-primary/5' : 'border-slate-100'}`}>
                   <View className={`w-1 h-8 rounded-full ${p.color}`} />
                   <View className="ml-3 flex-1">
                      <Text className="text-sm font-bold">{p.label}</Text>
                      <Text className="text-[10px] text-slate-400">{p.desc}</Text>
                   </View>
                   {p.active && <MaterialCommunityIcons name="check-circle" size={14} color="#137fec" />}
                </TouchableOpacity>
              ))}
           </View>
        </View>

        <View className="py-6 border-t border-slate-100">
           <Text className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-4">Workflow Status</Text>
           {['To Do', 'In Progress', 'Under Review', 'Done'].map((status, i) => (
              <TouchableOpacity key={i} className="flex-row items-center justify-between p-3 rounded-lg">
                 <View className="flex-row items-center">
                    <View className={`w-2 h-2 rounded-full mr-3 ${['bg-slate-300', 'bg-blue-400', 'bg-purple-400', 'bg-emerald-400'][i]}`} />
                    <Text className="text-sm font-medium">{status}</Text>
                 </View>
                 <MaterialCommunityIcons name={i === 1 || i === 2 ? "checkbox-marked" : "checkbox-blank-outline"} size={20} color="#137fec" />
              </TouchableOpacity>
           ))}
        </View>
        <View className="h-24" />
      </ScrollView>

      <View className="absolute bottom-0 left-0 right-0 bg-white/80 border-t border-slate-100 p-5">
         <Button title="Show 24 Tasks" onPress={() => router.back()} />
      </View>
    </SafeAreaView>
  );
}
