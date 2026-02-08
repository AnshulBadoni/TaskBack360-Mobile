import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Card } from '../components/Card';
import { getChatMessages, sendMessage, getUsers } from '../api';

export default function ContextualChatScreen() {
  const router = useRouter();
  const [messages, setMessages] = useState<any[]>([]);
  const [inputText, setInputText] = useState("");
  const scrollViewRef = useRef<ScrollView>(null);
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const msgs = await getChatMessages();
    setMessages(msgs);
    const u = await getUsers();
    setUsers(u);
  };

  const handleSend = async () => {
    if (!inputText) return;
    const newMessage = await sendMessage({
      senderId: 'me',
      text: inputText,
      timestamp: 'Just now'
    });
    setMessages([...messages, newMessage]);
    setInputText("");
    setTimeout(() => scrollViewRef.current?.scrollToEnd({ animated: true }), 100);
  };

  const getSender = (senderId: string) => {
    if (senderId === 'me') return { name: 'Me', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApBZs0J_rMedctrjn3hMoneMePJ1nbjK4L7qgRG8Bfm36TeQfVMmZ84CqvX42NvE1U8UEKZClgXxaTiH5MPkPFd5zeGD1FD-AX2DAsGNIuQXhY9CFsEYrjWgdTPSmgQkk5ijYlbEh7MRRhXe5xNYoL6IMdC5R6QsDc632how_stqCifRoyUSnUi0CBEnP4IhCbLBfH8LFOGNV2R3bFM6RJ4kesGf_n42Sagbz5STt4m_Vu7_6eOFOmldrHnmZTM0jWrWVFk3Qa9k9J' };
    return users.find(u => u.id === senderId) || { name: 'Unknown', avatar: '' };
  };

  return (
    <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        {/* Header */}
        <View className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 pt-2">
          <View className="flex-row items-center p-4 pb-2 justify-between">
            <View className="flex-row items-center gap-3">
              <TouchableOpacity onPress={() => router.back()}>
                <MaterialCommunityIcons name="chevron-left" size={24} color="#64748b" />
              </TouchableOpacity>
              <View className="flex-col">
                <Text className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight">Alex Rivera</Text>
                <View className="flex-row items-center gap-1.5">
                  <View className="w-2 h-2 rounded-full bg-green-500" />
                  <Text className="text-slate-500 dark:text-slate-400 text-xs">Active now</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity className="bg-primary/10 px-4 py-1.5 rounded-full flex-row items-center gap-1">
              <MaterialCommunityIcons name="link-variant" size={14} color="#137fec" />
              <Text className="text-primary text-sm font-bold">Link Task</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Chat Area */}
        <ScrollView
          ref={scrollViewRef}
          className="flex-1 p-4"
          showsVerticalScrollIndicator={false}
          onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
        >
          <View className="items-center mb-6">
            <Text className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest">Today</Text>
          </View>

          {messages.map((msg, index) => {
            const sender = getSender(msg.senderId);
            const isMe = msg.senderId === 'me';

            return (
              <View key={msg.id} className="mb-6">
                <View className={`flex-row items-end gap-3 ${isMe ? 'justify-end' : ''}`}>
                  {!isMe && (
                    <Image source={{ uri: sender.avatar }} className="w-9 h-9 rounded-full border border-slate-200" />
                  )}
                  <View className={`flex-col gap-1 ${isMe ? 'items-end' : 'items-start'} max-w-[85%]`}>
                    <Text className="text-slate-500 dark:text-slate-400 text-[12px] font-medium mx-1">{sender.name}</Text>
                    <View className={`rounded-2xl px-4 py-3 shadow-sm ${isMe ? 'bg-primary rounded-br-none' : 'bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-bl-none'}`}>
                      <Text className={`text-[15px] leading-relaxed ${isMe ? 'text-white' : 'text-slate-800 dark:text-slate-200'}`}>
                        {msg.text}
                      </Text>
                    </View>
                  </View>
                  {isMe && (
                    <Image source={{ uri: sender.avatar }} className="w-9 h-9 rounded-full border border-slate-200" />
                  )}
                </View>

                {msg.linkedTaskId && (
                  <View className="mx-auto w-full max-w-[90%] mt-4">
                    <Card className="p-4 flex-row gap-4 border border-slate-200 dark:border-slate-700 shadow-sm">
                      <View className="flex-1">
                        <View className="flex-row items-center gap-2 mb-1">
                          <Text className="text-[11px] font-bold text-slate-400 tracking-wider">LINKED TASK</Text>
                          <View className="px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/30">
                            <Text className="text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase">In Progress</Text>
                          </View>
                        </View>
                        <Text className="text-slate-900 dark:text-white text-base font-bold leading-tight mb-1">Refactor Auth Middleware</Text>
                        <Text className="text-slate-500 dark:text-slate-400 text-sm">#402 • High Priority • Jira Cloud</Text>
                        <View className="mt-4 flex-row items-center justify-between">
                          <View className="flex-row -space-x-2">
                            <View className="w-6 h-6 rounded-full border-2 border-white dark:border-slate-800 bg-slate-200" />
                            <View className="w-6 h-6 rounded-full border-2 border-white dark:border-slate-800 bg-slate-300" />
                          </View>
                          <TouchableOpacity className="flex-row items-center gap-1" onPress={() => router.push(`/task-details?id=${msg.linkedTaskId}`)}>
                            <Text className="text-primary text-sm font-semibold">View Details</Text>
                            <MaterialCommunityIcons name="arrow-right" size={14} color="#137fec" />
                          </TouchableOpacity>
                        </View>
                      </View>
                      <View className="w-20 h-20 bg-slate-100 dark:bg-slate-700 rounded-lg items-center justify-center border border-slate-100 dark:border-slate-600">
                        <MaterialCommunityIcons name="terminal" size={32} color="#94a3b8" />
                      </View>
                    </Card>
                  </View>
                )}
              </View>
            );
          })}
        </ScrollView>

        {/* Chat Input Area */}
        <View className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 p-4 pb-8">
          <View className="flex-row items-center gap-3">
            <TouchableOpacity className="w-10 h-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
              <MaterialCommunityIcons name="plus" size={24} color="#64748b" />
            </TouchableOpacity>
            <View className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-full px-5 py-2.5">
              <TextInput
                className="text-[15px] dark:text-white"
                placeholder="Message Alex..."
                placeholderTextColor="#94a3b8"
                value={inputText}
                onChangeText={setInputText}
              />
            </View>
            <TouchableOpacity
              className="w-10 h-10 items-center justify-center rounded-full bg-primary shadow-lg"
              onPress={handleSend}
            >
              <MaterialCommunityIcons name="send" size={20} color="white" />
            </TouchableOpacity>
          </View>
          <View className="h-2" />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
