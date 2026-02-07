import { SafeAreaView } from "react-native-safe-area-context";
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Button } from '../../components/Button';

export default function OnboardingAlignment() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark">
      <View className="flex-row justify-end px-6 pt-4">
        <TouchableOpacity onPress={() => router.replace('/(tabs)' as any)}>
          <Text className="text-sm font-medium text-primary">Skip</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-1 items-center justify-center px-6">
        <View className="w-full h-80 items-center justify-center mb-12">
           <View className="z-10 w-20 h-20 rounded-full border-4 border-white dark:border-background-dark bg-slate-200 overflow-hidden shadow-xl">
              <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqIVfdNmlAm_XhNSS4fuutuE6ugVaEhQzPiWxm0EdJBaFvz8iyFNffMo-gH8ubSbQnE-Tym-kRHbjPPQSkBbfwYu4S2CTiHy1oHorz4iW-e7YH8kgq_pZdp6IJYCdssD2UAh18yuj1TSkTr9Jp3n8ihqvjOQEhMXkNyRsKayEqhdCvTmBqEvARUr4C-sWP7vZ__t8OefW0XiMaOhhdOGXa022OG7QBdvT-LhSJrrway8d1UgVU3hcGMDljQiQ4x3hC4rMrRfZJ_Pm7' }} className="w-full h-full" />
           </View>
           <View className="absolute top-10 left-10 w-14 h-14 rounded-full border-4 border-white dark:border-background-dark bg-slate-200 overflow-hidden shadow-lg">
              <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCK9CCQhbG_7muQnG0icv4m2Nxn6eJMs8OF5N06rpcgPXK4w8Vz7nVkL7345GaLo1Prk1aXuE7gMfDuo82ba12PgpqRu9XdJEfs0Q3J5V1HFXLQsU3DoaYg4y_CtD2fepDvnJ6vrKCk3tYJwyt-9hF7dB1Ip6x6UM14xkSP8U9Csfo3E8xrXu3M0cnblyGOFfo6xs21hmRcYM8g0tpexSvg37nxKDa0dY8g_yphblVWrqAxIEUyvN842abket2Qt3QTy_RJ8_euUhpu' }} className="w-full h-full" />
           </View>
           <View className="absolute top-10 right-10 w-14 h-14 rounded-full border-4 border-white dark:border-background-dark bg-slate-200 overflow-hidden shadow-lg">
              <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6Zd-fI3LGAO7iAGlkLPXdYmFzJEIGVbphl_Uw0V6mRdX-6HJj5b3YY7MHLebcQGkFlg9jvYStadqKrD1ZxKRsCyWcTGid-NWarayVSuTlOcjNWwhUlS1JTqWPD48JG8P8aXL9Al_izOkDAb3qz3LB04jBeLgWtSJH4pO-QCTLAf_5OM5OenxhWVsuG-wZqQp1lyo6gzdIZguG_Fw0FN6h4TYj3M_HTjL6HaCZF2VWHrKKip9Qyak2UuTNlbU788rc9ZmuFXmyeQUZ' }} className="w-full h-full" />
           </View>
           <View className="absolute bottom-10 left-10 w-12 h-12 rounded-full border-4 border-white dark:border-background-dark bg-slate-200 overflow-hidden shadow-lg">
              <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfZ1PQwZ11e61stOgWf7uhYlZ0ZL1IwgF97biu0WtvD4Z6DFTohzHkqJEBR5JmYH4P5gI6LgjrLiA7zLCWvmCTksfvemtpEWWDCggnER-F1deaelnzj7SwLpRn_RIOpaMifyCCcnd-GyA86RzO253rFfkXDMEtKlfigud5Cc3pRGvs8z6mCHrLcPCXquJqI4yLvF8aN6tl88HXXYPPsENIprweO1xejRaAYoIhO4eilwjMl91FCfH9IKvWddC7uximrgfxYR3AIxnC' }} className="w-full h-full" />
           </View>
           <View className="absolute bottom-10 right-10 w-12 h-12 rounded-full border-4 border-white dark:border-background-dark bg-slate-200 overflow-hidden shadow-lg">
              <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgOnyvYHa2iiumD5NsLzNfc7-s3kamyvMfDApuukjmAlnYfbkXMrDysI7OQFCjxHOLsrwBHI9iDEABWKpqKBGBocypTPyvo-6lwoCnlnwCpJx8RyNog3vDdpFj3dAuoshc9S_RWuBRRozxr9xqF4QFIQp9SLJdkSMXxY2CkSPoHwz2MKdWJTnd3azBdQmqatDvERjucyvH0nX47AW4Sgfn1Avr3qpvgpownP0GBMY042eVXFglbouTrhH1VMFcOWry_GokwRHNePxq' }} className="w-full h-full" />
           </View>
        </View>

        <View className="items-center">
          <Text className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight leading-tight text-center">
            Stay aligned with your team
          </Text>
          <Text className="text-slate-600 dark:text-slate-400 text-lg font-normal leading-relaxed text-center mt-4 px-4">
            Experience the power of structured task management combined with seamless team communication.
          </Text>
        </View>
      </View>

      <View className="px-6 pb-12">
        <View className="flex-row items-center justify-center py-10">
          <View className="h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-700" />
          <View className="h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-700 ml-3" />
          <View className="h-2 w-6 rounded-full bg-primary ml-3" />
        </View>
        <Button
          title="Get Started"
          onPress={() => router.push('/onboarding/analytics' as any)}
        />
      </View>
    </SafeAreaView>
  );
}
