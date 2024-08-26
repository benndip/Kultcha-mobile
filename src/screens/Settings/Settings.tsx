import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import Layout from '../../layouts/Layout';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../constants/sizes';
import { ChevronRightIcon, MapMarker } from '../../assets/icons';
import { colors } from '../../constants/colors';
import { settings } from '../../constants/settings';

const Settings = () => {
  return (
    <Layout showPurse={false}>
      <View className='items-center'>
        <View
          className='bg-greyVar2 rounded-full justify-center items-center overflow-hidden'
          style={{
            width: DEVICE_WIDTH * 0.32,
            height: DEVICE_WIDTH * 0.32,
            borderRadius: DEVICE_WIDTH * 0.32,
          }}
        >
          <Image
            source={require('../../assets/images/cult1.png')}
            className='w-full h-full'
          />
        </View>
        <Text className='text-3xl font-bold mt-3 mb-1'>Bulawa Joy</Text>
        <View className=' flex-row items-center gap-2'>
          <MapMarker />
          <Text className='mb-1 font-semibold'>Buea, Cameroon</Text>
        </View>
      </View>
      <ScrollView
        className='bottom-10 w-full rounded-xl p-5'
        style={{
          height: DEVICE_HEIGHT * 0.48,
          marginTop: DEVICE_HEIGHT * 0.09,
          backgroundColor: 'rba(0,0,0,0.4)',
        }}
        contentContainerStyle={{
          paddingBottom: DEVICE_HEIGHT * 0.03,
        }}
        showsVerticalScrollIndicator={false}
      >
        {settings.map((item) => (
          <TouchableOpacity
            className='justify-between items-center flex-row mb-2 py-3'
            key={item.id}
          >
            <View className=' flex-row items-center gap-3'>
              <View className='bg-darkBrown rounded-full w-10 h-10 justify-center items-center'>
                {item.leftIcon}
              </View>
              <Text className='text-darkBrown font-semibold'>{item.title}</Text>
            </View>
            <View className=' justify-center items-center'>
              {item?.rightIcon ?? <ChevronRightIcon color={colors.darkBrown} />}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </Layout>
  );
};

export default Settings;
