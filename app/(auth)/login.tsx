import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import { login } from '../api/auth';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSignIn = async () => {
    // Clear previous error
    setError('');

    // Basic validation
    if (!email || !password) {
      setError('Please enter email and password');
      return;
    }

    setLoading(true);

    try {
      const response = await login({ email, password });
      alert(JSON.stringify(response));
      if (response.status === 200 && response.data) {
        // Login successful - navigate to next screen
        router.replace('/onboarding');
      } else {
        // Login failed
        setError(response.message || 'Invalid email or password');
      }
    } catch (err) {
      // API error
      alert(JSON.stringify(err));
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView className="flex-1 bg-background-light dark:bg-background-dark">
      <View className="flex-1 px-6 pt-24 pb-12 max-w-md mx-auto w-full">
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

        {/* Error Message */}
        {error ? (
          <View className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4 mb-6 flex-row items-center">
            <MaterialCommunityIcons name="alert-circle" size={20} color="#EF4444" />
            <Text className="text-red-600 dark:text-red-400 text-sm font-medium ml-2 flex-1">{error}</Text>
            <TouchableOpacity onPress={() => setError('')}>
              <MaterialCommunityIcons name="close" size={18} color="#EF4444" />
            </TouchableOpacity>
          </View>
        ) : null}

        {/* Login Form */}
        <View className="space-y-4">
          <View className="space-y-1.5 mb-4">
            <Text className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider ml-1">Corporate Email</Text>
            <TextInput
              className={`w-full h-14 bg-white dark:bg-slate-900 border ${error ? 'border-red-300' : 'border-slate-200 dark:border-slate-800'} rounded-xl px-4 text-slate-900 dark:text-white`}
              placeholder="name@company.com"
              placeholderTextColor="#94a3b8"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                setError('');
              }}
              editable={!loading}
            />
          </View>

          <View className="space-y-1.5">
            <Text className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider ml-1">Password</Text>
            <View className="relative">
              <TextInput
                className={`w-full h-14 bg-white dark:bg-slate-900 border ${error ? 'border-red-300' : 'border-slate-200 dark:border-slate-800'} rounded-xl px-4 pr-12 text-slate-900 dark:text-white`}
                placeholder="••••••••"
                placeholderTextColor="#94a3b8"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={(text) => {
                  setPassword(text);
                  setError('');
                }}
                editable={!loading}
              />
              <TouchableOpacity
                className="absolute right-4 top-4"
                onPress={() => setShowPassword(!showPassword)}
              >
                <MaterialCommunityIcons
                  name={showPassword ? "eye-off-outline" : "eye-outline"}
                  size={20}
                  color="#94a3b8"
                />
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
            className={`w-full h-14 ${loading ? 'bg-primary/70' : 'bg-primary'} rounded-xl shadow-lg shadow-primary/25 flex flex-row items-center justify-center mt-6`}
            onPress={handleSignIn}
            disabled={loading}
            activeOpacity={0.8}
          >
            {loading ? (
              <ActivityIndicator color="white" size="small" />
            ) : (
              <>
                <Text className="text-white font-semibold text-lg mr-2">Sign In</Text>
                <MaterialCommunityIcons name="arrow-right" size={20} color="white" />
              </>
            )}
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
          <TouchableOpacity
            className="flex-1 flex flex-row items-center justify-center h-14 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl mr-2"
            disabled={loading}
          >
            <MaterialCommunityIcons name="google" size={20} color="#4285F4" />
            <Text className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-2">Google</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-1 flex flex-row items-center justify-center h-14 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl ml-2"
            disabled={loading}
          >
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