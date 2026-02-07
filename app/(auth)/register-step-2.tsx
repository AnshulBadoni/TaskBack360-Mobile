import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Header } from '../../components/Header';

export default function RegisterStep2() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark">
      <Header
        subtitle="Step 2 of 4"
        showBack={true}
      />

      <View className="flex-row px-6 py-4">
        <View className="h-1.5 flex-1 rounded-full bg-primary mr-1" />
        <View className="h-1.5 flex-1 rounded-full bg-primary mx-1" />
        <View className="h-1.5 flex-1 rounded-full bg-slate-200 dark:bg-slate-700 mx-1" />
        <View className="h-1.5 flex-1 rounded-full bg-slate-200 dark:bg-slate-700 ml-1" />
      </View>

      <ScrollView className="flex-1 px-6 pt-4 pb-32">
        <View className="max-w-md mx-auto">
          <Text className="text-3xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white">
            Secure your account
          </Text>
          <Text className="mt-2 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Set up your login credentials. We recommend using a unique password for maximum security.
          </Text>

          <View className="mt-8 space-y-6">
            <Input
              label="Work Email"
              value="j.cooper@nexus.com"
              editable={false}
              rightIcon="check-circle"
            />

            <View>
              <Input
                label="Create Password"
                placeholder="Min. 12 characters"
                secureTextEntry
                rightIcon="eye"
              />
              <View className="flex-row flex-wrap mt-2">
                {[
                  { label: '12+ characters', done: true },
                  { label: 'One number', done: true },
                  { label: 'One special character', done: true },
                  { label: 'Case sensitive', done: false },
                ].map((item, index) => (
                  <View key={index} className="flex-row items-center w-1/2 mb-2">
                    <View className={`w-1.5 h-1.5 rounded-full mr-2 ${item.done ? 'bg-green-500' : 'bg-slate-300'}`} />
                    <Text className={`text-xs ${item.done ? 'text-green-600' : 'text-slate-400'}`}>{item.label}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>

          <View className="mt-8 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/50 flex-row">
            <MaterialCommunityIcons name="shield-check" size={24} color="#3b82f6" />
            <View className="flex-1 ml-3">
              <Text className="text-sm font-semibold text-blue-700 dark:text-blue-300">Security Tip</Text>
              <Text className="mt-0.5 text-sm text-blue-700 dark:text-blue-300 opacity-90">
                Use a phrase or a series of random words. It's harder for computers to guess but easier for you to remember.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View className="p-6 bg-background-light/80 dark:bg-background-dark/80">
        <Button
          title="Continue"
          onPress={() => router.push('/(auth)/register-step-3' as any)}
          icon={<MaterialCommunityIcons name="chevron-right" size={20} color="white" />}
        />
      </View>
    </SafeAreaView>
  );
}
