import React, {useState} from "react";
import {View, Text, TextInput, TouchableOpacity} from "react-native"
import ResultImc from "./ResultImc";
import styleform from "./styleform";

export default function Form(){

    const[height, setHeight]= useState(null)
    const[weight, setWeight]= useState(null)
    const[messageImc, setMessageImc]= useState("Preencha o peso e altura")
    const[imc, setImc]= useState(null)
    const[textButton, setTextButton]= useState("Calcular")

    function imcCalculator(){
        return setImc((weight/(height * height)).toFixed(2))
    }

    function validationImc(){
        if(weight != null && height != null){
            setHeight(null)
            setWeight(null)
            imcCalculator()
            setMessageImc("Seu imc é igual: ")
            setTextButton("Calcular Novamente")
            return
        }
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencha o peso e a altura")
    }

    return(
        <View style={styleform.formContext}>
            <View style={styleform.form}>
                <Text style={styleform.formLabel}>Altura</Text>
                <TextInput
                style={styleform.input}
                onChangeText={setHeight}
                value={height}
                placeholder="Ex. 1.75"
                keyboardType="numeric"/>
                
                <Text style={styleform.formLabel}>Peso</Text>
                <TextInput
                style={styleform.input}
                onChangeText={setWeight}
                value={weight}
                placeholder="Ex. 75.365"
                keyboardType="numeric"/>

                
                <TouchableOpacity
                style={styleform.ButtonCalculator}
                onPress={()=>{
                    validationImc()
                }}>
                    <Text style={styleform.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
                

                
                    <ResultImc messageResultImc={messageImc} resultImc={imc}/>
                </View>
                
            </View>
        
    );
}