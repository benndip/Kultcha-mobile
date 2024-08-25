import { PlayIcon } from '@/assets/icons';
import { VideoView } from '@/components';
import { DEVICE_HEIGHT } from '@/constants/sizes';
import Layout from '@/layouts/Layout';
import React, { useRef, useState } from 'react';
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './VideoDetails.style';
import { VideoRef } from 'react-native-video';

const VideoDetails = () => {
  const videoRef = useRef<VideoRef>(null);
  const [paused, setPaused] = useState(false);

  const handlePlay = () => {
    if (paused) {
      setPaused(false);
      videoRef.current?.resume();
      return;
    }
    setPaused(true);
    videoRef.current?.pause();
  };

  return (
    <Layout>
      <ScrollView>
        <View
          style={{
            width: '100%',
            height: DEVICE_HEIGHT * 0.28,
          }}
        >
          <VideoView paused={paused} ref={videoRef} />
        </View>
        <LinearGradient
          colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.8)']}
          style={styles.gradientView}
          locations={[0.7, 1]}
        >
          <View className='flex-row items-center gap-10'>
            <Image
              source={require('../../assets/images/seek_left.png')}
              style={styles.seekIcon}
            />
            <TouchableOpacity
              onPress={handlePlay}
              className='justify-center items-center bg-[rgba(0,0,0,1)] p-2 rounded-full'
            >
              <PlayIcon />
            </TouchableOpacity>
            <Image
              source={require('../../assets/images/seek_right.png')}
              style={styles.seekIcon}
            />
          </View>
        </LinearGradient>
      </ScrollView>
    </Layout>
  );
};

export default VideoDetails;
