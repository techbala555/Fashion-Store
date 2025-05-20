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
import BottomTabNavigator from "../src/BottomTabNavigator"
import CheckOutPage from "./Screens/CheckOutPage"



export type AppModuleParamList={
    Splash:undefined
    Welcome:undefined    
    Login:undefined
    Verify:undefined
    thankYou:undefined
    Home:undefined
    ProductDetails:undefined
    BottomTabNavigator:undefined
    CheckOutPage:undefined
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
              name="BottomTabNavigator"
              component={BottomTabNavigator}/>

              <AppModule.Screen
              name="CheckOutPage"
              component={CheckOutPage}/>

            
            </AppModule.Navigator>
        </NavigationContainer>
    )
}