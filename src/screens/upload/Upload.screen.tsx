import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useRef } from 'react';
import Layout from '../../layouts/Layout';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../constants/sizes';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../constants/colors';
import { ChevronDownIcon, UploadIcon } from '../../assets/icons';
import { CustomBottomSheet } from '../../components';
import { BottomSheetMethods } from '@devvie/bottom-sheet';
import { cultures } from '../../constants/cultureItems';

const Upload = () => {
  const sheetRef = useRef<BottomSheetMethods>();
  return (
    <>
      <Layout>
        <LinearGradient
          colors={['rgba(209, 213, 219, 0.9)', 'rgba(182, 182, 182, 0.5)']}
          className='rounded-2xl p-2'
          useAngle
          angle={45}
          style={{
            height: DEVICE_HEIGHT * 0.3,
            marginTop: 12,
            borderStyle: 'dashed',
            borderWidth: 1,
          }}
        >
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              elevation: 4,
              width: '100%',
              height: '100%',
            }}
            className='items-center justify-center'
          >
            <Text className='text-darkBrown font-bold'>Select File</Text>
            <UploadIcon size={DEVICE_WIDTH * 0.15} color={colors.darkBrown} />
          </TouchableOpacity>
        </LinearGradient>
        <View className='mt-6'>
          <TouchableOpacity
            activeOpacity={0.5}
            className='p-4 bg-gray-300 rounded-lg flex-row justify-between items-center mb-5'
            onPress={() => sheetRef.current?.open()}
          >
            <Text className='text-darkBrown font-bold'>Select Category</Text>
            <ChevronDownIcon />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            className='p-4 bg-gray-300 rounded-lg flex-row justify-between items-center mb-5'
            onPress={() => sheetRef.current?.open()}
          >
            <Text className='text-darkBrown font-bold'>Select Culture</Text>
            <ChevronDownIcon />
          </TouchableOpacity>
        </View>
      </Layout>
      <CustomBottomSheet height='30%' ref={sheetRef}>
        <ScrollView
          contentContainerStyle={{
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems:'center',
            gap: 12,
          }}
          style={{height: DEVICE_HEIGHT*0.18}}
        >
          {cultures.map((item) => (
            <TouchableOpacity className='p-3 border rounded-lg'>
              <Text>{item}</Text>
            </TouchableOpacity>
          ))}
          {cultures.map((item) => (
            <TouchableOpacity className='p-3 border rounded-lg'>
              <Text>{item}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </CustomBottomSheet>
    </>
  );
};

export default Upload;
