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
import { SearchIcon } from '../../assets/icons';
import { CustomInput, TopNavActions } from '../../components';
import { categories } from '../../constants/categories';
import { cultureItems, cultures } from '../../constants/cultureItems';
import { defaultSpacing, DEVICE_HEIGHT } from '../../constants/sizes';
import { paths } from '../../navigation/paths';
import { setFavorites, setItem } from '../../redux/features/item/itemSlice';
import { useAppDispatch } from '../../redux/store';
import styles from './CategoryItems.style';

const CategoryItems = ({ navigation, route }: any) => {
  const [active, setActive] = useState(cultureItems[0].title);
  const categoryItem = categories.filter(
    (item) => item.title === route?.params?.title
  )?.[0];
  const activeText = 'font-bold text-redVar1';
  const dispatch = useAppDispatch();
  const handleItem = (item: ItemType) => {
    dispatch(setItem(item));
    navigation.navigate(paths.DETAILS);
  };
  const handleAddFavorite = () => {
    dispatch(
      setFavorites(
        categories.filter((item) => item.title === active)?.[0]?.items[0]
      )
    );
  };
  return (
    <ScrollView style={{ flex: 1 }}>
      {/* <StatusBar style='light' /> */}
      <ImageBackground
        source={categoryItem.mainBg}
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
              {categoryItem?.title}
            </Text>
          </View>
        </LinearGradient>
      </ImageBackground>
      <View style={{ ...defaultSpacing }}>
        <CustomInput
          placeholder='Search'
          leftIcon={() => <SearchIcon color='#a4a4a4' />}
        />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingVertical: 10,
            alignItems: 'center',
          }}
        >
          {cultures.map((item) => (
            <TouchableOpacity
              key={item}
              className='p-3 mx-2 flex-col'
              onPress={() => setActive(item)}
            >
              <Text
                className={twMerge(
                  'text-center',
                  item === active && activeText
                )}
              >
                {item}
              </Text>
              {item === active && (
                <View className='h-1 bg-redVar1 rounded-lg mt-1' />
              )}
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View>
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            {categoryItem.items.map((item) => (
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
    </ScrollView>
  );
};

export default CategoryItems;
