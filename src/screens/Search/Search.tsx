import React, { useEffect, useState } from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { CloseFilledIcon, SearchIcon } from '../../assets/icons';
import { CustomInput } from '../../components';
import { categories } from '../../constants/categories';
import Layout from '../../layouts/Layout';
import { DEVICE_HEIGHT } from '../../constants/sizes';
import styles from './Search.style';
import { setItem } from '../../redux/features/item/itemSlice';
import { useAppDispatch } from '../../redux/store';
import { ItemType } from '../../@types';
import { paths } from '../../navigation/paths';

const Search = ({ navigation }: any) => {
  const myData = categories.map((item) => {
    return {
      title: item.title,
      mainBg: item.mainBg,
    };
  });
  const [results, setResults] = useState<any>([]);
  const [allData, setAllData] = useState(myData);
  const dispatch = useAppDispatch();

  const [query, setQuery] = useState('');

  const searchItems = () => {
    if (!query) return [];
    const allItems = categories.map((category) => category.items).flat();
    const filtered = allItems.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  };

  useEffect(() => {
    if (!query) {
      setAllData(myData);
      setResults([])
    }
    searchItems();
  }, [query]);

  const handleItem = (item: ItemType) => {
    dispatch(setItem(item));
    navigation.navigate(paths.DETAILS);
  };

  return (
    <Layout>
      <CustomInput
        placeholder='Search'
        leftIcon={() => <SearchIcon color='#a4a4a4' />}
        rightIcon={() => (
          <TouchableOpacity
            className='justify-center items-center'
            onPress={() => setQuery('')}
          >
            <CloseFilledIcon color='#a4a4a4' />
          </TouchableOpacity>
        )}
        onChangeText={(text) => setQuery(text)}
        autoFocus
        value={query}
      />
      <ScrollView
        contentContainerStyle={{
          gap: 20,
          paddingBottom: DEVICE_HEIGHT * 0.17,
          paddingTop: DEVICE_HEIGHT * 0.03,
        }}
        showsVerticalScrollIndicator={false}
      >
        {results?.length > 0
          ? results?.map((item: any) => (
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
            ))
          : allData?.map((item) => (
              <ImageBackground
                source={item.mainBg}
                className='w-full '
                style={{ height: DEVICE_HEIGHT * 0.17 }}
                key={item.title}
                borderRadius={14}
              >
                <View
                  className='items-center justify-center w-full h-full'
                  style={styles.overlay}
                >
                  <Text className='font-bold text-center text-white text-xl'>
                    {item.title}
                  </Text>
                </View>
              </ImageBackground>
            ))}
      </ScrollView>
    </Layout>
  );
};

export default Search;
