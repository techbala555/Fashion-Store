import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import RightArrow from '../../assets/SVG/RightArrow';


interface ProfileItemsProps{
    title:string;
    SvgIcon: React.FC<any>;
    onPress?:()=>void;
}

const ProfileItems:React.FC<ProfileItemsProps> = ({title,SvgIcon,onPress}) => {
  return (
   <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.textcontainer}>
    <SvgIcon width={24} height={24}/>
    <Text style={styles.title}>{title}</Text>
    </View>
    <RightArrow/>
   </TouchableOpacity>
  )
}

export default ProfileItems

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
       alignItems:'center',
       justifyContent:'center',
       paddingHorizontal:40,
       paddingVertical:20
    },
    textcontainer:{
        flexDirection:'row',
        alignItems:'center',
        gap:10,
    },
    title:{
        fontSize:16,
        fontWeight:'600',
        flex:1
    }
})