import { onboarding } from '@/constants/onboarding';
import React from 'react';
import { FlatList, ImageBackground, View, ViewToken } from 'react-native';
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import { OnboardingItem } from '../../components';
import { paths } from '../../navigation/paths';
import { setIsOnboarded } from '../../redux/features/auth/authSlice';
import { useAppDispatch } from '../../redux/store';
import styles from './styles';
import Pagination from './Pagination';

const Onboarding = ({ navigation }: any) => {
  const dispatch = useAppDispatch();

  const flatListRef = useAnimatedRef<FlatList<any>>();
  const x = useSharedValue(0);
  const flatListIndex = useSharedValue(0);

  const onViewableItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: ViewToken[];
  }) => {
    if (viewableItems[0]?.index !== null) {
      flatListIndex.value = viewableItems[0]?.index;
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
      source={require('../../assets/images/bg.png')}
      style={styles.imageBg}
    >
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
        <Pagination data={onboarding} x={x} />
      </View>
    </ImageBackground>
  );
};
export default Onboarding;
