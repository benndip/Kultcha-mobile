import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { defaultSpacing, DEVICE_HEIGHT } from '../../constants/sizes';
import { CustomInput } from '../../components';
import { ChevronRightIcon, SearchIcon } from '../../assets/icons';
import { categories } from '../../constants/categories';
import { useAppDispatch } from '../../redux/store';
import { ItemType } from '../../@types';
import { setItem } from '../../redux/features/item/itemSlice';
import { paths } from '../../navigation/paths';
import { twMerge } from 'tailwind-merge';
import { ScrollView } from 'react-native';
import styles from './AllItems.style';
import Layout from '../../layouts/Layout';

const AllItems = ({ navigation }: any) => {
  const [active, setActive] = useState(categories[0].title);
  const activeText = 'font-bold text-redVar1';
  const dispatch = useAppDispatch();
  const handleItem = (item: ItemType) => {
    dispatch(setItem(item));
    navigation.navigate(paths.DETAILS);
  };
  return (
    <Layout showHeart={false} showSearch showPurse>
      <CustomInput
        placeholder='Search'
        leftIcon={() => <SearchIcon color='#a4a4a4' />}
      />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingVertical: 10,
        }}
      >
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
      <ScrollView
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
      </ScrollView>
    </Layout>
  );
};

export default AllItems;
