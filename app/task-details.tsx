import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Card } from '../components/Card';
import { getTaskById } from '../api';

export default function TaskDetailsScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const [task, setTask] = useState<any>(null);
  const [comment, setComment] = useState("");
  const [activities, setActivities] = useState<any[]>([]);

  useEffect(() => {
    loadTask();
  }, [id]);

  const loadTask = async () => {
    const taskData = await getTaskById((id as string) || 'TASK-102');
    setTask(taskData);
    setActivities([
      { id: '1', type: 'system', user: 'Alex Rivera', action: 'changed status to', value: 'In Progress', time: '2 hours ago' },
      { id: '2', type: 'comment', user: 'Sarah Smith', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxwmfMPtPn-vE6ez5YcLXXhy2gEio5v70fIBbSD6zAGcnhI0LdTFGC_0jJh8kHEPolD9UGBB_RkQqwYLfNSf-Cj_4y9ejoq9EfVpAG0yHFb4zIrKRhnibyfvhn79Ce0gWdVKD-vmrpXn-Ll0_tMasmt8dFmDNBrPW7Hi39-9s7sIjI36-t5oXzl_sLlgg12etJX-HKrrjimdqlkoxHirCyU2f9gDf6syjaMb0vbi-2TugPzfB-7fHQgCcqufnAVCQaUJf0oy0CTUyq', text: "I've uploaded the new OAuth flow diagrams. Alex, can you review the session timeout parameters? We might need to extend them for mobile users.", time: '1 hour ago' },
      { id: '3', type: 'upload', user: 'Sarah Smith', action: 'uploaded 2 files', time: '1 hour ago' },
    ]);
  };

  const updateStatus = (newStatus: string) => {
    setTask({ ...task, status: newStatus });
    setActivities([{
      id: Date.now().toString(),
      type: 'system',
      user: 'Me',
      action: 'changed status to',
      value: newStatus,
      time: 'Just now'
    }, ...activities]);
  };

  if (!task) return null;

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-background-dark">
      {/* Header Navigation */}
      <View className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 px-4 h-14 border-b border-slate-200 dark:border-slate-800 flex-row items-center justify-between">
        <TouchableOpacity onPress={() => router.back()} className="flex-row items-center">
          <MaterialCommunityIcons name="chevron-left" size={24} color="#137fec" />
          <Text className="text-[17px] text-primary">Back</Text>
        </TouchableOpacity>
        <Text className="text-[17px] font-semibold text-slate-900 dark:text-white">Task Insight</Text>
        <View className="flex-row items-center gap-4">
          <TouchableOpacity><MaterialCommunityIcons name="share-variant-outline" size={22} color="#137fec" /></TouchableOpacity>
          <TouchableOpacity><MaterialCommunityIcons name="dots-horizontal" size={22} color="#137fec" /></TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Task Identity Section */}
        <View className="p-4 bg-white dark:bg-slate-900/50">
          <View className="flex-row items-center justify-between mb-2">
            <Text className="text-xs font-bold tracking-wider text-primary uppercase">#{task.id}</Text>
            <TouchableOpacity
              className="flex-row items-center bg-primary/10 rounded-full px-4 py-1"
              onPress={() => updateStatus(task.status === 'Done' ? 'In Progress' : 'Done')}
            >
              <Text className="text-sm font-semibold text-primary mr-1">{task.status}</Text>
              <MaterialCommunityIcons name="chevron-down" size={16} color="#137fec" />
            </TouchableOpacity>
          </View>
          <Text className="text-2xl font-bold leading-tight text-slate-900 dark:text-white mb-4">{task.name}</Text>
        </View>

        {/* Metadata Grid */}
        <View className="grid grid-cols-2 flex-row flex-wrap bg-slate-200 dark:bg-slate-800 border-y border-slate-200 dark:border-slate-800">
          <View className="w-1/2 bg-white dark:bg-slate-900 p-3 border-r border-b border-slate-100 dark:border-slate-800">
            <Text className="text-[11px] uppercase tracking-wider text-slate-500 font-bold mb-2">Assignee</Text>
            <View className="flex-row items-center gap-2">
              <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApBZs0J_rMedctrjn3hMoneMePJ1nbjK4L7qgRG8Bfm36TeQfVMmZ84CqvX42NvE1U8UEKZClgXxaTiH5MPkPFd5zeGD1FD-AX2DAsGNIuQXhY9CFsEYrjWgdTPSmgQkk5ijYlbEh7MRRhXe5xNYoL6IMdC5R6QsDc632how_stqCifRoyUSnUi0CBEnP4IhCbLBfH8LFOGNV2R3bFM6RJ4kesGf_n42Sagbz5STt4m_Vu7_6eOFOmldrHnmZTM0jWrWVFk3Qa9k9J' }} className="w-6 h-6 rounded-full" />
              <Text className="text-sm font-medium text-slate-900 dark:text-white">Alex Rivera</Text>
            </View>
          </View>
          <View className="w-1/2 bg-white dark:bg-slate-900 p-3 border-b border-slate-100 dark:border-slate-800">
            <Text className="text-[11px] uppercase tracking-wider text-slate-500 font-bold mb-2">Due Date</Text>
            <View className="flex-row items-center gap-2">
              <MaterialCommunityIcons name="calendar-blank-outline" size={14} color="#94a3b8" />
              <Text className="text-sm font-medium text-slate-900 dark:text-white">{task.dueDate}</Text>
            </View>
          </View>
          <View className="w-1/2 bg-white dark:bg-slate-900 p-3 border-r border-slate-100 dark:border-slate-800">
            <Text className="text-[11px] uppercase tracking-wider text-slate-500 font-bold mb-2">Priority</Text>
            <View className="flex-row items-center gap-2">
              <MaterialCommunityIcons name="flag" size={14} color="#ef4444" />
              <Text className="text-sm font-medium text-slate-900 dark:text-white">{task.priority} Urgency</Text>
            </View>
          </View>
          <View className="w-1/2 bg-white dark:bg-slate-900 p-3">
            <Text className="text-[11px] uppercase tracking-wider text-slate-500 font-bold mb-2">Labels</Text>
            <View className="flex-row flex-wrap gap-1">
              {task.labels.map((label: string) => (
                <View key={label} className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">
                  <Text className={`text-[10px] font-bold ${label === 'SECURITY' ? 'text-red-600' : 'text-slate-900 dark:text-slate-300'}`}>{label}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Description Section */}
        <View className="p-4 bg-white dark:bg-slate-900">
          <Text className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-2">Description</Text>
          <View className="space-y-3">
            <Text className="text-[15px] leading-relaxed text-slate-700 dark:text-slate-300">{task.description}</Text>
          </View>
        </View>

        {/* Attachments */}
        <View className="px-4 py-3 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
          <View className="flex-row items-center justify-between mb-3">
            <Text className="text-sm font-bold uppercase tracking-wider text-slate-500">Attachments (2)</Text>
            <TouchableOpacity><Text className="text-primary text-sm font-medium">View All</Text></TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row gap-3">
            <View className="w-32 aspect-video bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 mr-3">
              <View className="flex-1 bg-primary/20 items-center justify-center">
                <MaterialCommunityIcons name="file-document-outline" size={24} color="#137fec" />
              </View>
              <View className="p-1.5 bg-white dark:bg-slate-800">
                <Text className="text-[10px] font-medium text-slate-900 dark:text-white" numberOfLines={1}>spec_v2.pdf</Text>
              </View>
            </View>
            <View className="w-32 aspect-video bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700">
              <View className="flex-1 bg-emerald-400/20 items-center justify-center">
                <MaterialCommunityIcons name="image-outline" size={24} color="#059669" />
              </View>
              <View className="p-1.5 bg-white dark:bg-slate-800">
                <Text className="text-[10px] font-medium text-slate-900 dark:text-white" numberOfLines={1}>auth_flow_diagram.png</Text>
              </View>
            </View>
          </ScrollView>
        </View>

        {/* Activity & Discussion */}
        <View className="mt-4 pb-32">
          <View className="px-4 py-2">
            <Text className="text-sm font-bold uppercase tracking-wider text-slate-500">Activity & Discussion</Text>
          </View>
          <View className="space-y-6 px-4 py-4">
            {activities.map((activity, index) => (
              <View key={activity.id} className="flex-row gap-4 mb-6">
                <View className="items-center">
                  {activity.type === 'system' ? (
                    <View className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 items-center justify-center">
                      <MaterialCommunityIcons name="history" size={16} color="#64748b" />
                    </View>
                  ) : activity.type === 'upload' ? (
                    <View className="w-8 h-8 rounded-full bg-primary/10 items-center justify-center">
                      <MaterialCommunityIcons name="upload" size={16} color="#137fec" />
                    </View>
                  ) : (
                    <Image source={{ uri: activity.avatar }} className="w-8 h-8 rounded-full" />
                  )}
                  {index < activities.length - 1 && <View className="w-px flex-1 bg-slate-200 dark:bg-slate-800 mt-2" />}
                </View>
                <View className="flex-1">
                  {activity.type === 'comment' ? (
                    <View className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
                      <View className="flex-row items-center justify-between mb-1">
                        <Text className="text-[13px] font-bold text-slate-900 dark:text-white">{activity.user}</Text>
                        <Text className="text-[10px] text-slate-400">{activity.time}</Text>
                      </View>
                      <Text className="text-sm text-slate-700 dark:text-slate-300">{activity.text}</Text>
                    </View>
                  ) : (
                    <View className="pt-1.5">
                      <Text className="text-xs text-slate-500">
                        <Text className="font-semibold text-slate-700 dark:text-slate-300">{activity.user}</Text> {activity.action} <Text className={activity.value === 'In Progress' ? "text-primary font-bold" : "text-slate-700 dark:text-slate-300"}>{activity.value}</Text>
                      </Text>
                      <Text className="text-[10px] text-slate-400 mt-0.5">{activity.time}</Text>
                    </View>
                  )}
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Fixed Quick Reply Bar */}
      <View className="absolute bottom-0 left-0 right-0 bg-white/90 dark:bg-slate-950/90 px-4 py-3 pb-8 border-t border-slate-200 dark:border-slate-800">
        <View className="max-w-md mx-auto flex-row items-center gap-3">
          <TouchableOpacity><MaterialCommunityIcons name="paperclip" size={24} color="#94a3b8" /></TouchableOpacity>
          <View className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-full px-4 py-2.5">
            <TextInput
              className="text-sm text-slate-900 dark:text-white"
              placeholder="Add a comment..."
              placeholderTextColor="#64748b"
              value={comment}
              onChangeText={setComment}
            />
          </View>
          <TouchableOpacity
            className="bg-primary w-9 h-9 rounded-full items-center justify-center shadow-lg"
            onPress={() => {
              if (!comment) return;
              setActivities([...activities, { id: Date.now().toString(), type: 'comment', user: 'Me', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApBZs0J_rMedctrjn3hMoneMePJ1nbjK4L7qgRG8Bfm36TeQfVMmZ84CqvX42NvE1U8UEKZClgXxaTiH5MPkPFd5zeGD1FD-AX2DAsGNIuQXhY9CFsEYrjWgdTPSmgQkk5ijYlbEh7MRRhXe5xNYoL6IMdC5R6QsDc632how_stqCifRoyUSnUi0CBEnP4IhCbLBfH8LFOGNV2R3bFM6RJ4kesGf_n42Sagbz5STt4m_Vu7_6eOFOmldrHnmZTM0jWrWVFk3Qa9k9J', text: comment, time: 'Just now' }]);
              setComment("");
            }}
          >
            <MaterialCommunityIcons name="arrow-up" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
