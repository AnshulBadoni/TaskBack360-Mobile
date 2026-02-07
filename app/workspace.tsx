import { SafeAreaView } from "react-native-safe-area-context";
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Card } from '../components/Card';
import { useRouter } from 'expo-router';

export default function WorkspaceScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-slate-50 dark:bg-background-dark">
      <View className="bg-white/80 dark:bg-slate-900/80 pt-4 pb-2 px-4 border-b border-slate-100">
        <View className="flex-row items-center justify-between mb-2">
          <TouchableOpacity onPress={() => router.back()} className="p-2 rounded-full">
            <MaterialCommunityIcons name="chevron-left" size={24} color="#0d141b" />
          </TouchableOpacity>
          <Text className="text-sm font-semibold tracking-tight text-slate-900">Project Details</Text>
          <TouchableOpacity className="p-2 rounded-full">
            <MaterialCommunityIcons name="share-variant-outline" size={20} color="#0d141b" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="px-5 pt-6 pb-6 bg-white">
           <View className="flex-row justify-between items-start">
              <View className="flex-1 mr-4">
                 <Text className="text-2xl font-bold leading-tight text-slate-900">Cloud Infrastructure Upgrade</Text>
                 <View className="flex-row items-center mt-2">
                    <View className="w-2 h-2 rounded-full bg-emerald-500 mr-2" />
                    <Text className="text-sm font-medium text-emerald-600">On Track</Text>
                    <Text className="mx-2 text-slate-300">•</Text>
                    <Text className="text-sm text-slate-500 font-medium">Premium Workspace</Text>
                 </View>
              </View>
              <View className="w-14 h-14 rounded-xl bg-blue-50 items-center justify-center">
                 <MaterialCommunityIcons name="cloud-upload-outline" size={32} color="#137fec" />
              </View>
           </View>
        </View>

        <View className="bg-white border-b border-slate-100 px-4">
           <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row">
              <TouchableOpacity className="pt-4 pb-3 border-b-2 border-primary mr-6">
                 <Text className="text-sm font-bold text-primary">Tasks</Text>
              </TouchableOpacity>
              {['Timeline', 'Files', 'Team'].map((tab) => (
                <TouchableOpacity key={tab} className="pt-4 pb-3 border-b-2 border-transparent mr-6">
                   <Text className="text-sm font-bold text-slate-500">{tab}</Text>
                </TouchableOpacity>
              ))}
           </ScrollView>
        </View>

        <View className="p-5">
           <View className="mb-8">
              <View className="flex-row items-center justify-between mb-4">
                 <Text className="text-xs font-bold uppercase tracking-widest text-slate-400">To Do (2)</Text>
                 <TouchableOpacity className="p-1"><MaterialCommunityIcons name="plus" size={20} color="#137fec" /></TouchableOpacity>
              </View>
              <Card className="mb-3">
                 <View className="flex-row justify-between items-start mb-3">
                    <Text className="text-sm font-semibold text-slate-900 flex-1 mr-4">Update API Documentation for V2 release</Text>
                    <View className="bg-red-50 px-2 py-0.5 rounded">
                       <Text className="text-[10px] font-bold text-red-600 uppercase">High</Text>
                    </View>
                 </View>
                 <View className="flex-row justify-between items-center">
                    <View className="w-6 h-6 rounded-full bg-slate-200" />
                    <Text className="text-[11px] text-slate-400 font-medium">Due Tomorrow</Text>
                 </View>
              </Card>
              <Card className="mb-3">
                 <View className="flex-row justify-between items-start mb-3">
                    <Text className="text-sm font-semibold text-slate-900 flex-1 mr-4">Security Audit of Auth Flow</Text>
                    <View className="bg-amber-50 px-2 py-0.5 rounded">
                       <Text className="text-[10px] font-bold text-amber-600 uppercase">Medium</Text>
                    </View>
                 </View>
                 <View className="flex-row justify-between items-center">
                    <View className="w-6 h-6 rounded-full bg-slate-200" />
                    <Text className="text-[11px] text-slate-400 font-medium">Dec 14</Text>
                 </View>
              </Card>
           </View>

           <View className="mb-8">
              <View className="flex-row items-center justify-between mb-4">
                 <Text className="text-xs font-bold uppercase tracking-widest text-slate-400">In Progress (1)</Text>
              </View>
              <Card className="mb-3">
                 <View className="flex-row justify-between items-start mb-3">
                    <Text className="text-sm font-semibold text-slate-900 flex-1 mr-4">Refactor Auth Module to Typescript</Text>
                    <View className="bg-blue-50 px-2 py-0.5 rounded">
                       <Text className="text-[10px] font-bold text-primary uppercase">High</Text>
                    </View>
                 </View>
                 <View className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden mb-3">
                    <View className="bg-primary h-full w-[66%]" />
                 </View>
                 <View className="flex-row justify-between items-center">
                    <View className="w-6 h-6 rounded-full bg-slate-200" />
                    <Text className="text-[11px] text-slate-400 font-medium">66% Complete</Text>
                 </View>
              </Card>
           </View>
        </View>
        <View className="h-20" />
      </ScrollView>

      <TouchableOpacity className="absolute bottom-8 right-6 w-14 h-14 bg-primary rounded-full items-center justify-center shadow-xl">
         <MaterialCommunityIcons name="plus" size={32} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
