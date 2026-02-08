import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Card } from '../../components/Card';
import { getProjects } from "../api/project";
import { getTasks } from "../api/task";
import Progress from "../../components/Progress";
import { Link, router } from "expo-router";

export default function HomeScreen() {
   const [user, setUser] = useState(null);
   const [projects, setProjects] = useState([]);
   const [tasks, setTasks] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      getData();
   }, [])

   const getData = async () => {
      try {
         const [project, task] = await 
         Promise.all([
            getProjects(),
            getTasks()
         ])
         setProjects(project.data);
         setTasks(task.data);
      } catch (error) {
         console.error('Error fetching data:', error);
      } finally {
         setLoading(false);
      }
   }

   return (
      <SafeAreaView className="flex-1 bg-white">
         <View className="px-6 py-4 flex-row items-center justify-between border-b border-slate-100">
            <View className="flex-row items-center">
               <View className="w-9 h-9 rounded-full border border-gray-800 overflow-hidden">
                  <Image
                     source={{ uri: 'https://cdni.pornpics.de/1280/7/542/95734520/95734520_012_969e.jpg' }}
                     className="w-full h-full"
                  />
               </View>
               <View className="ml-3">
                  <Text className="text-sm font-semibold text-slate-900 leading-none">Anshul Badoni</Text>
                  <Text className="text-[11px] text-slate-500 mt-1 font-medium uppercase tracking-wider">Software Engineer</Text>
               </View>
            </View>
            <View className="flex-row items-center space-x-5">
               <TouchableOpacity className="mx-2">
                  <MaterialCommunityIcons name="magnify" size={22} color="#5F6368" />
               </TouchableOpacity>
               <TouchableOpacity className="relative mx-2">
                  <MaterialCommunityIcons name="bell-outline" size={22} color="#5F6368" />
                  <View className="absolute top-0.5 right-0.5 w-2 h-2 bg-primary rounded-full border-2 border-white" />
               </TouchableOpacity>
            </View>
         </View>

         <ScrollView className="flex-1 bg-gray-50" showsVerticalScrollIndicator={false}>
            <View className="px-6 pt-8 pb-4">
               <Text className="text-2xl font-bold tracking-tight text-slate-900">Good morning, Anshul</Text>
               <Text className="text-slate-500 text-[15px] mt-1.5">You have 4 priorities for today's sprint.</Text>
            </View>

            <View className="mt-8">
               <View className="flex-row items-center justify-between px-6 mb-5">
                  <Text className="font-semibold text-[17px] text-slate-900">Active Projects</Text>
                  <TouchableOpacity>
                     <Text className="text-primary text-[13px] font-semibold">View All</Text>
                  </TouchableOpacity>
               </View>
               <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mx-6">
                  {projects && projects.length > 0 && projects.map((project: any, idx: number) => (
                     <Card key={project.id} className={`min-w-[280px] max-w-[300px] p-5 mr-4 ${idx === 0 ? 'bg-gray-900' : 'bg-white'}`}>
                        <View className="flex-row justify-between items-start mb-6">
                           <View className="w-10 h-10 rounded-md bg-slate-50 items-center justify-center border border-slate-100">
                              <MaterialCommunityIcons name="rocket-launch" size={20} color="#1A73E8" />
                           </View>
                           <View className="items-center justify-center w-11 h-11">
                              {/* progress component */}
                              <Progress project={project} isFirst={idx === 0} />
                           </View>
                        </View>
                        <Text className={`font-semibold text-[15px] mb-1 ${idx === 0 ? 'text-white' : 'text-black'}`}>{project.name}</Text>
                        <Text className={`text-sm mb-5 ${idx === 0 ? 'text-white' : 'text-black'}`}>{project.description}</Text>
                        <View className="flex-row items-center justify-between">
                           <View className="flex-row items-center">
                              <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSehfyQCYw6Fw19Ub6B6wbFlQ_kpDmd3LuqhWzaBMl0gFEgjo2dtryTUNhfA9xO7wSii_RNQFvgXXoXpA7V2K5yGI2hXkt6Z1D5HmARB72FQFyPo924oTGOLtxvor1oX4gQZEgSzzp3fmc9L9zH8B-l-oYR3opb_nJi4Xzkcs9WhVPG_3EIWRAJ95UsDK0LAewOn_75hXGiFgGxazU8bACqHPqvPPQAKGOOAhwwrdMmtbSNtRwqUpMGKEGCfxT_o4Iq0M5-wySz9DQ' }} className="w-7 h-7 rounded-full border-2 border-white shadow-sm" />
                              <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKuNKxNeCQ6cFWJn2D0nWY5aRxhfWcLrmBFNqhW_oK_rfaN8OmYyHUsV84fedgGCd-h1jCZyA-vKbzlsFxEWE2ZQ5vHATvJl9qvs5qlJ-gYCR-u0PfdcoRsmHYRr_4BFTH4k4nt_nKDPn2gPALlgGVzecEehV3SVbw88MbkMmhf3JtSFwUuBYfmk4wTKcKkGDa1sklejilZ7rH3D-OE4wKMuhYg5yhLU0eBBAXm5INIDyBJDlOcUNQkhRJ00li160egJR7wXNca0xg' }} className="w-7 h-7 rounded-full border-2 border-white shadow-sm -ml-2" />
                              <View className="w-7 h-7 rounded-full border-2 border-white bg-slate-100 items-center justify-center -ml-2">
                                 <Text className="text-[10px] font-bold text-slate-500">+3</Text>
                              </View>
                           </View>
                           <View className="bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                              <Text className="text-[11px] font-medium text-black">Active</Text>
                           </View>
                        </View>
                     </Card>
                  ))}
               </ScrollView>
            </View>

            <View className="mt-10 px-6">
               <Text className="font-semibold text-lg text-slate-900 mb-5">My Priority Tasks</Text>
               <View>
                  {tasks && tasks.length > 0 && tasks.map((task: any, idx: number) => (
                     <Card onPress={() => router.push(`/task?task=${JSON.stringify(task)}`)} key={task.id} className="bg-gradient-to-b from-white to-gray-50/30 rounded-2xl shadow-md mb-2 overflow-hidden border border-gray-100">
                        {/* Accent Bar */}
                        <View className="h-1 bg-gradient-to-r from-blue-400 to-purple-400" />

                        <View className="p-2">
                           {/* Header */}
                           <View className="flex-row items-start justify-between mb-6">
                              <View className="flex-1">
                                 <Text className="text-lg font-bold text-gray-900 tracking-tight">
                                    {task.name}
                                 </Text>
                                 <Text className="text-sm text-gray-500 ">
                                    {task.description}
                                 </Text>
                              </View>

                              {/* Floating Status */}
                              <View className="px-3 py-1.5 bg-blue-50 rounded-md shadow-sm border border-gray-100">
                                 <View className="flex-row items-center">
                                    <Text className="text-xs text-blue-500 font-bold">{task.status.split("_").join(" ")}</Text>
                                 </View>
                              </View>
                           </View>

                           {/* Footer */}
                           <View className="flex-row items-center justify-between">
                              <View className="flex-row items-center gap-5">
                                 {/* Date Badge */}
                                 <View className="flex-row items-center">
                                    <View className="w-8 h-8 bg-orange-100 rounded-full items-center justify-center mr-2">
                                       <MaterialCommunityIcons name="calendar-today" size={14} color="#EA580C" />
                                    </View>
                                    <Text className="text-[12px] text-gray-700 font-medium">Today</Text>
                                 </View>

                                 {/* Time */}
                                 <View className="flex-row items-center">
                                    <View className="w-8 h-8 bg-blue-100 rounded-full items-center justify-center mr-2">
                                       <MaterialCommunityIcons name="clock-outline" size={14} color="#2563EB" />
                                    </View>
                                    <Text className="text-[12px] text-gray-700 font-medium">2:00 PM</Text>
                                 </View>
                              </View>

                              {/* Actions */}
                              <View className="flex-row gap-2">
                                 <TouchableOpacity className="w-9 h-9 rounded-full bg-gray-100 items-center justify-center">
                                    <MaterialCommunityIcons name="chat-outline" size={16} color="#6B7280" />
                                 </TouchableOpacity>
                                 <TouchableOpacity className="w-9 h-9 rounded-full bg-green-100 items-center justify-center">
                                    <MaterialCommunityIcons name="check" size={18} color="#16A34A" />
                                 </TouchableOpacity>
                              </View>
                           </View>
                        </View>
                     </Card>
                  ))}
               </View>
            </View>

            <View className="mt-10 px-6 pb-24">
               <Text className="font-semibold text-[17px] text-slate-900 mb-5">Team Activity</Text>
               <Card className="p-0 overflow-hidden">
                  <View className="p-2 pb-4 flex-row border-b border-slate-100">
                     <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDthyo72voBhf_RYSIHLIjara8wKaKL9iYnTQDO1juXnxW44ktQrbY7BdKjjz5NHtANH46zQjGsaD1BoVuti4otFTxJUkbRktPit6OXRS24jD6s9W_FZy7YTQPmXyCHRAIu16xFMHs5G2IkYfbGHl2IlXCQIgw26TlvoGtbmd2Glo5tfYdTUhCcN5kAfUjVumuS1VViVeKmqf5O-ODOUenH9h7a-nlqyIGFS_n2ZCx5hesFzQ92_s56FrkgcnCvWjfGPo2FNFootzHC' }} className="w-8 h-8 rounded-full border border-slate-100" />
                     <View className="flex-1 ml-4">
                        <Text className="text-[13px] leading-snug">
                           <Text className="font-semibold text-slate-900">Sarah Chen</Text>
                           <Text className="text-slate-500"> pushed 4 commits to </Text>
                           <Text className="font-medium text-primary">main</Text>
                        </Text>
                        <Text className="text-[11px] text-slate-500 mt-1 font-medium">12m ago</Text>
                     </View>
                  </View>
                  <View className="p-2 pt-4 flex-row">
                     <View className="w-8 h-8 rounded-full bg-slate-50 items-center justify-center border border-slate-100">
                        <MaterialCommunityIcons name="forum-outline" size={16} color="#5F6368" />
                     </View>
                     <View className="flex-1 ml-4">
                        <Text className="text-[13px] leading-snug">
                           <Text className="font-semibold text-slate-900">Team</Text>
                           <Text className="text-slate-500"> 24 new messages in </Text>
                           <Text className="font-medium text-slate-900">#design-ops</Text>
                        </Text>
                        <Text className="text-[11px] text-slate-500 mt-1 font-medium">45m ago</Text>
                     </View>
                  </View>
               </Card>
            </View>
         </ScrollView>

         {/* Floating Action Button (FAB) */}
         <TouchableOpacity
            className="absolute bottom-4 right-6 w-14 h-14 bg-primary rounded-full items-center justify-center shadow-xl elevation-5"
            activeOpacity={0.9}
         >
            <MaterialCommunityIcons name="plus" size={32} color="white" />
         </TouchableOpacity>
      </SafeAreaView>
   );
}
