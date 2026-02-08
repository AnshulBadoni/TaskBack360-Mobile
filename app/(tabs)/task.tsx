import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
    TextInput,
    TouchableOpacity,
    StatusBar,
    SafeAreaView,
    Platform,
    useColorScheme,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const TaskInsightScreen = ({ navigation }) => {
    const colorScheme = useColorScheme();
    const isDark = colorScheme === 'dark';
    const [comment, setComment] = useState('');
    const [status, setStatus] = useState('In Progress');

    return (
        <SafeAreaView className={`flex-1 ${isDark ? 'bg-[#101922]' : 'bg-[#f6f7f8]'}`}>
            <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />

            {/* Header Navigation */}
            <View className={`flex-row items-center justify-between px-4 h-14 border-b ${isDark ? 'bg-[#101922] border-slate-800' : 'bg-white border-slate-200'}`}>
                <TouchableOpacity
                    className="flex-row items-center -ml-2"
                    onPress={() => navigation?.goBack()}
                    activeOpacity={0.7}
                >
                    <MaterialIcons name="chevron-left" size={28} color="#137fec" />
                    <Text className="text-[17px] text-[#137fec] font-medium">Back</Text>
                </TouchableOpacity>

                <Text className={`text-[17px] font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Task Details
                </Text>

                <View className="flex-row items-center gap-2">
                    <TouchableOpacity className="p-2" activeOpacity={0.7}>
                        <MaterialIcons name="star-outline" size={22} color="#137fec" />
                    </TouchableOpacity>
                    <TouchableOpacity className="p-2" activeOpacity={0.7}>
                        <MaterialIcons name="more-horiz" size={22} color="#137fec" />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView
                className="flex-1"
                contentContainerStyle={{ paddingBottom: 120 }}
                showsVerticalScrollIndicator={false}
            >
                {/* Task Header Card */}
                <View className={`p-5 ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
                    {/* Project Badge */}
                    <TouchableOpacity 
                        className="flex-row items-center self-start gap-2 mb-4 bg-violet-500/10 px-3 py-1.5 rounded-lg"
                        activeOpacity={0.7}
                    >
                        <View className="w-2 h-2 rounded-full bg-violet-500" />
                        <Text className="text-[13px] font-semibold text-violet-600 dark:text-violet-400">
                            OAuth Integration Project
                        </Text>
                        <MaterialIcons name="chevron-right" size={16} color="#8b5cf6" />
                    </TouchableOpacity>

                    {/* Task ID & Status Row */}
                    <View className="flex-row items-center justify-between mb-3">
                        <View className={`px-2.5 py-1 rounded-md ${isDark ? 'bg-slate-800' : 'bg-slate-100'}`}>
                            <Text className={`text-[11px] font-bold tracking-wide ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                                TASK-102
                            </Text>
                        </View>
                        
                        <TouchableOpacity 
                            className="flex-row items-center gap-1.5 bg-[#137fec]/10 rounded-full pl-3 pr-2 py-1.5"
                            activeOpacity={0.7}
                        >
                            <View className="w-2 h-2 rounded-full bg-[#137fec]" />
                            <Text className="text-[13px] font-semibold text-[#137fec]">{status}</Text>
                            <MaterialIcons name="keyboard-arrow-down" size={18} color="#137fec" />
                        </TouchableOpacity>
                    </View>

                    {/* Task Title */}
                    <Text className={`text-[22px] font-bold leading-8 mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        Refactor authentication module with OAuth2 compliance
                    </Text>

                    {/* Quick Stats */}
                    <View className={`flex-row items-center pt-4 border-t ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
                        <View className="flex-row items-center gap-1.5">
                            <MaterialIcons name="chat-bubble-outline" size={15} color="#64748b" />
                            <Text className="text-[13px] text-slate-500 font-medium">4</Text>
                        </View>
                        <View className={`w-1 h-1 rounded-full mx-4 ${isDark ? 'bg-slate-700' : 'bg-slate-300'}`} />
                        <View className="flex-row items-center gap-1.5">
                            <MaterialIcons name="attach-file" size={15} color="#64748b" style={{ transform: [{ rotate: '45deg' }] }} />
                            <Text className="text-[13px] text-slate-500 font-medium">2</Text>
                        </View>
                        <View className={`w-1 h-1 rounded-full mx-4 ${isDark ? 'bg-slate-700' : 'bg-slate-300'}`} />
                        <View className="flex-row items-center gap-1.5">
                            <MaterialIcons name="check-circle-outline" size={15} color="#64748b" />
                            <Text className="text-[13px] text-slate-500 font-medium">1/3</Text>
                        </View>
                    </View>
                </View>

                {/* Metadata Grid */}
                <View className={`flex-row flex-wrap ${isDark ? 'bg-slate-800/50' : 'bg-slate-200/50'}`} style={{ gap: 1 }}>
                    {/* Assignee */}
                    <View className={`w-[49.7%] p-4 ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
                        <Text className={`text-[11px] uppercase tracking-wider font-semibold mb-2.5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                            Assignee
                        </Text>
                        <TouchableOpacity className="flex-row items-center gap-2.5" activeOpacity={0.7}>
                            <Image
                                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApBZs0J_rMedctrjn3hMoneMePJ1nbjK4L7qgRG8Bfm36TeQfVMmZ84CqvX42NvE1U8UEKZClgXxaTiH5MPkPFd5zeGD1FD-AX2DAsGNIuQXhY9CFsEYrjWgdTPSmgQkk5ijYlbEh7MRRhXe5xNYoL6IMdC5R6QsDc632how_stqCifRoyUSnUi0CBEnP4IhCbLBfH8LFOGNV2R3bFM6RJ4kesGf_n42Sagbz5STt4m_Vu7_6eOFOmldrHnmZTM0jWrWVFk3Qa9k9J' }}
                                className="w-7 h-7 rounded-full"
                                style={{ 
                                    borderWidth: 2, 
                                    borderColor: isDark ? '#334155' : '#e2e8f0' 
                                }}
                            />
                            <Text className={`text-[15px] font-medium ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                                Alex Rivera
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {/* Due Date */}
                    <View className={`w-[49.7%] p-4 ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
                        <Text className={`text-[11px] uppercase tracking-wider font-semibold mb-2.5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                            Due Date
                        </Text>
                        <TouchableOpacity className="flex-row items-center gap-2" activeOpacity={0.7}>
                            <View className={`w-7 h-7 rounded-lg items-center justify-center ${isDark ? 'bg-amber-500/10' : 'bg-amber-50'}`}>
                                <MaterialIcons name="event" size={16} color="#f59e0b" />
                            </View>
                            <Text className={`text-[15px] font-medium ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                                Oct 24
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {/* Priority */}
                    <View className={`w-[49.7%] p-4 ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
                        <Text className={`text-[11px] uppercase tracking-wider font-semibold mb-2.5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                            Priority
                        </Text>
                        <TouchableOpacity className="flex-row items-center gap-2" activeOpacity={0.7}>
                            <View className={`w-7 h-7 rounded-lg items-center justify-center ${isDark ? 'bg-red-500/10' : 'bg-red-50'}`}>
                                <MaterialIcons name="flag" size={16} color="#ef4444" />
                            </View>
                            <Text className={`text-[15px] font-medium ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                                High
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {/* Estimate */}
                    <View className={`w-[49.7%] p-4 ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
                        <Text className={`text-[11px] uppercase tracking-wider font-semibold mb-2.5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                            Estimate
                        </Text>
                        <TouchableOpacity className="flex-row items-center gap-2" activeOpacity={0.7}>
                            <View className={`w-7 h-7 rounded-lg items-center justify-center ${isDark ? 'bg-blue-500/10' : 'bg-blue-50'}`}>
                                <MaterialIcons name="schedule" size={16} color="#3b82f6" />
                            </View>
                            <Text className={`text-[15px] font-medium ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                                8 hours
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Labels Section */}
                <View className={`px-5 py-4 ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
                    <Text className={`text-[11px] uppercase tracking-wider font-semibold mb-3 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                        Labels
                    </Text>
                    <View className="flex-row flex-wrap gap-2">
                        <View className={`px-3 py-1.5 rounded-lg border ${isDark ? 'bg-blue-500/10 border-blue-500/20' : 'bg-blue-50 border-blue-100'}`}>
                            <Text className="text-[12px] font-semibold text-blue-600 dark:text-blue-400">Backend</Text>
                        </View>
                        <View className={`px-3 py-1.5 rounded-lg border ${isDark ? 'bg-red-500/10 border-red-500/20' : 'bg-red-50 border-red-100'}`}>
                            <Text className="text-[12px] font-semibold text-red-600 dark:text-red-400">Security</Text>
                        </View>
                        <View className={`px-3 py-1.5 rounded-lg border ${isDark ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-emerald-50 border-emerald-100'}`}>
                            <Text className="text-[12px] font-semibold text-emerald-600 dark:text-emerald-400">API</Text>
                        </View>
                        <TouchableOpacity 
                            className={`w-8 h-8 rounded-lg border-2 border-dashed items-center justify-center ${isDark ? 'border-slate-700' : 'border-slate-200'}`}
                            activeOpacity={0.7}
                        >
                            <MaterialIcons name="add" size={16} color={isDark ? '#64748b' : '#94a3b8'} />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Divider */}
                <View className={`h-2 ${isDark ? 'bg-[#101922]' : 'bg-[#f6f7f8]'}`} />

                {/* Description Section */}
                <View className={`p-5 ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
                    <View className="flex-row items-center justify-between mb-3">
                        <Text className={`text-[11px] uppercase tracking-wider font-semibold ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                            Description
                        </Text>
                        <TouchableOpacity activeOpacity={0.7}>
                            <MaterialIcons name="edit" size={16} color="#137fec" />
                        </TouchableOpacity>
                    </View>
                    
                    <Text className={`text-[15px] leading-7 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                        We need to transition our current JWT implementation to a full OAuth2 flow. This includes updating the middleware to support refresh tokens and implementing scope-based authorization.
                    </Text>

                    {/* Subtasks */}
                    <View className={`mt-5 pt-5 border-t ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
                        