import React from 'react';
import { View, TouchableOpacity, ViewProps, StyleSheet } from 'react-native';

interface CardProps extends ViewProps {
  onPress?: () => void;
  className?: string;
  children: React.ReactNode;
}

const BASE_CARD_CLASS = "bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700/50";

export const Card: React.FC<CardProps> = ({ onPress, className = "", children, ...props }) => {
  const cardClassName = `${BASE_CARD_CLASS} ${className}`;

  if (onPress) {
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        className={cardClassName}
        {...props}
      >
        {children}
      </TouchableOpacity>
    );
  }

  return (
    <View className={cardClassName} {...props}>
      {children}
    </View>
  );
};