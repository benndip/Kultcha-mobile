import { View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import React from 'react'
import styles from './Profile.style'
import { ChevronLeftIcon } from '../../assets/icons'
import { MasonryFlashList } from '@shopify/flash-list'
import { DEVICE_WIDTH } from '../../constants/sizes'
import { ceramics, digitalArts, drawings } from '../../constants/data'
import { Item } from '../../components'
import { paths } from '../../navigation/paths'

const Profile = ({ route, navigation }:{ route: any, navigation: any }) => {

    const { user, from } = route?.params?.item

    const allItems = [...drawings, ...digitalArts, ...ceramics]

    const goToDetail = (item: any) => {
        navigation.navigate(paths.DETAILS, { item: {...item, from} })
      }

  return (
    <SafeAreaView style={styles.container}>
      <MasonryFlashList
        data={allItems}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <Item item={item} onPress={() => goToDetail(item)} />
        )}
        estimatedItemSize={600}
        onEndReachedThreshold={0.1}
        style={{ alignSelf: "center", width: DEVICE_WIDTH }}
        ListHeaderComponent={
          <>
            <TouchableOpacity
              className="bg-darkBrown rounded-full w-10 h-10 justify-center items-center top-5 left-5"
              onPress={() => navigation.goBack()}
            >
              {<ChevronLeftIcon />}
            </TouchableOpacity>
            <Image source={{ uri: user.avatar }} style={styles.avatar} />
            <Text className="font-bold text-2xl self-center mt-5">
              {user?.name}
            </Text>
            <Text className="self-center mt-1 text-sm mb-10">
              Painter, Ceramic and Digital Art
            </Text>
          </>
        }
      />
    </SafeAreaView>
  );
}

export default Profile