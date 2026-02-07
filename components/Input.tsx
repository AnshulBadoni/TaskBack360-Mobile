import React from 'react';
import { View, Text, TextInput, TouchableOpacity, TextInputProps } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: keyof typeof MaterialCommunityIcons.glyphMap;
  onRightIconPress?: () => void;
  containerClassName?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  leftIcon,
  rightIcon,
  onRightIconPress,
  containerClassName = "",
  ...props
}) => {
  return (
    <View className={`mb-4 ${containerClassName}`}>
      {label && <Text className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1 mb-2">{label}</Text>}
      <View className="relative flex-row items-center h-14 w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/50 px-4 transition-all">
        {leftIcon && <View className="mr-2">{leftIcon}</View>}
        <TextInput
          className="flex-1 h-full text-base text-slate-900 dark:text-white"
          placeholderTextColor="#94a3b8"
          {...props}
        />
        {rightIcon && (
          <TouchableOpacity
            onPress={onRightIconPress}
            activeOpacity={0.7}
            className="ml-2"
          >
            <MaterialCommunityIcons name={rightIcon} size={22} color="#94a3b8" />
          </TouchableOpacity>
        )}
      </View>
      {error && <Text className="text-xs text-red-500 ml-1 mt-1">{error}</Text>}
    </View>
  );
};
