import React from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ChevronLeftIcon, MoreVerticalIcon } from '../../assets/icons';
import styles from './Details.styles';
import { Item } from '../../components';
import { categories, ceramics, digitalArts, drawings } from '../../constants/data';
import { DEVICE_WIDTH } from '../../constants/sizes';
import { MasonryFlashList } from "@shopify/flash-list";
import { paths } from '../../navigation/paths';

const Details = ({ route, navigation }:{ route: any, navigation: any }) => {
  
  const { id, categoryId, title, image, user, description, threeDModal, from } = route.params.item

  console.log("threeDModal Details", route.params.item);
  
  const category = categories.find(c=>c.id == categoryId)

  const allItems = [...drawings, ...digitalArts, ...ceramics]

  const goToDetail = (item: any) => {
    navigation.navigate(paths.DETAILS, { item })
  }

  const goToARScreen = () => {
    navigation.navigate(paths.CULTURALSITEAR, { item: threeDModal })
  }

  const goToNft = () => {
    navigation.navigate(paths.NFT)
  }

  const prices = [20000, 30000, 15000, 10000, 24000, 60000]

  return (
    <View style={{ flex: 1, paddingHorizontal: 15, paddingTop: 30 }}>
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
            <Text className="font-bold text-center text-lg mb-3">
              {category?.title}
            </Text>
            <ImageBackground
              source={image}
              borderRadius={16}
              style={styles.gradientImage}
            >
              <TouchableOpacity
                className="bg-darkBrown rounded-full w-10 h-10 justify-center items-center top-5 left-5"
                onPress={() => navigation.goBack()}
              >
                {<ChevronLeftIcon />}
              </TouchableOpacity>
              <LinearGradient
                colors={["rgba(46, 46, 46, 0.1)", "rgba(3, 3, 3, 0.8)"]}
                style={styles.gradientView}
                locations={[0.4, 1]}
              >
                <TouchableOpacity className="self-end bg-[rgba(0,0,0,1)] p-2 rounded-full">
                  <MoreVerticalIcon color={"#fff"} />
                </TouchableOpacity>
                <TouchableOpacity
                  className="rounded-full bg-golden p-5 justify-center self-end items-center w-[20px] h-[20px]"
                  activeOpacity={0.8}
                  onPress={() =>
                    Alert.alert(
                      "Cost for trying",
                      "This is going to cost you 4 coins to try this in your environment",
                      [
                        { text: "Continue", onPress: goToARScreen },
                        { text: "Another Time", style: "destructive" },
                      ]
                    )
                  }
                >
                  <Image
                    source={require("../../assets/images/vr.png")}
                    className="w-5 h-5"
                  />
                </TouchableOpacity>
              </LinearGradient>
            </ImageBackground>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 30,
              }}
            >
              <View style={styles.avatarAndTexts}>
                <Image source={{ uri: user?.avatar }} style={styles.avatar} />
                <View style={{ marginLeft: 5 }}>
                  <Text className="font-bold text-[16px]">{user?.name}</Text>
                  <Text className="text-[10px]">{category?.title}</Text>
                </View>
              </View>
              {from == "FROM_SETTINGS" ? (
                <TouchableOpacity
                  style={{
                    backgroundColor: "#FFAA42",
                    width: 121,
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    height: 34,
                  }}
                  onPress={goToNft}
                >
                  <Text style={{ fontSize: 12, fontWeight: "600" }}>
                    Sell as NFT
                  </Text>
                </TouchableOpacity>
              ): <Text style={{ marginRight: 10, fontSize: 12, color: '#10ac84' }}>{prices[Math.floor(Math.random() * prices.length - 1)]} FCFA</Text>}
            </View>
            <Text className="mb-3 leading-6">{description}</Text>
            <Text className="font-bold m-3">More on {category?.title}</Text>
          </>
        }
      />
    </View>
  );
};

export default Details;
