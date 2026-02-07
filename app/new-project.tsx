import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Button } from '../components/Button';

export default function NewProjectScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row items-center justify-between px-4 pt-4 pb-4 border-b border-slate-100">
        <TouchableOpacity onPress={() => router.back()}><Text className="text-primary font-medium text-base">Cancel</Text></TouchableOpacity>
        <Text className="text-lg font-bold tracking-tight text-slate-900">New Project</Text>
        <TouchableOpacity><Text className="text-primary font-bold text-base">Help</Text></TouchableOpacity>
      </View>

      <ScrollView className="flex-1 pb-32" showsVerticalScrollIndicator={false}>
        <View className="p-6 space-y-6">
           <View className="mb-6">
              <Text className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Project Name</Text>
              <TextInput
                placeholder="e.g. Q4 Growth Strategy"
                className="w-full px-4 py-4 rounded-xl border border-slate-200 bg-slate-50 text-lg font-medium"
                placeholderTextColor="#94a3b8"
              />
           </View>
           <View className="mb-6">
              <Text className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Description</Text>
              <TextInput
                placeholder="Define the scope and objectives..."
                className="w-full px-4 py-4 rounded-xl border border-slate-200 bg-slate-50 text-base min-h-[100px]"
                multiline
                placeholderTextColor="#94a3b8"
              />
           </View>
        </View>

        <View className="h-2 bg-slate-50" />

        <View className="p-6">
           <Text className="text-lg font-bold mb-4">Invite Team</Text>
           <View className="relative mb-6 justify-center">
              <View className="absolute left-4 z-10">
                 <MaterialCommunityIcons name="magnify" size={20} color="#94a3b8" />
              </View>
              <TextInput
                placeholder="Search company members..."
                className="w-full pl-12 pr-4 py-3.5 rounded-full bg-slate-100 text-base"
                placeholderTextColor="#94a3b8"
              />
           </View>

           <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row space-x-3 mb-4">
              {[1, 2, 3].map((i) => (
                <View key={i} className="relative mr-4">
                   <View className="w-12 h-12 rounded-full border-2 border-primary overflow-hidden">
                      <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAB7VE-iSYW-Hf8CDtpbuIdN1xu_rYlL4RlKlMCX4PQ9Sv8otqKmPXd0bg4G9rdBuEydoaDBOPwDLlMweMVJHkrTFXjYmBrUL1L3VQUKdJGs5NGlZvASPJSlJLDVTzOrXaMeomndkkzRFKQrls0atT4lEWyaM_yIez82z0yZWqyYnDH1D4U37Mov3ywiuJgu2Ssh9KY_72D8OoRVGXxbADmUEfcRkwWrjmHzHH2gNvOYFcJsSe5svKyvf46hU61Ys1wTnLuK0jg7rwW' }} className="w-full h-full" />
                   </View>
                   <TouchableOpacity className="absolute -top-1 -right-1 w-5 h-5 bg-slate-900 rounded-full items-center justify-center border-2 border-white">
                      <MaterialCommunityIcons name="close" size={10} color="white" />
                   </TouchableOpacity>
                </View>
              ))}
              <TouchableOpacity className="w-12 h-12 rounded-full border-2 border-dashed border-slate-300 items-center justify-center">
                 <MaterialCommunityIcons name="plus" size={24} color="#94a3b8" />
              </TouchableOpacity>
           </ScrollView>
        </View>

        <View className="h-2 bg-slate-50" />

        <View className="p-6 pb-24">
           <Text className="text-lg font-bold mb-1">Project Privacy</Text>
           <Text className="text-sm text-slate-500 mb-4">Control who can access this project.</Text>
           <View className="flex-row bg-slate-100 p-1 rounded-xl mb-4">
              <TouchableOpacity className="flex-1 flex-row items-center justify-center py-3 rounded-lg bg-white shadow-sm">
                 <MaterialCommunityIcons name="earth" size={20} color="#137fec" />
                 <Text className="text-primary font-semibold ml-2">Public</Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex-1 flex-row items-center justify-center py-3 rounded-lg">
                 <MaterialCommunityIcons name="lock-outline" size={20} color="#64748b" />
                 <Text className="text-slate-500 font-medium ml-2">Private</Text>
              </TouchableOpacity>
           </View>
           <View className="flex-row items-start p-4 bg-primary/5 rounded-xl border border-primary/10">
              <MaterialCommunityIcons name="information-outline" size={20} color="#137fec" />
              <Text className="flex-1 text-xs text-slate-600 leading-relaxed ml-3">
                 <Text className="font-bold text-primary">Public: </Text>
                 Everyone in your workspace can view, join, and contribute to this project without an explicit invitation.
              </Text>
           </View>
        </View>
      </ScrollView>

      <View className="absolute bottom-0 left-0 right-0 p-6 bg-white/90 border-t border-slate-100">
         <Button title="Create Project" onPress={() => router.replace('/(tabs)/projects')} />
      </View>
    </SafeAreaView>
  );
}
