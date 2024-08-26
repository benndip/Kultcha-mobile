import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { twMerge } from 'tailwind-merge';
import { ItemType } from '../../@types';
import { ChevronRightIcon } from '../../assets/icons';
import { MasonryLayout } from '../../components';
import { allItems, categories } from '../../constants/categories';
import { colors } from '../../constants/colors';
import Layout from '../../layouts/Layout';
import { paths } from '../../navigation/paths';
import { setCategoryItem, setItem } from '../../redux/features/item/itemSlice';
import { useAppDispatch } from '../../redux/store';
import { DEVICE_HEIGHT } from './../../constants/sizes';

const Home = ({ navigation }: any) => {
  const [active, setActive] = useState('all');
  const activeText = 'font-bold text-redVar1';
  const dispatch = useAppDispatch();
  const handleItem = (item: ItemType) => {
    dispatch(setItem(item));
    navigation.navigate(paths.DETAILS);
  };

  const handleTabPress = (title: string) => {
    setActive(title);
    // const categoryItem = categories.filter((item) => item.title === title)?.[0];
    // dispatch(setCategoryItem(categoryItem));
    navigation.navigate(paths.CATEGORYITEMS, {
      title: title,
    });
  };

  return (
    <Layout showSearch hideBack>
      {/* <StatusBar style='light' /> */}
      <Text className='text-center font-bold text-lg'>All</Text>
      <View className='flex-row items-center justify-around my-2'>
        <View className='flex-row items-center px-3'>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingVertical: 10,
              alignItems: 'center',
            }}
          >
            <TouchableOpacity
              className='mr-1 p-3 flex-row items-center'
              onPress={() => setActive('all')}
            >
              <Text
                className={twMerge(
                  'text-center',
                  'all' === active && activeText
                )}
              >
                All
              </Text>
              {'all' === active && (
                <View className='h-2 bg-redVar1 rounded-lg mt-1' />
              )}
            </TouchableOpacity>
            {categories.map((item) => (
              <TouchableOpacity
                key={item.title}
                className='p-3 mx-2 flex-col'
                onPress={() => handleTabPress(item.title)}
              >
                <Text
                  className={twMerge(
                    'text-center',
                    item.title === active && activeText
                  )}
                >
                  {item.title}
                </Text>
                {item.title === active && (
                  <View className='h-1 bg-redVar1 rounded-lg mt-1' />
                )}
              </TouchableOpacity>
            ))}
          </ScrollView>
          <ChevronRightIcon color={colors.darkBrown} />
        </View>
      </View>
      <MasonryLayout
        data={
          active === 'all'
            ? allItems
            : categories.filter((item) => item.title === active)?.[0].items ??
              []
        }
        onPress={(item: ItemType) => handleItem(item)}
        style={{
          paddingBottom: DEVICE_HEIGHT * 0.24,
          paddingTop: DEVICE_HEIGHT * 0.03,
        }}
        // showTitle={false}
      />
    </Layout>
  );
};

export default Home;
