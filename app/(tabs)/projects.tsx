import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, TextInput, Modal, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// --- Configuration ---
const PROJECTS = [
   { id: 1, title: 'Mobile App Redesign', sprint: 'Sprint 12', status: 'Active', progress: 75, icon: 'rocket-launch', color: '#2563EB', bg: 'bg-blue-50', text: 'text-blue-600', team: 5, due: 'Due Today' },
   { id: 2, title: 'AWS Migration', sprint: 'Platform', status: 'Sprinting', progress: 35, icon: 'cloud-check', color: '#7C3AED', bg: 'bg-violet-50', text: 'text-violet-600', team: 3, due: 'Nov 01' },
   { id: 3, title: 'Design System V2', sprint: 'Core', status: 'Review', progress: 92, icon: 'palette-outline', color: '#EA580C', bg: 'bg-orange-50', text: 'text-orange-600', team: 4, due: 'Yesterday' },
   { id: 4, title: 'Q3 Strategy Pitch', sprint: 'Marketing', status: 'Paused', progress: 10, icon: 'presentation', color: '#64748B', bg: 'bg-slate-100', text: 'text-slate-600', team: 2, due: 'Oct 12' },
   { id: 5, title: 'Analytics Dashboard', sprint: 'Data', status: 'Completed', progress: 100, icon: 'chart-areaspline', color: '#16A34A', bg: 'bg-green-50', text: 'text-green-600', team: 2, due: 'Completed' },
];

const FILTERS = ['All Projects', 'Active', 'Sprinting', 'Review', 'Completed', 'Paused'];

