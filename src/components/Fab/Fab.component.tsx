import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { AddIcon } from '../../assets/icons';
import { useNavigation } from '@react-navigation/native';
import { paths } from '../../navigation/paths';

const Fab = () => {
  const navigation:any = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(paths.UPLOAD)}
      className='absolute right-4 bottom-16 bg-darkBrown p-4 rounded-2xl px-5 items-center justify-center flex-row'
    >
      <Text className='text-white mr-4'>Upload Artifact</Text>
      <AddIcon />
    </TouchableOpacity>
  );
};

export default Fab;

const styles = StyleSheet.create({});
