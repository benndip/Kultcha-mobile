// Load the module

import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../constants/sizes';
import React, { forwardRef } from 'react';
import { StyleSheet } from 'react-native';
import Video, { VideoRef } from 'react-native-video';

const VideoPlayer = forwardRef<VideoRef, { uri?: string, paused?: boolean }>((props, ref) => {
  const { uri } = props;
  const videoUrl = require('../../assets/videos/dance.mp4');

  return (
    <Video
      source={uri && typeof uri === 'string' ? { uri: uri } : videoUrl}
      ref={ref}
      onError={(err: any) => console.error(err)}
      style={styles.backgroundVideo}
      paused={props.paused}
    //   controls={true}
    />
  );
});

const styles = StyleSheet.create({
  backgroundVideo: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT * 0.28,
  },
});

export default VideoPlayer;
