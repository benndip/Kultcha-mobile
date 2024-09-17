import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { TopNavActionsProps } from '../../@types';
import { ChevronLeftIcon, HeartIcon, SearchIcon } from '../../assets/icons';
import { paths } from '../../navigation/paths';
import { twMerge } from 'tailwind-merge';

const TopNavActions = ({
  showSearch,
  showHeart,
  showPurse = true,
  onBack,
  onHeart,
  hideBack
}: TopNavActionsProps) => {
  const navigation: any = useNavigation();

  return (
    <View className={twMerge('flex-row justify-between', hideBack && 'justify-end')}>
      {!hideBack && (
        <TouchableOpacity
          className='bg-darkBrown rounded-full w-10 h-10 justify-center items-center'
          onPress={() => onBack?.() ?? navigation.goBack()}
        >
          {<ChevronLeftIcon />}
        </TouchableOpacity>
      )}
      <View className='flex-row items-center gap-6'>
        {showHeart && (
          <TouchableOpacity
            className='bg-darkBrown rounded-full w-10 h-10 justify-center items-center'
            onPress={() => onHeart?.()}
          >
            <HeartIcon />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default TopNavActions;
