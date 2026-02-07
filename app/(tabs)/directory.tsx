import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function DirectoryScreen() {
  const members = [
    { id: 1, name: 'Sarah Chen', role: 'Lead Product Designer', status: 'Active', statusColor: 'bg-green-500', statusLabelColor: 'text-green-600', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHi5bbZ8n0Z5PKc8bB-Mgb6tl-uovZu5kMQSHzUyNN4xwPRSRg5hVXUbp8je-CzKIsXspjQcxiXPT52Gg_xLRPAeFWpL7N5MOAO6UzOKmIZibAYUg81oo35VejPPBJR839iFsTBufKZT-sA3XLOvkFtppIODiTXnoQwmAJ1zYwD2a6og-Dd6npnjQfeTkGdPAqKowhcOXYlrWmHI8c8JvuauwzhRB6P2TKnH4b8dcm3hKLMTLi_PRgLq1HuorehHYFIDV_cYm2Nx2R' },
    { id: 2, name: 'Marcus Wright', role: 'Senior Software Engineer', status: 'In a Meeting', statusColor: 'bg-amber-500', statusLabelColor: 'text-amber-600', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFPY46iJchCkJP3qHP22iq2qy730kchOOqN4BwZLZKs9u_96VdK1w9-kE5Mb6i9QHCuyfU6C6o5LpCCGjZQnkMpl2-wbk_Xvo3SJ_dCQsTH4x03mUuUHmL3liN9zd2YimnBTYHxZ0hrteHYA7g78FuMhG8qMg5lJYIQFAjmTCe8K7L8ZWxqOslHCNs_EAHIaz33fLXtNyahoKSIy81Ti6stdhffCCU4Y46e20iUgg0LIUbLS4E_2MZ4JAByD-__wAxsxBaUdDWTZXy' },
    { id: 3, name: 'Elena Rodriguez', role: 'Head of Marketing', status: 'Away', statusColor: 'bg-slate-300', statusLabelColor: 'text-slate-400', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUUq62xVH8536JEzwf1vz4Vg7-eaRJuj2rgVEyk_mEK_MEb5ilVKkS-6VzBeKn3c5GFbBXgjWHibUCEuLc03TwwCojdqwwfHXn8P6G6iwRjBmh6QRL1i5GL3JfEJqZjJYwWOkdNWiFb5MRPO5RgeIK_CQ146XdbfypRrwLRnvT61r5BVZU_DGJnWz--2vd8f8sgmvSSthGPG1BU66sQUU7-lQltzGTy0OjqXqNAE-AMfYnfwgY9xCCfSDuLxpkdTdXqiEV9bphO_84' },
    { id: 4, name: 'Sophia Liang', role: 'Product Manager', status: 'Active', statusColor: 'bg-green-500', statusLabelColor: 'text-green-600', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvsAFJjTKhs4rsa2jaHchXYPitWezSEL6LLb9UEuN6J3EuwM452KZZhnRvVkIL78T1yAsmXBfzkhA2D7LmBSdkr8Zxp-RGrG8TR0-7m4UVw-2w-kzRe-rCqCrCA_bTiM3K0unNh_XQwax2wjX1z-_GMuyRPd2idhNcwotsotw55fJdj6Bz5qRLcYoObz3eWWpqmZUuknzb-YYpM-PH2BCx1zBPijMDYr5SZD23BdxZIm9SLa-JjiFITZSRkNnH4KkXd7GlPIacV4WT' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="bg-white border-b border-slate-100">
        <View className="px-4 pt-4 pb-2">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-xl font-bold tracking-tight text-slate-900">Directory</Text>
            <TouchableOpacity className="p-2 bg-slate-50 rounded-full">
              <MaterialCommunityIcons name="account-plus-outline" size={24} color="#64748b" />
            </TouchableOpacity>
          </View>
          <View className="relative mb-4 justify-center">
            <View className="absolute left-3 z-10">
               <MaterialCommunityIcons name="magnify" size={20} color="#94a3b8" />
            </View>
            <TextInput
              className="w-full bg-slate-100 rounded-xl py-2.5 pl-10 pr-4 text-sm"
              placeholder="Search members..."
              placeholderTextColor="#64748b"
            />
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row mb-2">
             <TouchableOpacity className="px-4 py-1.5 rounded-full bg-slate-900 mr-2">
                <Text className="text-white text-sm font-medium">All</Text>
             </TouchableOpacity>
             {['Design', 'Engineering', 'Marketing', 'Sales'].map((dept) => (
                <TouchableOpacity key={dept} className="px-4 py-1.5 rounded-full bg-slate-100 mr-2">
                   <Text className="text-slate-600 text-sm font-medium">{dept}</Text>
                </TouchableOpacity>
             ))}
          </ScrollView>
        </View>
      </View>

      <ScrollView className="flex-1">
        {members.map((member) => (
          <TouchableOpacity key={member.id} className="flex-row items-center p-4 border-b border-slate-50">
            <View className="relative">
              <View className="w-14 h-14 rounded-full bg-slate-200 overflow-hidden">
                <Image source={{ uri: member.avatar }} className="w-full h-full" />
              </View>
              <View className={`absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-white ${member.statusColor}`} />
            </View>
            <View className="flex-1 ml-4">
               <Text className="text-base font-semibold text-slate-900">{member.name}</Text>
               <Text className="text-sm text-slate-500">{member.role}</Text>
               <Text className={`text-[11px] font-medium uppercase tracking-wider mt-0.5 ${member.statusLabelColor}`}>{member.status}</Text>
            </View>
            <View className="flex-row items-center">
               <TouchableOpacity className="p-2">
                  <MaterialCommunityIcons name="chat-outline" size={22} color="#137fec" />
               </TouchableOpacity>
               <TouchableOpacity className="p-2 ml-1">
                  <MaterialCommunityIcons name="dots-vertical" size={22} color="#94a3b8" />
               </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
        <View className="h-24" />
      </ScrollView>
    </SafeAreaView>
  );
}
