import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import ShipAddress from '../Components/ShipAddress'
import ChooseShipType from '../Components/ChooseShipType'

const ShippingAddress = () => {
  return (
    <View style={{flex:1,backgroundColor:"#fff"}}>
      <Header
      title='Order Checkout'
      showHeart={false}/>
      <ShipAddress/>
      <ChooseShipType/>
    </View>
  )
}

export default ShippingAddress

const styles = StyleSheet.create({})