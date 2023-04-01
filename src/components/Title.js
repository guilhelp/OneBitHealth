import React from "react";
import {View, Text} from "react-native"
import styletitle from "./styletitle";
export default function Title(){
    return(
        <View style={styletitle.boxTitle}>
            <Text style={styletitle.textTitle}>ONEBITHEALTH</Text>
        </View>
    );
}