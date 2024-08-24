import { View, Text, Image, ImageBackground } from 'react-native';
import React from 'react';
import Layout from '@/layouts/Layout';
import LinearGradient from 'react-native-linear-gradient';
import { images } from '@/assets/images';
import styles from './Home.style';
import { TopNavActions } from '@/components';
import { StatusBar } from 'expo-status-bar';

const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style='light' />
      <ImageBackground
        source={images.village}
        style={styles.gradientImage}
        borderBottomRightRadius={50}
        borderBottomLeftRadius={50}
      >
        <LinearGradient
          colors={['rgba(217, 217, 217, 0.5)', 'rgba(3, 3, 3, 0.9)']}
          style={styles.gradientView}
          locations={[0.5, 1]}
        >
          <TopNavActions />
        </LinearGradient>
      </ImageBackground>
      {/* <Layout>
        <Text>ajsckjsckjn</Text>
      </Layout> */}
    </View>
  );
};

export default Home;
