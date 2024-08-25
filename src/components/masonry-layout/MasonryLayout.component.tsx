
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
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

const MasonryLayout = ({ data, onPress }: any) => {
  const columns = splitIntoColumns(data, NUM_COLUMNS);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {columns.map((column: any, columnIndex: any) => (
        <View style={styles.column} key={`column_${columnIndex}`}>
          {column.map((item: any, _: any) => (
            <TouchableOpacity
              style={[
                styles.itemContainer,
                { height: heights[item.id % heights.length] },
              ]}
              key={item.id}
              onPress={() => onPress?.(item)}
            >
              <Image source={item.bgImage} style={styles.image} />
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
    marginHorizontal: 6,
    gap: 6,
  },
  itemContainer: {
    marginBottom: 10, // Spacing between items
    borderRadius: 8,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default MasonryLayout;
