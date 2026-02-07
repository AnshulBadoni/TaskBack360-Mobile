import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-background-light dark:bg-background-dark">
      <View className="flex-1 px-6 pt-16 pb-12 max-w-md mx-auto w-full">
        {/* Logo Section */}
        <View className="flex flex-row justify-center mb-10">
          <View className="relative w-16 h-16 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
             <MaterialCommunityIcons name="shield-account" size={40} color="white" />
             <View className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-background-dark" />
          </View>
        </View>

        {/* Header Text */}
        <View className="mb-10">
          <Text className="text-3xl font-bold text-slate-900 dark:text-white text-center">Welcome Back</Text>
          <Text className="text-slate-500 dark:text-slate-400 mt-2 text-base text-center">Access your secure team workspace</Text>
        </View>

        {/* Login Form */}
        <View className="space-y-4">
          <View className="space-y-1.5 mb-4">
            <Text className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider ml-1">Corporate Email</Text>
            <TextInput
              className="w-full h-14 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 text-slate-900 dark:text-white"
              placeholder="name@company.com"
              placeholderTextColor="#94a3b8"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View className="space-y-1.5">
            <Text className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider ml-1">Password</Text>
            <View className="relative">
              <TextInput
                className="w-full h-14 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 text-slate-900 dark:text-white"
                placeholder="••••••••"
                placeholderTextColor="#94a3b8"
                secureTextEntry
              />
              <TouchableOpacity className="absolute right-4 top-14 -mt-10">
                <MaterialCommunityIcons name="eye-outline" size={20} color="#94a3b8" />
              </TouchableOpacity>
            </View>
          </View>

          <View className="flex flex-row justify-end pt-1">
            <Link href="/(auth)/forgot-password" asChild>
              <TouchableOpacity>
                <Text className="text-sm font-medium text-primary">Forgot Password?</Text>
              </TouchableOpacity>
            </Link>
          </View>

          <TouchableOpacity
            className="w-full h-14 bg-primary rounded-xl shadow-lg shadow-primary/25 flex flex-row items-center justify-center mt-6"
            onPress={() => router.replace('/onboarding')}
          >
            <Text className="text-white font-semibold text-lg mr-2">Sign In</Text>
            <MaterialCommunityIcons name="arrow-right" size={20} color="white" />
          </TouchableOpacity>
        </View>

        {/* SSO Divider */}
        <View className="relative my-10 flex flex-row items-center">
          <View className="flex-1 h-[1px] bg-slate-200 dark:border-slate-800" />
          <Text className="px-4 text-xs uppercase text-slate-500 font-medium">Or continue with SSO</Text>
          <View className="flex-1 h-[1px] bg-slate-200 dark:border-slate-800" />
        </View>

        {/* SSO Buttons */}
        <View className="flex flex-row space-x-4">
          <TouchableOpacity className="flex-1 flex flex-row items-center justify-center h-14 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl mr-2">
             <MaterialCommunityIcons name="google" size={20} color="#4285F4" />
             <Text className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-2">Google</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 flex flex-row items-center justify-center h-14 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl ml-2">
             <MaterialCommunityIcons name="facebook" size={20} color="#1877F2" />
             <Text className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-2">Meta</Text>
          </TouchableOpacity>
        </View>

        {/* Footer Info */}
        <View className="mt-10 flex flex-col items-center space-y-4">
          <View className="flex flex-row items-center mb-2">
            <MaterialCommunityIcons name="lock" size={14} color="#94a3b8" />
            <Text className="text-slate-400 text-xs ml-1">End-to-end encrypted connection</Text>
          </View>
          <Text className="text-slate-500 dark:text-slate-500 text-xs text-center px-8 leading-relaxed">
            By signing in, you agree to our <Text className="underline">Terms of Service</Text> and <Text className="underline">Privacy Policy</Text>.
          </Text>
          <TouchableOpacity className="mt-2">
            <Text className="text-primary text-sm font-medium">Contact IT Support</Text>
          </TouchableOpacity>
          <Link href="/(auth)/register" asChild>
            <TouchableOpacity className="mt-6">
              <Text className="text-slate-500 dark:text-slate-400 text-sm">Don't have an account? <Text className="text-primary font-bold">Register</Text></Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
}
