import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, View } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  className?: string;
  textClassName?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  className = "",
  textClassName = "",
  variant = 'primary',
  disabled = false,
  loading = false,
  icon
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary': return 'bg-primary shadow-lg shadow-primary/20';
      case 'secondary': return 'bg-slate-100 dark:bg-slate-800';
      case 'outline': return 'bg-transparent border border-slate-200 dark:border-slate-700';
      case 'ghost': return 'bg-transparent';
      case 'danger': return 'bg-red-500 shadow-lg shadow-red-500/20';
      default: return 'bg-primary';
    }
  };

  const getTextColorClasses = () => {
    switch (variant) {
      case 'primary': return 'text-white';
      case 'secondary': return 'text-slate-900 dark:text-white';
      case 'outline': return 'text-slate-900 dark:text-white';
      case 'ghost': return 'text-primary';
      case 'danger': return 'text-white';
      default: return 'text-white';
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
      className={`h-14 rounded-xl flex-row items-center justify-center transition-all ${getVariantClasses()} ${className} ${(disabled || loading) ? 'opacity-50' : ''}`}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'primary' ? 'white' : '#137fec'} />
      ) : (
        <View className="flex-row items-center justify-center">
          {icon && <View className="mr-2">{icon}</View>}
          <Text className={`text-base font-bold ${getTextColorClasses()} ${textClassName}`}>
            {title}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};
