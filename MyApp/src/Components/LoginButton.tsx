import React from "react";
import { StyleSheet,StyleProp,TextStyle,ViewStyle} from "react-native";
import { Button,ButtonProps } from "react-native-paper";

interface LoginButtonProps extends ButtonProps {
    title:string;
    onPress: ()=> void;
    disabled?:boolean
    buttonStyle?:StyleProp<ViewStyle>;
    labelStyle?:StyleProp<ViewStyle>;
}

const LoginButton : React.FC<LoginButtonProps> = ({
    title,
    onPress,
    buttonStyle,
    labelStyle,
    mode = "Contained",
    ...rest
}) => {
    return (
        <Button
        mode="contained"
        onPress={onPress}
        style={[styles.defaultButton,buttonStyle]}
        labelStyle={[styles.defaultLabel,labelStyle]}
        {...rest}
    >{title}</Button>)
}

export default LoginButton;

const styles=StyleSheet.create({
    defaultButton: {
       width:'90%',
        borderRadius: 30,
        borderWidth: 2,
        backgroundColor: '#F16023',
        paddingVertical: 12,
        alignItems: 'center',
        borderColor: '#F16023',
        marginTop: 20, // spacing top
        alignSelf: 'center', // center horizontally
      },
      
      defaultLabel:{
        color:'#fff',
        fontSize:16,
        fontWeight:'600'
    },
    disablebutton:{
        backgroundColor:"#F16023",
        opacity:0.25  
    }
})