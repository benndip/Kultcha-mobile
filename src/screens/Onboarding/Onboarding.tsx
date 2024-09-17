import { onboarding } from '../../constants/onboarding';
import React, { useState } from 'react';
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  View,
  ViewToken,
} from 'react-native';
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import { CustomButton, OnboardingItem } from '../../components';
import { paths } from '../../navigation/paths';
import { setIsOnboarded } from '../../redux/features/auth/authSlice';
import { useAppDispatch } from '../../redux/store';
import styles from './styles';
import Pagination from './Pagination';
import { ChevronRightIcon } from '../../assets/icons';
import { DEVICE_HEIGHT } from '../../constants/sizes';

const Onboarding = ({ navigation }: any) => {
  const dispatch = useAppDispatch();

  const flatListRef = useAnimatedRef<FlatList<any>>();
  const x = useSharedValue(0);
  const flatListIndex = useSharedValue(0);
  const [index, setIndex] = useState(0);

  const onViewableItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: ViewToken[];
  }) => {
    if (viewableItems[0]?.index !== null) {
      flatListIndex.value = viewableItems[0]?.index;
      setIndex(viewableItems[0]?.index);

    }
  };

  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      x.value = event.contentOffset.x;
    },
  });

  const onComplete = () => {
    dispatch(setIsOnboarded(true));
    navigation.replace(paths.BOTTOMNAVIGATION);
  };

  const handleNext = () => {
    if (flatListIndex.value < onboarding.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: flatListIndex.value + 1,
      });
    } else {
      onComplete?.();
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/images/bg.jpg')}
      style={styles.imageBg}
    >
      <View style={[StyleSheet.absoluteFill, styles.overlay]} />
      <View style={styles.container}>
        <Animated.FlatList
          ref={flatListRef}
          onScroll={onScroll}
          data={onboarding}
          renderItem={({ item, index }) => {
            return (
              <OnboardingItem
                item={item}
                index={index}
                x={x}
                isLast={index === onboarding.length - 1}
                onNext={handleNext}
              />
            );
          }}
          keyExtractor={(item) => item.id.toString()}
          scrollEventThrottle={16}
          horizontal={true}
          bounces={false}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={{
            minimumViewTime: 300,
            viewAreaCoveragePercentThreshold: 10,
          }}
        />
        <View style={{ zIndex: 1, flex: 1 }}>
          <CustomButton
            title={index === onboarding.length - 1 ? 'Finish' : 'Next'}
            onPress={handleNext}
            rightIcon={() => <ChevronRightIcon />}
            style={{
              marginTop: DEVICE_HEIGHT * 0.06,
              marginBottom: 10,
              width: '80%',
            }}
          />
          <Pagination data={onboarding} x={x} />
        </View>
      </View>
      <View style={[styles.overlay, styles.overlya2]} />
    </ImageBackground>
  );
};
export default Onboarding;
