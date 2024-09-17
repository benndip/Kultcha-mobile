import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import Layout from '../../layouts/Layout';
import { CustomButton, CustomInput } from '../../components';
import { colors } from '../../constants/colors';
import { CoinsIcon, ExchangeIcon } from '../../assets/icons';
import { DEVICE_HEIGHT } from '../../constants/sizes';
import LinearGradient from 'react-native-linear-gradient';

const Deposit = () => {
  const customCoins = [
    {
      id: 0,
      amount: '5',
    },
    {
      id: 1,
      amount: '10',
    },
    {
      id: 2,
      amount: '15',
    },
    {
      id: 3,
      amount: '20',
    },
  ];
  const [amount, setAmount] = useState('0');
  return (
    <Layout showPurse={false}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className='flex items-center px-1'>
          <Text className='font-bold text-2xl text-darkBrown mb-10'>
            Wallet
          </Text>
          <Image
            source={require('../../assets/images/wallet.png')}
            resizeMode='contain'
            className='w-28 mb-10'
          />
          <LinearGradient
            colors={['rgba(255, 170, 66, 0.9)', colors.darkBrown]}
            className='bg-darkBrown p-5 w-full rounded-2xl shadow-lg'
            useAngle
            locations={[0.8, 0.3]}
          >
            <View className='flex-row items-center justify-between'>
              <View>
                <Text className='text-white font-bold mb-3'>Cash</Text>
                <View className='w-[70%] flex-row items-center'>
                  <CustomInput
                    placeholder=''
                    className='text-darkBrown font-bold text-3xl w-full'
                    keyboardType='numeric'
                    height={DEVICE_HEIGHT * 0.08}
                    value={amount}
                    onChangeText={setAmount}
                  />
                  <View className='ml-8'>
                    <ExchangeIcon />
                  </View>
                </View>
              </View>
              <View>
                <Text className='text-white font-bold mb-3'>
                  Coins
                </Text>
                <Text className='text-white font-bold text-2xl'>
                  {amount ? parseInt(amount) * 25 : '0'}
                </Text>
              </View>
            </View>
            <View className='h-[1.3px] bg-white w-full my-5' />
            <View className='flex-row justify-end items-center gap-2'>
              <Text
                style={{
                  color: 'rgba(255,255,255,0.5)',
                }}
              >
                Available:
              </Text>
              <Text className='text-white font-semibold text'>20</Text>
            </View>
          </LinearGradient>
        </View>
        <View className='flex-row justify-around mt-7 items-center'>
          {customCoins.map((item) => (
            <TouchableOpacity
              className='border border-greyVar2 rounded-md px-4 py-1 flex-row items-center'
              key={item.id}
              style={{
                padding: 1,
              }}
              onPress={() => setAmount(item.amount)}
            >
              <Text className='text-lg font-bold mr-4'>{item.amount}</Text>
              <CoinsIcon />
            </TouchableOpacity>
          ))}
        </View>
        <View
          className=''
          style={{
            marginTop: DEVICE_HEIGHT * 0.15,
          }}
        >
          <Text className=' text-greyVar2 text-center mb-6'>
            <Text className='text-redVar1'>Note:</Text> The funds paid for coins
            here are not refundable.
          </Text>
          <CustomButton
            title='Buy Coins'
            textClassName='font-bold text-white text-lg'
          />
        </View>
      </ScrollView>
    </Layout>
  );
};

export default Deposit;
