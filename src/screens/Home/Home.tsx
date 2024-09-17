import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { twMerge } from 'tailwind-merge';
import { ChevronRightIcon } from '../../assets/icons';
import { Item } from '../../components';
import { categories, ceramics, digitalArts, drawings} from '../../constants/data';
import { colors } from '../../constants/colors';
import { paths } from '../../navigation/paths';
import { DEVICE_WIDTH } from './../../constants/sizes';
import { MasonryFlashList } from "@shopify/flash-list";

const Home = ({ navigation }: any) => {
  const [categoryId, setCategoryId] = useState(0);
  const activeText = 'font-bold text-redVar1';

  const goToDetail = (item: any) => {
    navigation.push(paths.DETAILS, { item })
  }

  const goToProfile = (item:any) => {
    navigation.navigate(paths.PROFILE, { item })
  }

  const selectCategory = (id:number)=>{
    setCategoryId(id)
  }

  const allItems = [...drawings, ...digitalArts, ...ceramics ]

  return (
    <View style={{ width: DEVICE_WIDTH, flex: 1, paddingTop: 40 }}>
      <View className='flex-row items-center justify-around my-1'>
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
              onPress={() => setCategoryId(0)}
            >
              <Text
                className={twMerge(
                  'text-center',
                   categoryId == 0 && activeText
                )}
              >
                All
              </Text>
              {categoryId == 0 && (
                <View className='h-1 bg-redVar1 rounded-lg mt-1' />
              )}
            </TouchableOpacity>
            {categories.map((item) => (
              <TouchableOpacity
                key={item.id}
                className='p-3 mx-2 flex-col'
                onPress={() => selectCategory(item.id)}
              >
                <Text
                  className={twMerge(
                    'text-center',
                    categoryId == item.id && activeText
                  )}
                >
                  {item.title}
                </Text>
                {categoryId == item.id && (
                  <View className='h-1 bg-redVar1 rounded-lg mt-1' />
                )}
              </TouchableOpacity>
            ))}
          </ScrollView>
          <ChevronRightIcon color={colors.darkBrown} />
        </View>
      </View>
      <MasonryFlashList
        data={categoryId == 0 ? allItems.sort(() => .5 - Math.random()) : allItems.filter(i=>i.categoryId == categoryId).sort(() => .5 - Math.random())}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => <Item item={item} onPress={()=>goToDetail(item)} onAvatarPress={()=>goToProfile(item)} />}
        estimatedItemSize={600}
        onEndReachedThreshold={0.1}
        style={{ alignSelf: 'center', width: DEVICE_WIDTH }}
      />
    </View>
  );
};

export default Home;
