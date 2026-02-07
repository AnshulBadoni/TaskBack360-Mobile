import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter, Link } from 'expo-router';
import { Button } from '../../components/Button';

export default function RecoverySent() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark">
      <View className="p-4 pt-6">
        <TouchableOpacity onPress={() => router.back()} className="w-10 h-10 items-center justify-center rounded-full">
          <MaterialCommunityIcons name="chevron-left" size={28} color="#0d141b" />
        </TouchableOpacity>
      </View>

      <View className="flex-1 items-center justify-center px-8 pb-20">
        <View className="mb-10 relative">
          <View className="w-24 h-24 bg-primary/10 dark:bg-primary/20 rounded-full items-center justify-center">
            <View className="w-16 h-16 bg-primary rounded-full items-center justify-center shadow-lg shadow-primary/30">
              <MaterialCommunityIcons name="check" size={40} color="white" />
            </View>
          </View>
        </View>

        <View className="items-center">
          <Text className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight text-center">Check your email</Text>
          <Text className="text-slate-600 dark:text-slate-400 text-base leading-relaxed text-center mt-4 px-4">
            We've sent a recovery link to your <Text className="font-medium text-slate-900 dark:text-slate-200">work email</Text>. Please click the link to reset your password and get back to your team.
          </Text>
        </View>

        <View className="w-full mt-10 space-y-4">
          <Button
            title="Open Email App"
            onPress={() => {}}
            icon={<MaterialCommunityIcons name="email-outline" size={20} color="white" />}
          />
          <View className="pt-4 items-center">
             <Text className="text-slate-500 dark:text-slate-500 text-sm mb-2 text-center">Didn't receive the email?</Text>
             <TouchableOpacity>
               <Text className="text-primary font-semibold text-sm">Resend Link</Text>
             </TouchableOpacity>
          </View>
        </View>
      </View>

      <View className="p-6 items-center">
        <View className="w-full border-t border-slate-200 dark:border-slate-800 pt-6 items-center">
          <Link href="/(auth)/login" asChild>
            <TouchableOpacity>
               <Text className="text-slate-400 dark:text-slate-600 text-sm font-medium">Back to Sign In</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}
