import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import Layout from '../../layouts/Layout';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../constants/sizes';
import { ChevronRightIcon, MapMarker } from '../../assets/icons';
import { colors } from '../../constants/colors';
import { settings } from '../../constants/settings';
import { paths } from '../../navigation/paths';
import { ceramics, digitalArts, drawings } from '../../constants/data';

const Settings = ({ navigation }) => {
  
  const goToDepositeScreen = () => {
    navigation.navigate(paths.DEPOSIT)
  }

  const allItems = [...drawings, ...digitalArts, ...ceramics ]

  const user = allItems[Math.floor(Math.random()*allItems.length - 1)].user

  const goToProfile = () => {
    navigation.navigate(paths.PROFILE, { item: {user, from: 'FROM_SETTINGS'} })
  }

  return (
    <Layout showPurse={false}>
      <TouchableOpacity style={{ position: 'absolute', right: -5, top: -40 }}  onPress={goToDepositeScreen}>
        <Image source={require('../../assets/images/dolarIcon.png')} />
      </TouchableOpacity>
      <View className='items-center'>
        <TouchableOpacity
          className='bg-greyVar2 rounded-full justify-center items-center overflow-hidden'
          style={{
            width: DEVICE_WIDTH * 0.32,
            height: DEVICE_WIDTH * 0.32,
            borderRadius: DEVICE_WIDTH * 0.32,
          }}
          onPress={goToProfile}
        >
          <Image
            source={{uri: user?.avatar}}
            className='w-full h-full'
          />
        </TouchableOpacity>
        <Text className='text-3xl font-bold mt-3 mb-1'>{user?.name}</Text>
        <View className=' flex-row items-center gap-2'>
          <MapMarker />
          <Text className='mb-1 font-semibold'>Buea, Cameroon</Text>
        </View>
      </View>
      <ScrollView
        className='bottom-10 w-full rounded-xl p-5'
        style={{
          marginTop: DEVICE_HEIGHT * 0.09,
          backgroundColor: '#EEEEEE',
          width: DEVICE_WIDTH,
          alignSelf: 'center',
          borderTopLeftRadius: 41,
          borderTopRightRadius: 10,
          height: DEVICE_HEIGHT * 0.6,
          
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
