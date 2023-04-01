import { View, Text } from 'react-native'
import React from 'react'
import styleresult from './styleresult'


export default function ResultImc(props){
  return (
    <View style={styleresult.contextImx}>
        <Text style={styleresult.information}>{props.messageResultImc}</Text>
        <Text style={styleresult.numberImc}>{props.resultImc}</Text>
    </View>
  )
}

