import { SafeAreaView } from "react-native-safe-area-context";
import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Card } from '../../components/Card';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="px-6 py-4 flex-row items-center justify-between border-b border-slate-100">
        <View className="flex-row items-center">
          <View className="w-9 h-9 rounded-full overflow-hidden border border-slate-200">
            <Image
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfSMW9amA0LrW_gjAm6hFGmKuuGhjgNqKUXwnlI6YXYFAsRIAg5umhJLJuyZHuejKhSguBHbD7MGmuREcgarCv6e69ySC5KKfpHbaJiWmI1p-7afONufRFjYyospQrZ7UwoiTasnVHb5Y81OubtT1wDZXqjZ8-0aoecrQgg7cQftGSEvZsSi9174f97011Tr8ZgYy1Wb_A03cpSJoQgROSPPNoBW9PFKbgIUK9d5pSvejGUnoggmhW-Qg3L5oQxvY03TLzG97JNIk3' }}
              className="w-full h-full"
            />
          </View>
          <View className="ml-3">
            <Text className="text-sm font-semibold text-slate-900 leading-none">Alex Rivera</Text>
            <Text className="text-[11px] text-slate-500 mt-1 font-medium uppercase tracking-wider">Executive Lead</Text>
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

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="px-6 pt-8 pb-4">
           <Text className="text-2xl font-semibold tracking-tight text-slate-900">Good morning, Alex</Text>
           <Text className="text-slate-500 text-[15px] mt-1.5">You have 4 priorities for today's sprint.</Text>
        </View>

        <View className="mt-8">
           <View className="flex-row items-center justify-between px-6 mb-5">
             <Text className="font-semibold text-[17px] text-slate-900">Active Projects</Text>
             <TouchableOpacity>
               <Text className="text-primary text-[13px] font-semibold">View All</Text>
             </TouchableOpacity>
           </View>
           <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-6">
              <Card className="min-w-[280px] p-5 mr-4">
                 <View className="flex-row justify-between items-start mb-6">
                    <View className="w-10 h-10 rounded-md bg-slate-50 items-center justify-center border border-slate-100">
                       <MaterialCommunityIcons name="rocket-launch" size={20} color="#1A73E8" />
                    </View>
                    <View className="items-center justify-center w-11 h-11">
                       <Text className="text-[10px] font-bold text-slate-900">75%</Text>
                    </View>
                 </View>
                 <Text className="font-semibold text-[15px] text-slate-900 mb-1">Mobile App Redesign</Text>
                 <Text className="text-slate-500 text-[13px] mb-5">iOS & Android Experience</Text>
                 <View className="flex-row items-center justify-between">
                    <View className="flex-row items-center">
                       <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSehfyQCYw6Fw19Ub6B6wbFlQ_kpDmd3LuqhWzaBMl0gFEgjo2dtryTUNhfA9xO7wSii_RNQFvgXXoXpA7V2K5yGI2hXkt6Z1D5HmARB72FQFyPo924oTGOLtxvor1oX4gQZEgSzzp3fmc9L9zH8B-l-oYR3opb_nJi4Xzkcs9WhVPG_3EIWRAJ95UsDK0LAewOn_75hXGiFgGxazU8bACqHPqvPPQAKGOOAhwwrdMmtbSNtRwqUpMGKEGCfxT_o4Iq0M5-wySz9DQ' }} className="w-7 h-7 rounded-full border-2 border-white shadow-sm" />
                       <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKuNKxNeCQ6cFWJn2D0nWY5aRxhfWcLrmBFNqhW_oK_rfaN8OmYyHUsV84fedgGCd-h1jCZyA-vKbzlsFxEWE2ZQ5vHATvJl9qvs5qlJ-gYCR-u0PfdcoRsmHYRr_4BFTH4k4nt_nKDPn2gPALlgGVzecEehV3SVbw88MbkMmhf3JtSFwUuBYfmk4wTKcKkGDa1sklejilZ7rH3D-OE4wKMuhYg5yhLU0eBBAXm5INIDyBJDlOcUNQkhRJ00li160egJR7wXNca0xg' }} className="w-7 h-7 rounded-full border-2 border-white shadow-sm -ml-2" />
                       <View className="w-7 h-7 rounded-full border-2 border-white bg-slate-100 items-center justify-center -ml-2">
                          <Text className="text-[10px] font-bold text-slate-500">+3</Text>
                       </View>
                    </View>
                    <View className="bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                       <Text className="text-[11px] font-medium text-slate-500">Active</Text>
                    </View>
                 </View>
              </Card>

              <Card className="min-w-[280px] p-5 mr-4">
                 <View className="flex-row justify-between items-start mb-6">
                    <View className="w-10 h-10 rounded-md bg-slate-50 items-center justify-center border border-slate-100">
                       <MaterialCommunityIcons name="cloud-check" size={20} color="#4F46E5" />
                    </View>
                    <View className="items-center justify-center w-11 h-11">
                       <Text className="text-[10px] font-bold text-slate-900">35%</Text>
                    </View>
                 </View>
                 <Text className="font-semibold text-[15px] text-slate-900 mb-1">AWS Migration</Text>
                 <Text className="text-slate-500 text-[13px] mb-5">Core Infrastructure</Text>
                 <View className="flex-row items-center justify-between">
                    <View className="flex-row items-center">
                       <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBr1fHRPQ7fuGag9SgwtkbdsHgQVAMhlZ7QCT3CAwQ7Y45ljG2xoBqc60s0txM4WVHxp5_fzMzHTLx6CBQd_tqymcQIODddDGZ-BRQ-FAgT1n11scJMc_E-RODc6KekNlEVxPAF8IUpDFJjFTUlQLpR7JRRdxmDYQsVZSdB768MaATRS9cXl2EBlh3MDdVCh4cOkEwBdUTHM5DG1xCxoSxoF2gQDq6nnrUoYHxvQpInixDr3gUxA-ASHq8Cqs6Kt7uKh5PVKW3hMZMC' }} className="w-7 h-7 rounded-full border-2 border-white shadow-sm" />
                       <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJ9XAQjhyqDB-3PZCnYijfsTMyLyeZiRJiR9HWNzxNoz7TkA2D9o3q7cot_S6Zu4KbuYmZrFhI_jCTCQBuFmM_SNsDVxRHTNUaGanfQxtaaTqtTnfermc-feZifdOdmbB6h5Mxnr6Z2jmEDYyaJupiSK6NvzWe6pvc7eTZxyE0WydfEFNnu5STxtK654CQqqTgWrUysvMkhG2l6FkT05H4g8V4zReq2T3aDPoDp7JRU3g2oam10RTQabcnbvWiq9kauRvdiTbPT3TU' }} className="w-7 h-7 rounded-full border-2 border-white shadow-sm -ml-2" />
                    </View>
                    <View className="bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                       <Text className="text-[11px] font-medium text-slate-500">Sprinting</Text>
                    </View>
                 </View>
              </Card>
           </ScrollView>
        </View>

        <View className="mt-10 px-6">
           <Text className="font-semibold text-[17px] text-slate-900 mb-5">My Priority Tasks</Text>
           <View>
              <Card className="flex-row items-center p-4 mb-3">
                 <View className="flex-1">
                    <View className="flex-row items-center mb-1.5">
                       <View className="px-2 py-0.5 rounded bg-blue-50 border border-blue-100">
                          <Text className="text-[10px] font-bold uppercase text-primary">In Progress</Text>
                       </View>
                       <Text className="text-[11px] text-slate-500 ml-2">2:00 PM</Text>
                    </View>
                    <Text className="text-[14px] font-medium text-slate-900">Review Q3 Strategy Pitch</Text>
                 </View>
                 <MaterialCommunityIcons name="chat-outline" size={20} color="#E8EAED" />
                 <MaterialCommunityIcons name="checkbox-blank-outline" size={24} color="#E8EAED" style={{ marginLeft: 12 }} />
              </Card>

              <Card className="flex-row items-center p-4 mb-3">
                 <View className="flex-1">
                    <View className="flex-row items-center mb-1.5">
                       <View className="px-2 py-0.5 rounded bg-orange-50 border border-orange-200/50">
                          <Text className="text-[10px] font-bold uppercase text-orange-600">Blocked</Text>
                       </View>
                       <Text className="text-[11px] text-slate-500 ml-2">Tomorrow</Text>
                    </View>
                    <Text className="text-[14px] font-medium text-slate-900">Finalize Security Audit</Text>
                 </View>
                 <MaterialCommunityIcons name="dots-vertical" size={20} color="#E8EAED" />
                 <MaterialCommunityIcons name="checkbox-blank-outline" size={24} color="#E8EAED" style={{ marginLeft: 12 }} />
              </Card>
           </View>
        </View>

        <View className="mt-10 px-6 pb-24">
           <Text className="font-semibold text-[17px] text-slate-900 mb-5">Team Activity</Text>
           <Card className="p-0 overflow-hidden">
              <View className="p-4 flex-row border-b border-slate-100">
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
              <View className="p-4 flex-row">
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
        className="absolute bottom-24 right-6 w-14 h-14 bg-primary rounded-full items-center justify-center shadow-xl elevation-5"
        activeOpacity={0.9}
      >
         <MaterialCommunityIcons name="plus" size={32} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