export default function ProjectsScreen() {
   const [search, setSearch] = useState('');
   const [modalVisible, setModalVisible] = useState(false);
   const [selectedFilter, setSelectedFilter] = useState('All Projects');

   // Filter Logic
   const filteredProjects = PROJECTS.filter(p => {
      const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
      const matchFilter = selectedFilter === 'All Projects' || p.status === selectedFilter;
      return matchSearch && matchFilter;
   });

   return (
      <SafeAreaView className="flex-1 bg-white">

         {/* --- Header (Matches Dashboard) --- */}
         <View className="px-6 py-4 flex-row items-center justify-between border-b border-slate-100 bg-white z-10">
            <View className="flex-row items-center">
               <View className="w-9 h-9 rounded-full border border-gray-800 overflow-hidden">
                  <Image
                     source={{ uri: 'https://cdni.pornpics.de/1280/7/542/95734520/95734520_012_969e.jpg' }}
                     className="w-full h-full"
                  />
               </View>
               <View className="ml-3">
                  <Text className="text-sm font-semibold text-slate-900 leading-none">Anshul Badoni</Text>
                  <Text className="text-[11px] text-slate-500 mt-1 font-medium uppercase tracking-wider">Project Manager</Text>
               </View>
            </View>
            <View className="flex-row items-center space-x-5">
               <TouchableOpacity className="mx-2">
                  <MaterialCommunityIcons name="magnify" size={22} color="#5F6368" />
               </TouchableOpacity>
               <TouchableOpacity className="relative mx-2">
                  <MaterialCommunityIcons name="bell-outline" size={22} color="#5F6368" />
                  <View className="absolute top-0.5 right-0.5 w-2 h-2 bg-blue-600 rounded-full border-2 border-white" />
               </TouchableOpacity>
            </View>
         </View>

         {/* --- Main Content --- */}
         <ScrollView className="flex-1 bg-gray-50" showsVerticalScrollIndicator={false}>

            {/* Title Section */}
            <View className="px-6 pt-8 pb-6">
               <View className="flex-row justify-between items-end mb-6">
                  <View>
                     <Text className="text-2xl font-bold tracking-tight text-slate-900">Projects</Text>
                     <Text className="text-slate-500 text-[15px] mt-1.5">You have {filteredProjects.length} projects in progress.</Text>
                  </View>
                  <TouchableOpacity
                     onPress={() => setModalVisible(true)}
                     className="bg-white border border-slate-200 px-3 py-2 rounded-lg flex-row items-center shadow-sm"
                  >
                     <MaterialCommunityIcons name="filter-variant" size={16} color="#475569" />
                     <Text className="text-[13px] font-semibold text-slate-700 ml-1.5">{selectedFilter === 'All Projects' ? 'Filter' : selectedFilter}</Text>
                  </TouchableOpacity>
               </View>

               {/* Search Bar */}
               <View className="flex-row items-center bg-white border border-slate-200 rounded-xl px-4 py-2 shadow-sm mb-2">
                  <MaterialCommunityIcons name="magnify" size={20} color="#94A3B8" />
                  <TextInput
                     className="flex-1 ml-3 text-sm text-slate-900 font-medium"
                     placeholder="Search projects..."
                     placeholderTextColor="#94A3B8"
                     value={search}
                     onChangeText={setSearch}
                  />
               </View>
            </View>

            <View className="px-4 pb-8">
               {filteredProjects.map((project) => {
                  const getProgressColor = (progress: number) => {
                     if (progress < 25) return '#EF4444';
                     if (progress < 50) return '#F59E0B';
                     if (progress < 90) return '#3B82F6';
                     return '#10B981';
                  };

                  const progressColor = getProgressColor(project.progress);
                  const progressPercent = Math.min(Math.max(project.progress, 0), 100);

                  return (
                     <TouchableOpacity
                        key={project.id}
                        activeOpacity={0.95}
                        className="bg-white rounded-xl p-5 mb-4 border border-gray-200 shadow-sm"
                     >
                        {/* Header */}
                        <View className="flex-row items-center justify-between mb-5">
                           <View className="flex-row items-center flex-1">
                              <View
                                 className="w-12 h-12 rounded-lg items-center justify-center mr-3"
                                 style={{ backgroundColor: `${progressColor}15` }}
                              >
                                 <MaterialCommunityIcons
                                    name={project.icon as any}
                                    size={24}
                                    color={progressColor}
                                 />
                              </View>

                              <View className="flex-1">
                                 <Text className="font-semibold text-lg text-gray-900 mb-1">
                                    {project.title}
                                 </Text>
                                 <View className="flex-row items-center space-x-3">
                                    <View className="bg-gray-100 px-2 py-1 rounded">
                                       <Text className="text-xs font-medium text-gray-700">
                                          Sprint {project.sprint}
                                       </Text>
                                    </View>
                                    <View className="flex-row items-center">
                                       <MaterialCommunityIcons name="clock-outline" size={14} color="#6B7280" />
                                       <Text className="text-xs text-gray-600 ml-1">
                                          {project.due}
                                       </Text>
                                    </View>
                                 </View>
                              </View>
                           </View>

                           <TouchableOpacity className="p-1">
                              <MaterialCommunityIcons name="dots-vertical" size={20} color="#9CA3AF" />
                           </TouchableOpacity>
                        </View>

                        {/* Progress Bar */}
                        <View className="mb-5">
                           <View className="flex-row justify-between items-center mb-3">
                              <Text className="text-sm font-medium text-gray-700">Progress</Text>
                              <View className="flex-row items-center">
                                 <Text className="text-sm font-bold text-gray-900 mr-2">
                                    {progressPercent}%
                                 </Text>
                                 <View
                                    className="w-3 h-3 rounded-full"
                                    style={{ backgroundColor: progressColor }}
                                 />
                              </View>
                           </View>

                           <View className="h-2 bg-gray-100 rounded-full overflow-hidden">
                              <View
                                 className="h-full rounded-full transition-all duration-300"
                                 style={{
                                    width: `${progressPercent}%`,
                                    backgroundColor: progressColor
                                 }}
                              />
                           </View>
                        </View>

                        {/* Stats */}
                        <View className="flex-row items-center justify-between mb-4">
                           <View className="flex-row items-center space-x-4">
                              <View className="flex-row items-center">
                                 <MaterialCommunityIcons name="check-circle-outline" size={16} color="#6B7280" />
                                 <Text className="text-sm text-gray-600 ml-2 font-medium">18 tasks</Text>
                              </View>
                              <View className="flex-row items-center">
                                 <MaterialCommunityIcons name="comment-outline" size={16} color="#6B7280" />
                                 <Text className="text-sm text-gray-600 ml-2 font-medium">7</Text>
                              </View>
                           </View>

                           <View className="flex-row items-center">
                              <MaterialCommunityIcons name="attachment" size={16} color="#6B7280" />
                              <Text className="text-sm text-gray-600 ml-1 font-medium">3 files</Text>
                           </View>
                        </View>

                        {/* Divider */}
                        <View className="h-px bg-gray-100 mb-4" />

                        {/* Footer */}
                        <View className="flex-row items-center justify-between">
                           {/* Team Members */}
                           <View className="flex-row items-center">
                              <View className="flex-row -space-x-2">
                                 {[1, 2, 3].slice(0, Math.min(3, project.team)).map((index) => (
                                    <View
                                       key={index}
                                       className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-200"
                                    >
                                       <Image
                                          source={{
                                             uri: `https://api.dicebear.com/7.x/avataaars/svg?seed=${project.title}-${index}`
                                          }}
                                          className="w-full h-full"
                                       />
                                    </View>
                                 ))}
                                 {project.team > 3 && (
                                    <View className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white items-center justify-center">
                                       <Text className="text-xs font-semibold text-gray-600">
                                          +{project.team - 3}
                                       </Text>
                                    </View>
                                 )}
                              </View>
                              <Text className="text-xs text-gray-500 ml-2">
                                 {project.team} members
                              </Text>
                           </View>

                           {/* Status */}
                           <View
                              className="px-3 py-1.5 rounded-full"
                              style={{
                                 backgroundColor: `${progressColor}10`,
                                 borderWidth: 1,
                                 borderColor: `${progressColor}20`
                              }}
                           >
                              <Text
                                 className="text-xs font-semibold"
                                 style={{ color: progressColor }}
                              >
                                 {project.status}
                              </Text>
                           </View>
                        </View>
                     </TouchableOpacity>
                  );
               })}
            </View>
         </ScrollView>

         {/* --- Bottom Sheet Filter Modal --- */}
         <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
         >
            <Pressable
               className="flex-1 bg-black/40 justify-end"
               onPress={() => setModalVisible(false)}
            >
               <Pressable
                  className="bg-white rounded-t-3xl h-[45%] pb-8"
                  onPress={(e) => e.stopPropagation()} // Prevent closing when clicking modal content
               >
                  {/* Handle Bar */}
                  <View className="items-center pt-3 pb-2">
                     <View className="w-12 h-1.5 bg-slate-200 rounded-full" />
                  </View>

                  {/* Header */}
                  <View className="flex-row justify-between items-center px-6 py-4 border-b border-slate-100">
                     <Text className="text-lg font-bold text-slate-900">Filter Projects</Text>
                     <TouchableOpacity onPress={() => { setSelectedFilter('All Projects'); setModalVisible(false); }}>
                        <Text className="text-[13px] font-semibold text-blue-600">Reset</Text>
                     </TouchableOpacity>
                  </View>

                  {/* Filter Options */}
                  <ScrollView className="px-6 pt-2">
                     {FILTERS.map((filter) => (
                        <TouchableOpacity
                           key={filter}
                           onPress={() => { setSelectedFilter(filter); setModalVisible(false); }}
                           className="py-4 flex-row items-center justify-between border-b border-slate-50"
                        >
                           <View className="flex-row items-center">
                              <View className={`w-3 h-3 rounded-full mr-3 ${selectedFilter === filter ? 'bg-blue-600' : 'bg-slate-200'}`} />
                              <Text className={`text-[15px] font-medium ${selectedFilter === filter ? 'text-slate-900' : 'text-slate-600'}`}>
                                 {filter}
                              </Text>
                           </View>
                           {selectedFilter === filter && (
                              <MaterialCommunityIcons name="check" size={20} color="#2563EB" />
                           )}
                        </TouchableOpacity>
                     ))}
                  </ScrollView>
               </Pressable>
            </Pressable>
         </Modal>

         {/* --- FAB --- */}
         <TouchableOpacity
            className="absolute bottom-6 right-6 w-14 h-14 bg-blue-600 rounded-full items-center justify-center shadow-xl shadow-blue-300"
            activeOpacity={0.9}
         >
            <MaterialCommunityIcons name="plus" size={32} color="white" />
         </TouchableOpacity>
      </SafeAreaView>
   );
}