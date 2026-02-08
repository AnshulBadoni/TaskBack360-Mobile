import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import Animated, { FadeInRight, FadeOut, LinearTransition } from 'react-native-reanimated';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Button } from '../components/Button';
import { getUsers, createProject } from '../api';

export default function NewProjectScreen() {
  const router = useRouter();
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [privacy, setPrivacy] = useState<'public' | 'private'>('public');
  const [searchQuery, setSearchQuery] = useState("");
  const [allUsers, setAllUsers] = useState<any[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const users = await getUsers();
    setAllUsers(users);
    // Initial selected users as per design
    setSelectedUsers(users.slice(0, 3));
  };

  const handleCreateProject = async () => {
    if (!projectName) return;
    setLoading(true);
    await createProject({
      name: projectName,
      description,
      privacy,
      members: selectedUsers.map(u => u.id)
    });
    setLoading(false);
    router.replace('/(tabs)/projects');
  };

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-background-dark">
      {/* Header */}
      <View className="sticky top-0 z-20 flex-row items-center justify-between px-4 pt-4 pb-4 bg-white/80 dark:bg-background-dark/80 border-b border-slate-100 dark:border-slate-800">
        <TouchableOpacity onPress={() => router.back()}>
          <Text className="text-primary font-medium text-base">Cancel</Text>
        </TouchableOpacity>
        <Text className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">New Project</Text>
        <TouchableOpacity>
          <Text className="text-primary font-bold text-base">Help</Text>
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 pb-32" showsVerticalScrollIndicator={false}>
        {/* Project Basics Section */}
        <View className="p-6 space-y-6">
          <View className="mb-6">
            <Text className="block text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Project Name</Text>
            <TextInput
              className="w-full px-4 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-lg font-medium text-slate-900 dark:text-white"
              placeholder="e.g. Q4 Growth Strategy"
              placeholderTextColor="#94a3b8"
              value={projectName}
              onChangeText={setProjectName}
            />
          </View>
          <View className="mb-6">
            <Text className="block text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Description</Text>
            <TextInput
              className="w-full px-4 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-base text-slate-900 dark:text-white min-h-[100px]"
              placeholder="Define the scope and objectives..."
              placeholderTextColor="#94a3b8"
              multiline
              value={description}
              onChangeText={setDescription}
              textAlignVertical="top"
            />
          </View>
        </View>

        <View className="h-2 bg-slate-50 dark:bg-slate-900/50" />

        {/* Team Invitation Section */}
        <View className="p-6">
          <Text className="text-lg font-bold text-slate-900 dark:text-white mb-4">Invite Team</Text>

          {/* Search Input */}
          <View className="relative mb-6 justify-center">
            <View className="absolute left-4 z-10">
              <MaterialCommunityIcons name="magnify" size={24} color="#94a3b8" />
            </View>
            <TextInput
              className="w-full pl-12 pr-4 py-3.5 rounded-full bg-slate-100 dark:bg-slate-800 text-base text-slate-900 dark:text-white"
              placeholder="Search company members..."
              placeholderTextColor="#94a3b8"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>

          {/* Search Results */}
          {searchQuery.length > 0 && (
            <View className="mb-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
              {allUsers.filter(u => u.name.toLowerCase().includes(searchQuery.toLowerCase()) && !selectedUsers.find(su => su.id === u.id)).map(user => (
                <TouchableOpacity
                  key={user.id}
                  className="flex-row items-center p-3 border-b border-slate-50 dark:border-slate-800"
                  onPress={() => {
                    setSelectedUsers([...selectedUsers, user]);
                    setSearchQuery("");
                  }}
                >
                  <Image source={{ uri: user.avatar }} className="w-8 h-8 rounded-full mr-3" />
                  <View>
                    <Text className="text-sm font-semibold text-slate-900 dark:text-white">{user.name}</Text>
                    <Text className="text-xs text-slate-500">{user.role}</Text>
                  </View>
                  <View className="flex-1" />
                  <MaterialCommunityIcons name="plus-circle-outline" size={20} color="#cbd5e1" />
                </TouchableOpacity>
              ))}
            </View>
          )}

          {/* Selected Members Horizontal List */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row">
            {selectedUsers.map((user) => (
              <Animated.View
                key={user.id}
                entering={FadeInRight}
                exiting={FadeOut}
                layout={LinearTransition}
                className="relative mr-3"
              >
                <Image
                  source={{ uri: user.avatar }}
                  className="w-12 h-12 rounded-full border-2 border-primary"
                />
                <TouchableOpacity
                  className="absolute -top-1 -right-1 w-5 h-5 bg-slate-900 text-white rounded-full items-center justify-center border-2 border-white dark:border-slate-800"
                  onPress={() => setSelectedUsers(selectedUsers.filter(u => u.id !== user.id))}
                >
                  <MaterialCommunityIcons name="close" size={12} color="white" />
                </TouchableOpacity>
              </Animated.View>
            ))}
            <TouchableOpacity className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 border-2 border-dashed border-slate-300 dark:border-slate-600 items-center justify-center">
              <MaterialCommunityIcons name="plus" size={24} color="#94a3b8" />
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View className="h-2 bg-slate-50 dark:bg-slate-900/50" />

        {/* Privacy Section */}
        <View className="p-6 pb-32">
          <View className="mb-4">
            <Text className="text-lg font-bold text-slate-900 dark:text-white">Project Privacy</Text>
            <Text className="text-sm text-slate-500 dark:text-slate-400">Control who can access this project.</Text>
          </View>

          <View className="flex-row p-1 bg-slate-100 dark:bg-slate-800 rounded-xl mb-4">
            <TouchableOpacity
              className={`flex-1 flex-row items-center justify-center py-3 rounded-lg ${privacy === 'public' ? 'bg-white dark:bg-slate-700 shadow-sm' : ''}`}
              onPress={() => setPrivacy('public')}
            >
              <MaterialCommunityIcons name="earth" size={20} color={privacy === 'public' ? "#137fec" : "#64748b"} />
              <Text className={`ml-2 font-semibold ${privacy === 'public' ? 'text-primary' : 'text-slate-500 dark:text-slate-400'}`}>Public</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className={`flex-1 flex-row items-center justify-center py-3 rounded-lg ${privacy === 'private' ? 'bg-white dark:bg-slate-700 shadow-sm' : ''}`}
              onPress={() => setPrivacy('private')}
            >
              <MaterialCommunityIcons name="lock-outline" size={20} color={privacy === 'private' ? "#137fec" : "#64748b"} />
              <Text className={`ml-2 font-semibold ${privacy === 'private' ? 'text-primary' : 'text-slate-500 dark:text-slate-400'}`}>Private</Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row items-start p-4 bg-primary/5 dark:bg-primary/10 rounded-xl border border-primary/10">
            <MaterialCommunityIcons name="information-outline" size={20} color="#137fec" style={{ marginTop: 2 }} />
            <Text className="ml-3 text-xs text-slate-600 dark:text-slate-300 leading-relaxed flex-1">
              <Text className="font-bold text-primary">Public: </Text>
              Everyone in your workspace can view, join, and contribute to this project without an explicit invitation.
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Fixed Footer Action */}
      <View className="absolute bottom-0 left-0 right-0 p-6 bg-white/90 dark:bg-background-dark/90 border-t border-slate-100 dark:border-slate-800">
        <Button
          title="Create Project"
          onPress={handleCreateProject}
          loading={loading}
          disabled={!projectName}
          className="w-full bg-primary py-4 rounded-2xl"
          textClassName="text-lg font-bold"
        />
        <View className="h-4" />
      </View>
    </SafeAreaView>
  );
}
