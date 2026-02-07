import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Card } from '../../components/Card';

export default function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-background-dark">
      <View className="flex-row items-center justify-between px-4 h-14 bg-white dark:bg-slate-900 border-b border-gray-100">
        <TouchableOpacity>
           <MaterialCommunityIcons name="arrow-left" size={24} color="#202124" />
        </TouchableOpacity>
        <Text className="text-[17px] font-semibold tracking-tight text-slate-900 dark:text-white">Profile</Text>
        <TouchableOpacity>
           <MaterialCommunityIcons name="cog-outline" size={24} color="#202124" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 bg-white" showsVerticalScrollIndicator={false}>
        <View className="items-center pt-8 pb-6 px-6">
           <View className="relative mb-5">
              <View className="w-28 h-28 rounded-full border border-gray-200 p-0.5 bg-white shadow-sm">
                 <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUs6zGPVndVCmGO_cYVnguv55KfViPyX0x9WiFNtnc_DZXvd2XpbqKTb-KPAjLNsz2qpqB85aqExwNMEcUdeDsWqt_bENN8luz3z7oqGYQjcrsAxmWDqcnK41RXF3J-0LOR8EaNy2eIDkBRT7L1Mz0InP_JpR6uWKCy7zKHyW6afvW9RtFQziFojdIpuPi6Kncs96cuNdS_spb8Y1fCHB8ly41Oiv9ztf8xa-wlCaA-y0lc2XAe0kxw3NdZuqIJOZUKvWDQ7oc0jDk' }} className="w-full h-full rounded-full" />
              </View>
              <View className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full" />
           </View>
           <View className="items-center">
              <Text className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight text-center">Alex Sterling</Text>
              <Text className="text-slate-500 font-normal text-sm mt-1 text-center">Director of Product</Text>
           </View>
           <View className="mt-4 flex-row items-center px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full self-center">
              <MaterialCommunityIcons name="clock-outline" size={16} color="#1a73e8" />
              <Text className="text-xs font-semibold text-primary ml-1">In Focus • 30m left</Text>
           </View>
           <View className="flex-row mt-8 w-full max-w-xs justify-center">
              <TouchableOpacity className="flex-1 flex-row items-center justify-center bg-primary py-3 rounded-lg mr-2">
                 <MaterialCommunityIcons name="chat-outline" size={18} color="white" />
                 <Text className="text-white font-semibold text-sm ml-2">Message</Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex-1 flex-row items-center justify-center border border-slate-200 py-3 rounded-lg ml-2">
                 <MaterialCommunityIcons name="phone-outline" size={18} color="#202124" />
                 <Text className="text-slate-900 font-semibold text-sm ml-2">Call</Text>
              </TouchableOpacity>
           </View>
        </View>

        <View className="px-5 py-6 bg-slate-50">
           <Card className="p-0 overflow-hidden">
              <View className="p-5">
                 <View className="flex-row justify-between items-start mb-6">
                    <View>
                       <Text className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Workload Distribution</Text>
                       <View className="flex-row items-baseline mt-1">
                          <Text className="text-2xl font-bold text-slate-900">60</Text>
                          <Text className="text-sm text-slate-500 font-medium ml-2">Tasks active</Text>
                       </View>
                    </View>
                    <View className="flex-row items-center px-2 py-0.5 rounded bg-green-50">
                       <MaterialCommunityIcons name="trending-up" size={12} color="#16a34a" />
                       <Text className="text-[11px] font-bold text-green-600 ml-1">+5%</Text>
                    </View>
                 </View>

                 <View className="mb-8">
                    <View className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden flex-row">
                       <View className="bg-primary h-full" style={{ width: '20%' }} />
                       <View className="bg-gray-200 h-full" style={{ width: '80%' }} />
                    </View>
                    <View className="flex-row justify-between mt-2">
                       <Text className="text-[11px] font-medium text-slate-500">Active (12)</Text>
                       <Text className="text-[11px] font-medium text-slate-500">Completed (48)</Text>
                    </View>
                 </View>

                 <View className="space-y-3">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, i) => (
                       <View key={day} className="flex-row items-center mb-3">
                          <Text className="text-[10px] font-bold text-slate-500 w-8 uppercase">{day}</Text>
                          <View className="flex-1 h-1 bg-gray-100 rounded-full overflow-hidden ml-2">
                             <View className="bg-blue-400 h-full" style={{ width: `${[30, 75, 50, 40, 90][i]}%` }} />
                          </View>
                       </View>
                    ))}
                 </View>
              </View>
           </Card>
        </View>

        <View className="px-5 py-4">
           <View className="flex-row items-center justify-between mb-3">
              <Text className="text-base font-semibold text-slate-900">Contact</Text>
              <TouchableOpacity><Text className="text-primary text-xs font-bold">Edit</Text></TouchableOpacity>
           </View>
           <View className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
              <View className="p-4 flex-row items-center border-b border-slate-100">
                 <MaterialCommunityIcons name="email-outline" size={20} color="#94a3b8" />
                 <View className="ml-4">
                    <Text className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Email</Text>
                    <Text className="text-sm font-medium text-slate-900">alex.sterling@lumina.io</Text>
                 </View>
              </View>
              <View className="p-4 flex-row items-center">
                 <MaterialCommunityIcons name="cellphone" size={20} color="#94a3b8" />
                 <View className="ml-4">
                    <Text className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Phone</Text>
                    <Text className="text-sm font-medium text-slate-900">+1 (555) 234-8901</Text>
                 </View>
              </View>
           </View>
        </View>
        <View className="h-24" />
      </ScrollView>
    </SafeAreaView>
  );
}
