import React, { useState } from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { twMerge } from 'tailwind-merge';
import { ItemType } from '../../@types';
import { ChevronRightIcon, SearchIcon } from '../../assets/icons';
import { CustomInput, TopNavActions } from '../../components';
import { categories } from '../../constants/categories';
import { paths } from '../../navigation/paths';
import { setFavorites, setItem } from '../../redux/features/item/itemSlice';
import { useAppDispatch } from '../../redux/store';
import { defaultSpacing, DEVICE_HEIGHT } from '../../constants/sizes';
import styles from './CategoryItems.style';

const CategoryItems = ({ navigation }: any) => {
  const [active, setActive] = useState(categories[0].title);
  const activeText = 'font-bold text-redVar1';
  const dispatch = useAppDispatch();
  const handleItem = (item: ItemType) => {
    dispatch(setItem(item));
    navigation.navigate(paths.DETAILS);
  };
  const handleAddFavorite = () => {
    dispatch(
      setFavorites(
        categories.filter((item) => item.title === active)?.[0].items[0]
      )
    );
  };
  return (
    <View style={{ flex: 1 }}>
      {/* <StatusBar style='light' /> */}
      <ImageBackground
        source={categories.filter((item) => item.title === active)?.[0].mainBg}
        style={styles.gradientImage}
        borderBottomRightRadius={50}
        borderBottomLeftRadius={50}
      >
        <LinearGradient
          colors={['rgba(217, 217, 217, 0.3)', 'rgba(3, 3, 3, 0.9)']}
          style={styles.gradientView}
          locations={[0.4, 1]}
        >
          <TopNavActions
            showPurse={false}
            showHeart
            onHeart={handleAddFavorite}
          />
          <View className='flex-1 justify-end items-center'>
            <Text className='font-bold text-center text-white text-lg'>
              {categories.filter((item) => item.title === active)?.[0].title}
            </Text>
          </View>
        </LinearGradient>
      </ImageBackground>
      <View className='flex-1' style={{ ...defaultSpacing }}>
        <CustomInput
          placeholder='Search'
          leftIcon={() => <SearchIcon color='#a4a4a4' />}
        />
        <View className='flex-row items-center justify-around my-2'>
          {categories.slice(0, 4).map((item) => (
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
          <TouchableOpacity
            className='ml-3w-10 p-3 flex-row items-center'
            onPress={() => navigation.navigate(paths.ALLITEMS)}
          >
            <Text>All</Text>
            <ChevronRightIcon color={'#000'} size={20} />
          </TouchableOpacity>
        </View>
        <View className='flex-1'>
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
        </View>
      </View>
    </View>
  );
};

export default CategoryItems;
