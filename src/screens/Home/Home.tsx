import React, { useState } from 'react';
import { Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { twMerge } from 'tailwind-merge';
import { ItemType } from '../../@types';
import { ChevronRightIcon } from '../../assets/icons';
import { MasonryLayout } from '../../components';
import { allItems, categories } from '../../constants/categories';
import Layout from '../../layouts/Layout';
import { paths } from '../../navigation/paths';
import { setFavorites, setItem } from '../../redux/features/item/itemSlice';
import { useAppDispatch } from '../../redux/store';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from './../../constants/sizes';
import { colors } from '../../constants/colors';

const Home = ({ navigation }: any) => {
  const [active, setActive] = useState('all');
  const activeText = 'font-bold text-redVar1';
  const dispatch = useAppDispatch();
  const handleItem = (item: ItemType) => {
    dispatch(setItem(item));
    navigation.navigate(paths.DETAILS);
  };
  return (
    <Layout showSearch>
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
                onPress={() => setActive(item.title)}
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
          paddingBottom: DEVICE_HEIGHT * 0.2,
          paddingTop: DEVICE_HEIGHT * 0.03,
        }}
      />
      {/* <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {categories
          .filter((item) => item.title === active)?.[0]
          .items.map((item) => (
            <TouchableOpacity
              className='w-[31%] overflow-hidden rounded-md'
              style={{
                height: DEVICE_HEIGHT * 0.2,
              }}
              key={item.id}
              onPress={() => handleItem(item)}
            >
              <Image
                source={item.bgImage}
                key={item.id}
                className='w-full h-full'
              />
            </TouchableOpacity>
          ))}
      </ScrollView> */}
    </Layout>
  );
};

export default Home;
