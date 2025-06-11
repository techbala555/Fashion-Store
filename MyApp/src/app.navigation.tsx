import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import SplashScreen from "./Screens/SplashScreen"
import WelcomeScreen from "./Screens/WelcomeScreen"
import LoginMobile from "./Screens/LoginMobile"
import otpVerify from "./Screens/otpVerify"
import thankYou from "./Screens/thankYou"
import Home from "./Screens/Home"
import ProductDetails from "./Screens/ProductDetails"
import CheckOutPage from "./Screens/CheckOutPage"
import Cart from "./Screens/Cart"
import FavrtProduct from "./Screens/FavrtProduct"
import Profile from "./Screens/Profile"
import Chat from "./Screens/Chat"
import { FirebaseAuthTypes } from "@react-native-firebase/auth"
import BottomTabNavigator from "./BottomTabNavigator"



export type AppModuleParamList={
    Splash:undefined
    Welcome:undefined    
    Login:undefined
    Verify:{confirm:FirebaseAuthTypes.ConfirmationResult};
    thankYou:undefined
    Home:undefined
    ProductDetails:undefined
    CheckOutPage:undefined
    cart:undefined
    FavrtProduct:undefined
    Profile:undefined
    chat:undefined
    MainTabs:undefined
}

const AppModule = createNativeStackNavigator<AppModuleParamList>();

export function AppNavigation (){
    return(
        <NavigationContainer >
            <AppModule.Navigator  screenOptions={{ headerShown: false }}
      id={undefined}>
                <AppModule.Screen
                name="Splash"
                component={SplashScreen}
                options={{
                    
                }}/>
                <AppModule.Screen
                name="Welcome"
                component={WelcomeScreen}
                options={{
                   
                }}/>
                <AppModule.Screen
                name="Login"
                component={LoginMobile}
                options={{
                   
                }}/>
               <AppModule.Screen
               name="Verify"
               component={otpVerify}/>

               <AppModule.Screen
               name="thankYou"
               component={thankYou}/>

               <AppModule.Screen
               name="Home"
               component={Home}/>

               <AppModule.Screen
               name="ProductDetails"
               component={ProductDetails}/>

               <AppModule.Screen
              name="cart"
              component={Cart}/>

              <AppModule.Screen
              name="CheckOutPage"
              component={CheckOutPage}/>

              <AppModule.Screen
              name="FavrtProduct"
              component={FavrtProduct}/>

              <AppModule.Screen
              name="Profile"
              component={Profile}/>

                <AppModule.Screen
              name="chat"
              component={Chat}/>
              <AppModule.Screen
                name="MainTabs"
                component={BottomTabNavigator}
            />
            
            </AppModule.Navigator>
        </NavigationContainer>
    )
}