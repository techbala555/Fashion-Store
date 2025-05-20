import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackArrow from '../../assets/SVG/BackArrow'
import LoginButton from '../Components/LoginButton'
import Header from '../Components/Header'

const CheckOutPage = () => {
  return (
    <View style={styles.container}>
      <Header
      title='Checkout'
      showHeart={false}/>

      <View style={styles.promocontainer}>
        <Text style={{marginLeft:10 ,fontSize:14,fontWeight:'400',color:'#888'}}>Promo Code</Text>
        <LoginButton title={'Apply'} onPress={function (): void {
          throw new Error('Function not implemented.')
        } } children={''} style={styles.applybutton}/>
      </View>

<View style={styles.totalcontainer}>
      <View style={styles.row}>
        <Text style={styles.label}>Sub-Total</Text>
        <Text style={styles.value}>$407.97</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Delivery Fee</Text>
        <Text style={styles.value}>$10.00</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Discount</Text>
        <Text style={styles.value}>- $30.00</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.totalLabel}>Total</Text>
        <Text style={styles.totalValue}>$417.97</Text>
      </View>
    </View>

    <LoginButton title={'Proceed to Checkout'} onPress={function (): void {
        throw new Error('Function not implemented.')
      } } children={''} style={styles.button}/>
    </View>
  )
}

export default CheckOutPage

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: "#fff",   
  },
  header:{
    flexDirection:'row',
    alignItems:'center',
    marginLeft:30,
    position:'absolute',
    top:80    
  },
  promocontainer:{
    borderWidth:2,
    width:313,
    height:55,
    borderRadius:30,
    position:'absolute',
    top:130,
    alignSelf:'center',
    justifyContent:'space-between',
    borderColor:'#ccc',
    flexDirection:'row',
    alignItems:'center'
  },
  applybutton:{
    width:90,
    height:40,
    borderRadius:30,
    alignSelf:'center',
    marginRight:5,
    backgroundColor:'#F16023'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
  value: {
    fontSize: 16,
    color: '#333',
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  totalcontainer:{
    padding:30,
    marginTop:70
  },
  button:{
    width:325,
    height:50,
    alignSelf:'center',
    borderRadius:30,
    justifyContent:'center',
    backgroundColor:'#F16023'
    }
})