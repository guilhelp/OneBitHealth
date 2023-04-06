import { View, Text, TouchableOpacity, Share } from 'react-native'
import React from 'react'
import styleresult from './styleresult'


export default function ResultImc(props) {

  const onShare = async () => {
    const result = await Share.share({
      message: "Meu imc hoje é: " + props.resultImc,
    })
  }

  return (
    <View style={styleresult.contextImx}>
      <View style={styleresult.boxSharebutton}>
        <Text style={styleresult.information}>{props.messageResultImc}</Text>
        <Text style={styleresult.numberImc}>{props.resultImc}</Text>
        <TouchableOpacity
          onPress={onShare}
          style={styleresult.shared}>
          <Text style={styleresult.sharedText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

