import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AddIcon } from '../../assets/icons';

const Fab = () => {
  return (
    <View className='absolute right-4 bottom-4 bg-darkBrown w-16 h-16 rounded-full items-center justify-center'>
      <Text>Fab</Text>
      <AddIcon />
    </View>
  )
}

export default Fab

const styles = StyleSheet.create({})