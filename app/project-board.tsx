import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Card } from '../components/Card';
import { useRouter } from 'expo-router';

export default function ProjectBoardScreen() {
  const router = useRouter();

  const collaborators = [
    { name: 'Alex', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCunFXIK_knzX0aWjqcWmRlptYGpL0gTZKXCPqOyoqWFFrEthH4SbTlkXjiSdYhjVL8zuNgBZnTq8-mcoNJjN44mBSsr7sZnhpfhmWgksrFw-VN6HLrNyzV66LAKFZpRVkih2foVGIe-fkuyHzhTDpEb0IyQFYcEmugF_0AJBs9kIZGk2lWjtHwkT2-QVU5DJCFY-kULG0oMAofQ-WRNnRCp0DHTPUwCmo0_q3oT7eAlaN6nZAwBITfOyoO0vTJMiyu0P8Usi4G2wmX' },
    { name: 'Sarah', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsbGtOKL_MYuZ7M4glrELtwrn1IghcvbzGcIvP4oiB1fnZJLSghtK4_RPYXWfa--AHM0Hafb4V2izPq9JBlubCeEzb1dN6lBhhDGWvhU567dVNOlIKwa9XTU35f0_LCWIam57J0GUhdJcAcL1SrESb-_tGf1aQ-FRYCMmKXGtuuJ3acEWBpckSjXPHaJEVFwdNdf5p-u1NxWTtEMhgR9sJhyBN1sRMT1ewnVvlawXZ00UgexmEunsN2Mpou8u7ZhRKNg6kvvbvg5yn' },
    { name: 'Jordan', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBn4ihpbDhe2TG2_aAFiw0NZMn--BfUoeR7r0FI5tUH17EAOvoXStmaTa_5QqcvgeskbcS7l2o4DnlHXm7QfZqAJgM5ZThxcEIEc4cR0T07SYXKllNlytwUesBf2TYGOMfL-rL7CrJaJFqRe6Igm7qNrb_8Od7LVWQu5sdHyCT_OJ8ZuSw_NDBrsyPugsJl55wJKT6zFzrYnhMQOiIO2THRwGhqN1yuClBmfAr20LFgHPhLoCr0PkZmnAc87z2_uvMeKf5DUeI6C8r' },
    { name: 'Lena', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7fP40D4MoAwtl40jS9HgqD6Wm2ZUXOCcg1jz2B_KW0Yretv0JG5Ge5hjq_kmjRWxKgKmq-SBRquFIqSH_FDLAqvXHQbiXL1XbkYWhA8pmzJ-jZ4r594VhdEVo1ShAzgN9XdWyuv4IdQZbhykeZajlBrag9OXGudAopRAIzMkrttDr3Vm7BI1EWPsJVQTBnT5cxeubHeGD3ZC_lRNdhtZGZ3fGg5Z9MaFL6Y9IxWxDUGrfRlH8WVNVSZgTMd4QwjmX-gSPPMdzBIvw' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="px-5 pt-4 pb-4 border-b border-slate-50">
        <View className="flex-row items-center justify-between">
           <TouchableOpacity onPress={() => router.back()}><MaterialCommunityIcons name="chevron-left" size={28} color="black" /></TouchableOpacity>
           <View className="items-center">
              <Text className="text-[17px] font-semibold tracking-tight text-slate-900">Nebula Core</Text>
              <View className="flex-row items-center mt-1">
                 <View className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-1.5" />
                 <Text className="text-[11px] font-medium text-blue-600 uppercase tracking-wide">In Progress</Text>
              </View>
           </View>
           <TouchableOpacity><MaterialCommunityIcons name="dots-horizontal" size={24} color="black" /></TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false}>
        <View className="mt-8 mb-10">
           <View className="flex-row items-center justify-between mb-5">
              <Text className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">Active Collaborators</Text>
              <TouchableOpacity><Text className="text-blue-600 text-[12px] font-medium">View Board</Text></TouchableOpacity>
           </View>
           <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row">
              {collaborators.map((collab, i) => (
                <View key={i} className="items-center mr-4">
                   <View className="w-13 h-13 rounded-full overflow-hidden border border-black/5 relative">
                      <Image source={{ uri: collab.avatar }} className="w-full h-full" />
                      {i < 2 && <View className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />}
                   </View>
                   <Text className="text-[11px] font-medium text-slate-900 mt-2">{collab.name}</Text>
                </View>
              ))}
              <TouchableOpacity className="items-center">
                 <View className="w-13 h-13 rounded-full border border-dashed border-slate-300 items-center justify-center">
                    <MaterialCommunityIcons name="plus" size={24} color="#94a3b8" />
                 </View>
                 <Text className="text-[11px] font-medium text-slate-400 mt-2">Invite</Text>
              </TouchableOpacity>
           </ScrollView>
        </View>

        <View className="mb-10">
           <View className="flex-row items-center justify-between mb-5 border-b border-slate-50 pb-3">
              <View className="flex-row items-center">
                 <Text className="font-bold text-[20px] tracking-tight mr-2">Sprint 12</Text>
                 <View className="bg-black px-2 py-0.5 rounded ml-2">
                    <Text className="text-white text-[9px] font-bold uppercase tracking-wider">Active</Text>
                 </View>
              </View>
              <Text className="text-[12px] text-slate-400">8 Tasks</Text>
           </View>

           <View className="rounded-xl border border-slate-100 overflow-hidden">
              <Card className="p-5 border-b border-slate-50">
                 <Text className="text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-2">Infrastructure</Text>
                 <Text className="text-[15px] font-medium leading-tight mb-4">Refactor API Gateway for multi-region support</Text>
                 <View className="flex-row items-center justify-between">
                    <View className="flex-row items-center">
                       <View className="w-6 h-6 rounded-full bg-slate-200" />
                       <View className="flex-row items-center ml-4">
                          <MaterialCommunityIcons name="calendar-blank-outline" size={14} color="#94a3b8" />
                          <Text className="text-[12px] text-slate-400 ml-1">Tomorrow</Text>
                       </View>
                    </View>
                    <MaterialCommunityIcons name="chat-outline" size={20} color="#94a3b8" />
                 </View>
              </Card>

              <Card className="p-5 border-b border-slate-50">
                 <Text className="text-[10px] font-bold text-purple-600 uppercase tracking-wider mb-2">Design System</Text>
                 <Text className="text-[15px] font-medium leading-tight mb-4">Update color variables to support dynamic themes</Text>
                 <View className="flex-row items-center justify-between">
                    <View className="flex-row items-center">
                       <View className="w-6 h-6 rounded-full bg-slate-200" />
                       <View className="flex-row items-center ml-4">
                          <MaterialCommunityIcons name="history" size={14} color="#ef4444" />
                          <Text className="text-[12px] text-red-500 font-medium ml-1">Overdue</Text>
                       </View>
                    </View>
                    <MaterialCommunityIcons name="chat-outline" size={20} color="#94a3b8" />
                 </View>
              </Card>
           </View>
        </View>

        <TouchableOpacity className="flex-row items-center justify-between py-4">
           <View className="flex-row items-center">
              <MaterialCommunityIcons name="chevron-down" size={24} color="#94a3b8" />
              <Text className="font-semibold text-[17px] ml-2">Product Backlog</Text>
           </View>
           <Text className="text-[12px] text-slate-400">42 Tasks</Text>
        </TouchableOpacity>
        <View className="h-32" />
      </ScrollView>

      <TouchableOpacity className="absolute bottom-24 right-6 w-14 h-14 bg-black rounded-full items-center justify-center shadow-xl">
         <MaterialCommunityIcons name="plus" size={28} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
