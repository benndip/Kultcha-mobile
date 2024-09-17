import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useRef, useState } from 'react';
import { BottomSheetMethods } from '@devvie/bottom-sheet';
import { Dropdown } from 'react-native-element-dropdown';
import styles from './Upload.style';
import AntDesign from '@expo/vector-icons/AntDesign';
import * as ImagePicker from 'expo-image-picker';
import Ionicons from '@expo/vector-icons/Ionicons';

const Upload = () => {
  const sheetRef = useRef<BottomSheetMethods>();

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [image, setImage] = useState('');

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const categories = [
    {
      value: 1,
      label: 'Paintings',
    },
    {
      value: 2,
      label: 'Drawings',
    },
    {
      value: 3,
      label: 'Sculpture',
    },
    {
      value: 4,
      label: 'Ceramics',
    },
    {
      value: 5,
      label: 'Digital Art',
    },
    {
      value: 6,
      label: 'Textile Art',
    }
  ];

  const cultures = [
    { label: 'Bamileke', value: '1' },
    { label: 'Bassa', value: '2' },
    { label: 'Beti', value: '3' },
    { label: 'Bakweri', value: '4' },
    { label: 'Fulani', value: '5' },
    { label: 'Douala', value: '6' },
    { label: 'Maka', value: '7' },
    { label: 'Kirdi', value: '8' },
    { label: 'Tikar', value: '9' },
    { label: 'Bamoun', value: '10' },
    { label: 'Bafut', value: '11' },
    { label: 'Bassa-Bakoko', value: '12' },
    { label: 'Bulu', value: '13' },
    { label: 'Ewondo', value: '14' },
    { label: 'Gbabiri', value: '15' },
    { label: 'Mbamois', value: '16' },
    { label: 'Mbum', value: '17' },
    { label: 'Bangwa', value: '18' },
    { label: 'Bayang', value: '19' },
    { label: 'Bakossi', value: '20' },
    { label: 'Ngemba', value: '21' },
    { label: 'Mundang', value: '22' },
    { label: 'Toupouri', value: '23' },
    { label: 'Kotoko', value: '24' },
    { label: 'Mafa', value: '25' },
    { label: 'Masa', value: '26' },
    { label: 'Mandara', value: '27' },
    { label: 'Mbo', value: '28' },
    { label: 'Chamba', value: '29' },
    { label: 'Shuwa Arab', value: '30' },
    { label: 'Pygmy', value: '31' },
    { label: 'Bafia', value: '32' },
    { label: 'Bassa-Mpoo', value: '33' },
    { label: 'Nso', value: '34' },
    { label: 'Kom', value: '35' },
    { label: 'Widikum', value: '36' },
    { label: 'Banjun', value: '37' },
    { label: 'Bamessing', value: '38' },
    { label: 'Babungo', value: '39' },
    { label: 'Bafang', value: '40' },
    { label: 'Yamba', value: '41' },
    { label: 'Yambassa', value: '42' },
    { label: 'Mboum', value: '43' },
    { label: 'Tupuri', value: '44' },
    { label: 'Mvele', value: '45' },
    { label: 'Kaka', value: '46' },
    { label: 'Buli', value: '47' },
    { label: 'Fang', value: '48' },
    { label: 'Gbaya', value: '49' },
    { label: 'Bafia-Bana', value: '50' },
    { label: 'Mvele', value: '51' },
    { label: 'Kuo', value: '52' },
    { label: 'Bangwa', value: '53' },
    { label: 'Moundang', value: '54' },
    { label: 'Mouktélé', value: '55' },
    { label: 'Péré', value: '56' },
    { label: 'Podokwo', value: '57' },
    { label: 'Tali', value: '58' },
    { label: 'Mousgoum', value: '59' },
    { label: 'Yemba', value: '60' },
    { label: 'Fe\'Fe', value: '61' },
    { label: 'Lamé', value: '62' },
    { label: 'Pabea', value: '63' },
    { label: 'Mbéré', value: '64' },
    { label: 'Bangwa', value: '65' },
    { label: 'Musgum', value: '66' },
    { label: 'Balong', value: '67' },
    { label: 'Mabi', value: '68' },
    { label: 'Bakaka', value: '69' },
    { label: 'Banyang', value: '70' },
    { label: 'Bafoussam', value: '71' },
    { label: 'Abo', value: '72' },
    { label: 'Batanga', value: '73' },
    { label: 'Nkongho', value: '74' },
    { label: 'Makaa', value: '75' },
    { label: 'Giziga', value: '76' },
    { label: 'Matakam', value: '77' },
    { label: 'Betare Oya', value: '78' },
    { label: 'Fulfulde', value: '79' },
    { label: 'Tikar', value: '80' },
    { label: 'Bororo', value: '81' },
    { label: 'Mokolo', value: '82' },
    { label: 'Kousseri', value: '83' },
    { label: 'Magba', value: '84' },
    { label: 'Bulu', value: '85' },
    { label: 'Bangoulap', value: '86' },
    { label: 'Bati', value: '87' },
    { label: 'Beti', value: '88' },
    { label: 'Baka', value: '89' },
    { label: 'Bagyeli', value: '90' },
    { label: 'Nyong', value: '91' },
    { label: 'Bafia', value: '92' },
    { label: 'Ngumba', value: '93' },
    { label: 'Bateke', value: '94' },
    { label: 'Banen', value: '95' },
    { label: 'Ngemba', value: '96' },
    { label: 'Eton', value: '97' },
    { label: 'Ewondo', value: '98' },
    { label: 'Yaunde', value: '99' },
    { label: 'Betare Oya', value: '100' }
  ];

  return (
    <View className='pt-14'>
      <ScrollView>
        <Text className='self-center text-xl font-bold'>Post Your Art</Text>
        <Text className='self-center text-sm font-light mb-10'>Distribute on a larger market</Text>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          // placeholderStyle={styles.placeholderStyle}
          // selectedTextStyle={styles.selectedTextStyle}
          // inputSearchStyle={styles.inputSearchStyle}
          // iconStyle={styles.iconStyle}
          data={categories}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select Category' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          // placeholderStyle={styles.placeholderStyle}
          // selectedTextStyle={styles.selectedTextStyle}
          // inputSearchStyle={styles.inputSearchStyle}
          // iconStyle={styles.iconStyle}
          data={cultures}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select Culture' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
        <TextInput style={styles.input} placeholder='Description:' numberOfLines={6} />
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
          {image && <View style={styles.imageContainer}>
            <Image source={{ uri: image }} style={styles.selectedImage} />
            <Ionicons name="trash" size={24} color="#ee5253" style={{ position: 'absolute', bottom: 10, right: 10 }} onPress={()=>setImage('')} />
          </View>}
          <TouchableOpacity className='flex flex-row items-center bg-amber-600' style={styles.uploadBtn} onPress={pickImage}>
            <Text className='font-semibold'>Add Files</Text>
            <AntDesign name="upload" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <Text className='mt-10 w-[80%] self-center'>By clicking “Post” i agree with all <Text className='text-[#500BFF]'>Terms</Text> and <Text className='text-[#500BFF]'>Conditions</Text> of Kultcha</Text>
        <TouchableOpacity style={styles.publishBtn} className='bg-amber-600'>
          <Text style={{ color: '#FFF', fontWeight: '700' }}>Publish</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Upload;
