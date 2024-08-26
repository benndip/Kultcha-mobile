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
        {showPurse && (
          <TouchableOpacity
            className='bg-darkBrown rounded-full w-10 h-10 justify-center items-center'
            onPress={() => navigation.navigate(paths.DEPOSIT)}
          >
            <Image
              source={require('../../assets/images/purse.png')}
              resizeMode='contain'
              className='w-6 h-6'
            />
          </TouchableOpacity>
        )}
        {showSearch && (
          <TouchableOpacity
            className='bg-darkBrown rounded-full w-10 h-10 justify-center items-center'
            onPress={() => navigation.navigate(paths.SEARCH)}
          >
            <SearchIcon color='#fff' size={26} style={{ bottom: 2 }} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default TopNavActions;
