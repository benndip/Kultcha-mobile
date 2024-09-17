import React from 'react';
import { Text, View } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { ItemType } from '../../@types';
import { setItem } from '../../redux/features/item/itemSlice';
import { paths } from '../../navigation/paths';
import Layout from '../../layouts/Layout';
import { CustomInput, Fab, MasonryLayout } from '../../components';
import { SearchIcon } from '../../assets/icons';
import { dummyItems } from '../../constants/dummyItems';

const Favorites = ({ navigation }: any) => {
  const dispatch = useAppDispatch();
  const { favorites } = useAppSelector((state) => state.item);

  const handleItem = (item: ItemType) => {
    dispatch(setItem(item));
    navigation.navigate(paths.DETAILS);
  };
  return (
    <Layout>
      <View>
        <Text className='font-bold text-center text-lg mb-3'>Search</Text>
        <CustomInput
          placeholder='Search'
          leftIcon={() => <SearchIcon color='#a4a4a4' />}
        />
        {favorites?.length > 0 ? (
          <MasonryLayout
            data={favorites ?? []}
            onPress={(item: ItemType) => handleItem(item)}
          />
        ) : (
          <View className='h-[80%] justify-center items-center'>
            {/* <Text className='text-slate-700'>No Favorites</Text> */}
          </View>
        )}
      </View>
      {/* <Fab /> */}
    </Layout>
  );
};

export default Favorites;
