import React, {useState} from "react";
import {
    View, 
    Text, 
    TextInput, 
    TouchableOpacity,
    Vibration,
    Pressable,
    Keyboard,
    FlatList,
    } from "react-native"
import ResultImc from "./ResultImc/";
import styleform from "./styleform/";

export default function Form(){

    const[height, setHeight]= useState(null)
    const[weight, setWeight]= useState(null)
    const[messageImc, setMessageImc]= useState("Preencha o peso e altura")
    const[imc, setImc]= useState(null)
    const[textButton, setTextButton]= useState("Calcular")
    const[errorMessage, setErrorMessage] = useState(null)
    const[imcList, setImcList] = useState([])

    function imcCalculator(){
        let heightFormat = height.replace(",",".")
        let totalImc = (weight/(heightFormat * heightFormat)).toFixed(2)
        setImcList ((arr) => [...arr, {id: new Date().getTime(), imc:totalImc}])
        setImc(totalImc)
    }

    function verificationImc(){
        if(imc == null){
            Vibration.vibrate();
            setErrorMessage("Campo obrigatório*")
        }
    }

    function validationImc(){
        console.log(imcList)
        if(weight != null && height != null){
            setHeight(null)
            setWeight(null)
            imcCalculator()
            setMessageImc("Seu imc é igual: ")
            setTextButton("Calcular Novamente")
            setErrorMessage(null)
            
        }else{
            verificationImc()
            setImc(null)
            setTextButton("Calcular")
            setMessageImc("Preencha o peso e a altura")
        }
    }

    return(
       
            <View style={styleform.formContext}>
                {imc == null ? 
            <Pressable onPress={Keyboard.dismiss} style={styleform.form}>
                <Text style={styleform.formLabel}>Altura</Text>
                <Text style={styleform.errorMessage}>{errorMessage}</Text>
                <TextInput
                style={styleform.input}
                onChangeText={setHeight}
                value={height}
                placeholder="Ex. 1.75"
                keyboardType="numeric"/>
                
                <Text style={styleform.formLabel}>Peso</Text>
                <Text style={styleform.errorMessage}>{errorMessage}</Text>
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

                </Pressable>
                :
                <View style={styleform.exhibitionResultImc}>
                    <ResultImc messageResultImc={messageImc} resultImc={imc}/>
                    <TouchableOpacity
                        style={styleform.ButtonCalculator}
                        onPress={()=>{
                            validationImc()
                        }}>
                        <Text style={styleform.textButtonCalculator}>{textButton}</Text>
                    </TouchableOpacity>
                </View>
                }
                <FlatList
                showsVerticalScrollIndicator={false}
                style={styleform.listImcs}
                data={imcList.reverse()}
                renderItem={({item}) => {
                    return(
                        <Text style={styleform.resultImcItem}>
                            <Text style={styleform.textResultItemList}>Resultado IMC = </Text>
                            {item.imc}
                        </Text>
                    )
                }}
                keyExtractor={(item) =>{
                    item.id
                }}
                />
            </View>
        
    );
}