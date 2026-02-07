import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  rightElement?: React.ReactNode;
  subtitle?: string;
  onBackPress?: () => void;
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  showBack = true,
  rightElement,
  subtitle,
  onBackPress,
  className = ""
}) => {
  const router = useRouter();

  return (
    <View className={`flex-row items-center justify-between px-4 pt-4 pb-2 bg-white dark:bg-background-dark ${className}`}>
      <View className="flex-row items-center flex-1">
        {showBack && (
          <TouchableOpacity
            onPress={onBackPress || (() => router.back())}
            className="p-2 mr-2 rounded-full"
          >
            <MaterialCommunityIcons name="arrow-left" size={24} color="#0d141b" />
          </TouchableOpacity>
        )}
        <View>
          {title && <Text className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">{title}</Text>}
          {subtitle && <Text className="text-xs text-slate-500 dark:text-slate-400">{subtitle}</Text>}
        </View>
      </View>
      {rightElement && <View>{rightElement}</View>}
    </View>
  );
};
