import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';
import * as Yup from 'yup';

const passwordSchema =Yup.object().shape({
    passwordLength:Yup.number()
        .min(4,'Password must be at least 4 characters long')
        .max(20,'Password cannot be longer than 20 characters')
        .required('Password length is required'),
    
})

export default function App() {
    const [password,setPassword] = useState('');
    const [isGenerated,setIsGenerated] = useState(false);

    const [lowercase,setLowercase] = useState(true);
    const [uppercase,setUppercase] = useState(false);
    const [numbers,setNumbers] = useState(false);
    const [symbols,setSymbols] = useState(false);


    const generatePassword = (length:number)=>{
        //
        let characterList = '';
        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const numberChars = '0123456789';
        const symbolChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

        if (lowercase){
            characterList += lowercaseChars;
        }
        if (uppercase){
            characterList += uppercaseChars;
        }
        if (numbers){
            characterList += numberChars;
        }
        if (symbols){
            characterList += symbolChars;
        }

        const password = createPassword(characterList,length);
        setPassword(password);
        setIsGenerated(true);
    }


    const createPassword = (characters:string,passwordLength:number)=>{
        //
        let result='';
        for (let i=0;i<passwordLength;i++){
            const characterIndex = Math.round(Math.random()*characters.length);
            result += characters.charAt(characterIndex);
        }
        return result;
    }

    const resetPasswordState = ()=>{
        //
        setPassword('');
        setIsGenerated(false);
        setLowercase(true);
        setUppercase(false);
        setNumbers(false);
        setSymbols(false);
    }

  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({})