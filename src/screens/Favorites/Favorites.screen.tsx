import { ItemType } from '@/@types';
import { SearchIcon } from '@/assets/icons';
import { CustomInput, MasonryLayout } from '@/components';
import { dummyItems } from '@/constants/dummyItems';
import { DEVICE_HEIGHT } from '@/constants/sizes';
import Layout from '@/layouts/Layout';
import { paths } from '@/navigation/paths';
import { setItem } from '@/redux/features/item/itemSlice';
import { RootState, useAppDispatch, useAppSelector } from '@/redux/store';
import React from 'react';
import { Text, View } from 'react-native';

const Favorites = ({ navigation }: any) => {
  const dispatch = useAppDispatch();
  const handleItem = (item: ItemType) => {
    dispatch(setItem(item));
    navigation.navigate(paths.DETAILS);
  };
  return (
    <Layout>
      <View>
        <Text className='font-bold text-center text-lg mb-3'>Favorites</Text>
        <CustomInput
          placeholder='Search'
          leftIcon={() => <SearchIcon color='#a4a4a4' />}
        />
        <MasonryLayout
          data={dummyItems}
          onPress={(item: ItemType) => handleItem(item)}
        />
      </View>
    </Layout>
  );
};

export default Favorites;
