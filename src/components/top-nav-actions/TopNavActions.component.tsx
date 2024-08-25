import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TopNavActionsProps } from '../../@types';
import { ChevronLeftIcon, MoreVerticalIcon } from '../../assets/icons';

const TopNavActions = ({ rightIcon, leftIcon, onBack }: TopNavActionsProps) => {
  const navigation = useNavigation();
  return (
    <View className='flex-row justify-between'>
      <TouchableOpacity
        className='bg-darkBrown rounded-full w-10 h-10 justify-center items-center'
        onPress={() => onBack?.() ?? navigation.goBack()}
      >
        {leftIcon?.() ?? <ChevronLeftIcon />}
      </TouchableOpacity>
      <TouchableOpacity className='bg-darkBrown rounded-full w-10 h-10 justify-center items-center'>
        {rightIcon?.() ?? <MoreVerticalIcon />}
      </TouchableOpacity>
    </View>
  );
};

export default TopNavActions;
