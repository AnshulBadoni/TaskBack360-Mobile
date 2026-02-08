// components/Progress.tsx
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { getProjectTasks } from '../app/api/task';

interface ProgressProps {
    project: any;
    isFirst?: boolean;
}

const Progress: React.FC<ProgressProps> = ({ project, isFirst = false }) => {
    const [task, setTasks] = useState([]);

    useEffect(() => {
        getTasks()
    }, []);

    const getTasks = async () => {
        const response = await getProjectTasks(project.id);
        console.log(response.data);
        if (response.status == 200) {
            setTasks(response.data);
        }
    }

    const totalTasks = task.length;
    const completedTasks = task.filter((task: any) => task.status === 'DONE').length;

    // Calculate progress percentage
    const progress = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

    // Determine color based on progress
    const progressColor = progress >= 90 ? '#22C55E' : progress >= 50 ? '#EAB308' : '#EF4444'; // green : yellow : red

    // Circle dimensions
    const size = 44;
    const strokeWidth = 4;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    // Show minimum 3% progress so color is always visible
    const displayProgress = Math.max(progress, 3);
    const strokeDashoffset = circumference - (displayProgress / 100) * circumference;

    return (
        <View className="items-center justify-center w-11 h-11">
            <Svg width={size} height={size}>
                {/* Background Circle */}
                <Circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke={isFirst ? '#374151' : '#E5E7EB'}
                    strokeWidth={strokeWidth}
                    fill="transparent"
                />
                {/* Progress Circle */}
                <Circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke={progressColor}
                    strokeWidth={strokeWidth}
                    fill="transparent"
                    strokeDasharray={`${circumference}`}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    transform={`rotate(-90 ${size / 2} ${size / 2})`}
                />
            </Svg>
            <View className="absolute">
                <Text className={`text-xs font-bold ${isFirst ? 'text-white' : 'text-slate-900'}`}>
                    {progress}%
                </Text>
            </View>
        </View>
    );
};

export default Progress;