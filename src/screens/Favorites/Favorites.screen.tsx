
import React from 'react';
import { Text, View } from 'react-native';
import { useAppDispatch } from '../../redux/store';
import { ItemType } from '../../@types';
import { setItem } from '../../redux/features/item/itemSlice';
import { paths } from '../../navigation/paths';
import Layout from '../../layouts/Layout';
import { CustomInput, MasonryLayout } from '../../components';
import { SearchIcon } from '../../assets/icons';
import { dummyItems } from '../../constants/dummyItems';

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
