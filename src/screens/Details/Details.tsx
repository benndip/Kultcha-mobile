import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { MoreVerticalIcon } from '../../assets/icons';
import Layout from '../../layouts/Layout';
import { RootState, useAppSelector } from '../../redux/store';
import styles from './Details.styles';

const Details = () => {
  const { item } = useAppSelector((state: RootState) => state.item);
  return (
    <Layout>
      <Text className='font-bold text-center text-lg mb-3'>Bangwa man</Text>
      <ImageBackground
        source={require('../../assets/images/cult1.png')}
        borderRadius={16}
        style={styles.gradientImage}
      >
        <LinearGradient
          colors={['rgba(46, 46, 46, 0.1)', 'rgba(3, 3, 3, 0.8)']}
          style={styles.gradientView}
          locations={[0.4, 1]}
        >
          <TouchableOpacity className='self-end bg-[rgba(0,0,0,1)] p-2 rounded-full'>
            <MoreVerticalIcon color={'#fff'} />
          </TouchableOpacity>
          <View className='flex-row justify-between'>
            <TouchableOpacity
              className='rounded-full bg-golden p-3 justify-center items-center'
              activeOpacity={0.8}
            >
              <Image
                source={require('../../assets/images/vr.png')}
                className='w-5 h-5'
              />
            </TouchableOpacity>
            <TouchableOpacity
              className='rounded-full bg-golden p-3 justify-center items-center'
              activeOpacity={0.8}
            >
              <Image
                source={require('../../assets/images/sound.png')}
                className='w-5 h-5'
              />
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ImageBackground>
      <Text className='font-bold text-lg mt-3 mb-2'>
        Explore the world of a Bangwa man
      </Text>
      <Text className='mb-3'>
        If you have the ambitions and dreams of becoming or Marrying a Bangwa
        person, here’s some extra knowledge about the Bangwa poeple. More . . .
      </Text>
    </Layout>
  );
};

export default Details;
