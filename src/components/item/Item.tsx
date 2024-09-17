import {View, Text, Image, Pressable, TouchableOpacity} from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './Item.style';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../constants/sizes';
import Entypo from '@expo/vector-icons/Entypo';
import { categories } from '../../constants/data';

interface IProps {
  item: any;
  onPress: () => void
  onAvatarPress: () => void
}

const Item: React.FC<IProps> = ({item, onPress, onAvatarPress}) => {
  const {id, image, user, categoryId} = item;

  const [imageHeight, setImageHeight] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);

  const category = categories.find(c=>c.id == categoryId)

  const prices = [20000, 30000, 15000, 10000, 24000, 60000]

  useEffect(() => {
    const {width, height} = Image.resolveAssetSource(image);
    const maxHeight = DEVICE_HEIGHT; // or something else
    const maxWidth = DEVICE_WIDTH;
    const ratio = Math.min(maxWidth / width, maxHeight / height);
    setImageHeight(height * ratio)
    setImageWidth(width * ratio)

  }, [])

  return (
    <>
      <Pressable
        style={styles(imageWidth, imageHeight).container}
        onPress={onPress}
        key={id}
      >
        <Image resizeMode='contain' source={image} style={styles(imageWidth, imageHeight).image} />
        <Entypo name="heart" color="#ee5253" size={22} style={{ position: 'absolute', top: 15, left: 15 }} />
      </Pressable>
      <TouchableOpacity style={styles().avatarAndTexts} onPress={onAvatarPress}>
        <Image source={{uri: user.avatar}} style={styles().avatar} />
        <View style={{ marginLeft: 5 }}>
          <Text className="font-bold text-[14px] w-[90%]">{user?.name}</Text>
          <Text className="text-[10px]">{category?.title}</Text>
        </View>
      <Text style={{ position: 'absolute', right: 15, fontSize: 10, color: '#10ac84' }}>{prices[Math.floor(Math.random() * prices.length - 1)]} FCFA</Text>
      </TouchableOpacity>
    </>
  );
};

export default Item;