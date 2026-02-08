import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import Animated, { FadeIn, FadeOut, Layout } from 'react-native-reanimated';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { getUsers, getProjects, createTask } from '../api';

export default function NewTaskScreen() {
  const router = useRouter();
  const [taskName, setTaskName] = useState("");
  const [project, setProject] = useState("Mobile Redesign");
  const [priority, setPriority] = useState("High");
  const [dueDate, setDueDate] = useState("Oct 24, 2023");
  const [description, setDescription] = useState("");
  const [assignees, setAssignees] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [allUsers, setAllUsers] = useState<any[]>([]);
  const [isChannelLinked, setIsChannelLinked] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const users = await getUsers();
    setAllUsers(users);
    setAssignees(users.slice(0, 2));
  };

  const handleCreateTask = async () => {
    if (!taskName) return;
    setLoading(true);
    await createTask({
      name: taskName,
      project,
      priority,
      dueDate,
      description,
      assignees: assignees.map(a => a.id),
      isChannelLinked
    });
    setLoading(false);
    router.back();
  };

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-background-dark">
      {/* Header */}
      <View className="sticky top-0 z-50 flex-row items-center bg-white/80 dark:bg-background-dark/80 px-4 py-3 justify-between border-b border-slate-100 dark:border-slate-800">
        <TouchableOpacity onPress={() => router.back()}>
          <Text className="text-slate-500 dark:text-slate-400 text-base font-medium">Cancel</Text>
        </TouchableOpacity>
        <Text className="text-[#0d141b] dark:text-white text-lg font-bold leading-tight tracking-tight">New Task</Text>
        <TouchableOpacity
          className={`bg-primary px-4 py-1.5 rounded-full ${(!taskName || loading) ? 'opacity-50' : ''}`}
          onPress={handleCreateTask}
          disabled={!taskName || loading}
        >
          <Text className="text-white text-sm font-bold tracking-tight">{loading ? "..." : "Create"}</Text>
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Task Title Section */}
        <View className="px-4 pt-6">
          <TextInput
            className="w-full text-2xl font-semibold placeholder:text-slate-300 dark:placeholder:text-slate-600 border-none bg-transparent p-0 min-h-[60px] text-slate-900 dark:text-white"
            placeholder="Task name..."
            multiline
            value={taskName}
            onChangeText={setTaskName}
            placeholderTextColor="#cbd5e1"
          />
        </View>

        {/* Metadata Rows */}
        <View className="mt-4 px-4 space-y-1">
          {/* Project Selection */}
          <TouchableOpacity className="flex-row items-center justify-between py-3 border-b border-slate-50 dark:border-slate-800/50">
            <View className="flex-row items-center gap-3">
              <MaterialCommunityIcons name="folder-outline" size={20} color="#94a3b8" />
              <Text className="text-sm font-medium text-slate-600 dark:text-slate-300">Project</Text>
            </View>
            <View className="flex-row items-center gap-1">
              <Text className="text-sm font-semibold text-slate-900 dark:text-white">{project}</Text>
              <MaterialCommunityIcons name="chevron-right" size={18} color="#94a3b8" />
            </View>
          </TouchableOpacity>

          {/* Priority Selection */}
          <TouchableOpacity className="flex-row items-center justify-between py-3 border-b border-slate-50 dark:border-slate-800/50">
            <View className="flex-row items-center gap-3">
              <MaterialCommunityIcons name="flag-outline" size={20} color="#94a3b8" />
              <Text className="text-sm font-medium text-slate-600 dark:text-slate-300">Priority</Text>
            </View>
            <View className="flex-row items-center gap-2">
              <View className="flex-row items-center gap-1.5 bg-red-50 dark:bg-red-900/20 px-2 py-0.5 rounded-full">
                <View className="w-2 h-2 rounded-full bg-red-500" />
                <Text className="text-xs font-bold text-red-600 dark:text-red-400">{priority}</Text>
              </View>
              <MaterialCommunityIcons name="chevron-right" size={18} color="#94a3b8" />
            </View>
          </TouchableOpacity>

          {/* Due Date Selection */}
          <TouchableOpacity className="flex-row items-center justify-between py-3 border-b border-slate-50 dark:border-slate-800/50">
            <View className="flex-row items-center gap-3">
              <MaterialCommunityIcons name="calendar-blank-outline" size={20} color="#94a3b8" />
              <Text className="text-sm font-medium text-slate-600 dark:text-slate-300">Due Date</Text>
            </View>
            <View className="flex-row items-center gap-1">
              <Text className="text-sm font-semibold text-primary">{dueDate}</Text>
              <MaterialCommunityIcons name="chevron-right" size={18} color="#137fec" />
            </View>
          </TouchableOpacity>
        </View>

        {/* Assignees Section */}
        <View className="mt-8 px-4">
          <Text className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Assignees</Text>
          <View className="flex-row flex-wrap gap-2 items-center">
            {assignees.map(user => (
              <Animated.View
                key={user.id}
                entering={FadeIn}
                exiting={FadeOut}
                layout={Layout.springify()}
                className="flex-row items-center gap-1.5 bg-slate-100 dark:bg-slate-800 pl-1 pr-2 py-1 rounded-full border border-slate-200 dark:border-slate-700"
              >
                <Image source={{ uri: user.avatar }} className="w-6 h-6 rounded-full" />
                <Text className="text-xs font-semibold dark:text-slate-200">{user.name}</Text>
                <TouchableOpacity onPress={() => setAssignees(assignees.filter(a => a.id !== user.id))}>
                  <MaterialCommunityIcons name="close" size={14} color="#94a3b8" />
                </TouchableOpacity>
              </Animated.View>
            ))}
            <View className="relative flex-1 min-w-[120px]">
              <TextInput
                className="w-full bg-transparent border-none text-sm p-0 placeholder:text-slate-300 text-slate-900 dark:text-white"
                placeholder="Type @ to add..."
                value={searchQuery}
                onChangeText={setSearchQuery}
                placeholderTextColor="#cbd5e1"
              />
            </View>
          </View>

          {/* Suggested Members (Typing @ State) */}
          {searchQuery.includes('@') && (
            <View className="mt-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
              <View className="px-4 py-2 bg-slate-50 dark:bg-slate-800/50">
                <Text className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Suggested Members</Text>
              </View>
              {allUsers.filter(u => !assignees.find(a => a.id === u.id)).map(user => (
                <TouchableOpacity
                  key={user.id}
                  className="flex-row items-center gap-3 p-3 border-b border-slate-50 dark:border-slate-800"
                  onPress={() => {
                    setAssignees([...assignees, user]);
                    setSearchQuery("");
                  }}
                >
                  <Image source={{ uri: user.avatar }} className="w-8 h-8 rounded-full" />
                  <View className="flex-1">
                    <Text className="text-sm font-semibold text-slate-900 dark:text-white">{user.name}</Text>
                    <Text className="text-xs text-slate-500">{user.role}</Text>
                  </View>
                  <MaterialCommunityIcons name="plus-circle-outline" size={20} color="#cbd5e1" />
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        {/* Description Section */}
        <View className="mt-8 px-4">
          <Text className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Description</Text>
          <View className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-slate-50/50 dark:bg-slate-900/30">
            <View className="flex-row items-center gap-1 px-2 py-1 border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
              <TouchableOpacity className="p-1.5"><MaterialCommunityIcons name="format-bold" size={20} color="#64748b" /></TouchableOpacity>
              <TouchableOpacity className="p-1.5"><MaterialCommunityIcons name="format-italic" size={20} color="#64748b" /></TouchableOpacity>
              <TouchableOpacity className="p-1.5"><MaterialCommunityIcons name="format-list-bulleted" size={20} color="#64748b" /></TouchableOpacity>
              <View className="w-[1px] h-4 bg-slate-200 dark:bg-slate-800 mx-1" />
              <TouchableOpacity className="p-1.5"><MaterialCommunityIcons name="link-variant" size={20} color="#64748b" /></TouchableOpacity>
            </View>
            <TextInput
              className="w-full min-h-[140px] bg-transparent border-none text-sm p-4 text-slate-900 dark:text-slate-300"
              placeholder="Add more details about this task..."
              multiline
              value={description}
              onChangeText={setDescription}
              placeholderTextColor="#94a3b8"
              textAlignVertical="top"
            />
          </View>
        </View>

        {/* Slack Channel Link */}
        <View className="mt-8 px-4 mb-20">
          <TouchableOpacity
            className="flex-row items-center justify-between p-4 bg-primary/5 dark:bg-primary/10 border border-primary/20 rounded-xl"
            onPress={() => setIsChannelLinked(!isChannelLinked)}
          >
            <View className="flex-row items-center gap-3">
              <View className="bg-primary/20 p-2 rounded-lg">
                <MaterialCommunityIcons name="tag-outline" size={20} color="#137fec" />
              </View>
              <View>
                <Text className="text-sm font-bold text-slate-900 dark:text-white leading-none">Link Channel</Text>
                <Text className="text-xs text-slate-500 dark:text-slate-400 mt-1">Connect to #design-ops</Text>
              </View>
            </View>
            <View className="flex-row items-center gap-2">
              <Text className="text-xs font-bold text-primary">{isChannelLinked ? "Connected" : "Not Connected"}</Text>
              <MaterialCommunityIcons name={isChannelLinked ? "check-circle" : "circle-outline"} size={18} color="#137fec" />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Attachment Accessory Bar */}
      <View className="absolute bottom-0 left-0 right-0 bg-white dark:bg-background-dark border-t border-slate-100 dark:border-slate-800 p-2 flex-row items-center gap-4">
        <TouchableOpacity className="p-2"><MaterialCommunityIcons name="paperclip" size={24} color="#94a3b8" /></TouchableOpacity>
        <TouchableOpacity className="p-2"><MaterialCommunityIcons name="image-outline" size={24} color="#94a3b8" /></TouchableOpacity>
        <TouchableOpacity className="p-2"><MaterialCommunityIcons name="at" size={24} color="#94a3b8" /></TouchableOpacity>
        <TouchableOpacity className="p-2"><MaterialCommunityIcons name="emoticon-outline" size={24} color="#94a3b8" /></TouchableOpacity>
        <View className="flex-1" />
        <View className="flex-row items-center gap-2 mr-2">
          <MaterialCommunityIcons name="eye-outline" size={16} color="#94a3b8" />
          <Text className="text-slate-400 text-xs font-medium">Team Only</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
