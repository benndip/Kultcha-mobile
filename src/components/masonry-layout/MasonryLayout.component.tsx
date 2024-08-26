import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { DEVICE_HEIGHT } from '../../constants/sizes';

const NUM_COLUMNS = 2;

const heights = [200, 150, 300, 250, 180, 220, 170, 200, 160, 240, 280, 190];

const splitIntoColumns = (data: any, numColumns: any) => {
  const columns: any = Array.from({ length: numColumns }, () => []);
  data?.forEach((item: any, index: number) => {
    columns[index % numColumns].push(item);
  });
  return columns;
};

const MasonryLayout = ({ data, onPress, style, showTitle = true }: any) => {
  const columns = splitIntoColumns(data, NUM_COLUMNS);

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        {
          ...style,
        },
      ]}
      showsVerticalScrollIndicator={false}
    >
      {columns.map((column: any, columnIndex: any) => (
        <View
          style={[
            styles.column,
            {
              gap: showTitle ? DEVICE_HEIGHT * 0.02 : 0,
            },
          ]}
          key={`column_${columnIndex}`}
        >
          {column.map((item: any, index: any) => (
            <TouchableOpacity
              style={[
                styles.itemContainer,
                {
                  height: showTitle
                    ? heights[item.id % heights.length] + DEVICE_HEIGHT * 0.01
                    : heights[item.id % heights.length],
                  paddingBottom: showTitle
                    ? DEVICE_HEIGHT * 0.02
                    : DEVICE_HEIGHT * 0.01,
                  borderRadius: showTitle ? 0 : 8,
                },
              ]}
              key={item.id + index}
              onPress={() => onPress?.(item)}
            >
              <Image source={item.bgImage} style={styles.image} />
              {showTitle && (
                <Text className='z-10 absolute -bottom-1 text-darkBrown font-semibold'>
                  {item?.title}
                </Text>
              )}
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: DEVICE_HEIGHT * 0.47,
    paddingTop: DEVICE_HEIGHT * 0.02,
  },
  column: {
    flex: 1, // Each column takes up equal width
    marginHorizontal: 4,
  },
  itemContainer: {
    // backgroundColor: 'red',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 8,
  },
});

export default MasonryLayout;
