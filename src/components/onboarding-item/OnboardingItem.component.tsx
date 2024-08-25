import { ChevronRightIcon } from '@/assets/icons';
import React from 'react';
import { Image, Text, useWindowDimensions, View } from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../constants/sizes';
import CustomButton from '../custom-button/CustomButton.component';
import styles from './styles';

type Props = {
  index: number;
  x: SharedValue<number>;
  item: any;
  isLast?: boolean | any;
  onNext?: () => void;
};

const OnboardingItem = ({ index, x, item, isLast, onNext }: Props) => {
  const { width: SCREEN_WIDTH } = useWindowDimensions();

  const circleAnimation = useAnimatedStyle(() => {
    const scale = interpolate(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [1, 4, 4],
      Extrapolation.CLAMP
    );

    return {
      transform: [{ scale: scale }],
    };
  });
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: SCREEN_WIDTH,
        // backgroundColor:'red',
        borderRadius: DEVICE_WIDTH * 0.8,
        paddingHorizontal: DEVICE_WIDTH * 0.05,
      }}
    >
      <View style={styles.circleContainer}>
        <Animated.View
          style={[
            {
              width: SCREEN_WIDTH,
              height: SCREEN_WIDTH,
              borderRadius: SCREEN_WIDTH / 2,
              // backgroundColor: '#fff',
            },
            circleAnimation,
          ]}
        />
      </View>
      <View
        style={[
          styles.imageContainer,
          {
            bottom: 3,
            alignSelf: 'center',
          },
        ]}
      >
        <Image source={item.image} style={[styles.image]} />
      </View>
      <Text style={[styles.title]}>{item.title}</Text>
      <Text style={[styles.caption]}>{item.caption}</Text>
      <CustomButton
        title={isLast ? 'Finish' : 'Next'}
        onPress={onNext}
        rightIcon={() => <ChevronRightIcon />}
        style={{
          marginTop: DEVICE_HEIGHT * 0.1,
          width: '80%',
        }}
      />
    </View>
  );
};

export default OnboardingItem;
