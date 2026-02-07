import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Card } from '../../components/Card';

export default function ProjectsScreen() {
  const projects = [
    { id: 1, title: 'Marketing Redesign', sprint: 'Sprint 12', status: 'Active', progress: 85, icon: 'rocket-launch', iconBg: 'bg-blue-100', iconColor: '#137fec', time: '2h ago' },
    { id: 2, title: 'Billing API Refactor', sprint: 'Platform', status: 'On Track', progress: 42, icon: 'cash-multiple', iconBg: 'bg-emerald-100', iconColor: '#059669', time: '5m ago' },
    { id: 3, title: 'Design System V2', sprint: 'Core', status: 'Review', progress: 92, icon: 'palette', iconBg: 'bg-purple-100', iconColor: '#9333ea', time: 'Yesterday' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <View className="bg-white border-b border-slate-100 px-4 pt-4 pb-2">
        <View className="flex-row items-center justify-between mb-4">
           <Text className="text-3xl font-bold tracking-tight text-slate-900">Projects</Text>
           <View className="flex-row items-center">
              <TouchableOpacity className="w-10 h-10 items-center justify-center rounded-full bg-white border border-slate-200">
                 <MaterialCommunityIcons name="bell-outline" size={20} color="#0d141b" />
              </TouchableOpacity>
              <View className="w-10 h-10 rounded-full border-2 border-white overflow-hidden ml-3 shadow-sm">
                 <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7_8MbfMV08DVTuEt1a3bSCAFSqy7VxvmhlGiBrrNIHiGpz6ekz5fJBRvqq6LxNEnH8SXMbyr8Kcim4SFrvv0us1f4Dtx72EGWDzchc2kR2QXPgP4eLSKNP8Dyol0Sly5dWjS10pwSX3HRXl3Sv8Pd5w3JbkEEvuaTRAU2w6H84ruB8reWTOkuDcJniAPJGs6VtSMtEnGgH_uwgKSRvesKBK9tyhlCCtpkLffyr0v7hbVN2E8ppaoOI3mHLM3fQ8zmU_gjW5k4496v' }} className="w-full h-full" />
              </View>
           </View>
        </View>

        <View className="relative mb-4 justify-center">
           <View className="absolute left-3 z-10">
              <MaterialCommunityIcons name="magnify" size={20} color="#94a3b8" />
           </View>
           <TextInput
             className="w-full h-12 bg-slate-100 rounded-xl pl-10 pr-12 text-base"
             placeholder="Search tasks, projects..."
             placeholderTextColor="#94a3b8"
           />
           <TouchableOpacity className="absolute right-3">
              <MaterialCommunityIcons name="tune-variant" size={20} color="#94a3b8" />
           </TouchableOpacity>
        </View>

        <View className="flex-row items-center justify-between pb-2">
           <View className="flex-row bg-slate-100 p-1 rounded-lg w-40">
              <TouchableOpacity className="flex-1 bg-white rounded-md items-center py-1.5 shadow-sm">
                 <Text className="text-xs font-semibold">Grid</Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex-1 items-center py-1.5">
                 <Text className="text-xs font-semibold text-slate-500">List</Text>
              </TouchableOpacity>
           </View>
           <TouchableOpacity className="flex-row items-center">
              <Text className="text-sm font-medium text-slate-500">Sort: Recent</Text>
              <MaterialCommunityIcons name="chevron-down" size={16} color="#64748b" />
           </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1 px-4 pt-4">
         <View>
            {projects.map((project) => (
              <Card key={project.id} className="w-full mb-4 p-4">
                 <View className="flex-row justify-between items-start mb-4">
                    <View className="flex-row items-center flex-1">
                       <View className={`w-10 h-10 rounded-lg ${project.iconBg} items-center justify-center`}>
                          <MaterialCommunityIcons name={project.icon as any} size={22} color={project.iconColor} />
                       </View>
                       <View className="ml-3 flex-1">
                          <Text className="font-bold text-slate-900" numberOfLines={1}>{project.title}</Text>
                          <Text className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">{project.status} • {project.sprint}</Text>
                       </View>
                    </View>
                    <TouchableOpacity><MaterialCommunityIcons name="dots-horizontal" size={20} color="#94a3b8" /></TouchableOpacity>
                 </View>
                 <View>
                    <View className="flex-row justify-between mb-1.5">
                       <Text className="text-xs font-medium text-slate-500">Progress</Text>
                       <Text className="text-xs font-bold text-primary">{project.progress}%</Text>
                    </View>
                    <View className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden mb-4">
                       <View className="bg-primary h-full" style={{ width: `${project.progress}%` }} />
                    </View>
                    <View className="flex-row items-center justify-between">
                       <View className="flex-row items-center">
                          <View className="w-7 h-7 rounded-full border-2 border-white bg-slate-200" />
                          <View className="w-7 h-7 rounded-full border-2 border-white bg-slate-300 -ml-2" />
                          <View className="w-7 h-7 rounded-full border-2 border-white bg-slate-100 items-center justify-center -ml-2">
                             <Text className="text-[10px] font-bold text-slate-500">+4</Text>
                          </View>
                       </View>
                       <View className="flex-row items-center">
                          <MaterialCommunityIcons name="clock-outline" size={14} color="#94a3b8" />
                          <Text className="text-[11px] text-slate-400 font-medium ml-1">{project.time}</Text>
                       </View>
                    </View>
                 </View>
              </Card>
            ))}
         </View>
         <View className="h-24" />
      </ScrollView>

      <TouchableOpacity className="absolute bottom-6 right-6 w-14 h-14 bg-primary rounded-2xl items-center justify-center shadow-xl">
         <MaterialCommunityIcons name="plus" size={32} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
