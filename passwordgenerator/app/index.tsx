import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { SafeAreaView } from 'react-native-safe-area-context';
import BouncyCheckbox from 'react-native-bouncy-checkbox';


const passwordSchema = Yup.object().shape({
    passwordLength: Yup.number()
        .min(4, 'Password must be at least 4 characters long')
        .max(20, 'Password cannot be longer than 20 characters')
        .required('Password length is required'),

})

export default function App() {
    const [password, setPassword] = useState('');
    const [isGenerated, setIsGenerated] = useState(false);

    const [lowercase, setLowercase] = useState(true);
    const [uppercase, setUppercase] = useState(false);
    const [numbers, setNumbers] = useState(false);
    const [symbols, setSymbols] = useState(false);


    const generatePassword = (length: number) => {
        //
        let characterList = '';
        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const numberChars = '0123456789';
        const symbolChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

        if (lowercase) {
            characterList += lowercaseChars;
        }
        if (uppercase) {
            characterList += uppercaseChars;
        }
        if (numbers) {
            characterList += numberChars;
        }
        if (symbols) {
            characterList += symbolChars;
        }

        const password = createPassword(characterList, length);
        setPassword(password);
        setIsGenerated(true);
    }


    const createPassword = (characters: string, passwordLength: number) => {
        //
        let result = '';
        for (let i = 0; i < passwordLength; i++) {
            const characterIndex = Math.round(Math.random() * characters.length);
            result += characters.charAt(characterIndex);
        }
        return result;
    }

    const resetPasswordState = () => {
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
            <ScrollView keyboardShouldPersistTaps='handled'>
                <SafeAreaView>
                    <Text style={styles.heading}>Password Generator</Text>
                    <View style={styles.container}>
                        
                        <Formik
                            initialValues={{passwordLength:''}}
                            validationSchema={passwordSchema}
                            onSubmit={(values)=>{
                                generatePassword(+values.passwordLength); //TODO
                                console.log(values);
                            }}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                isValid,
                                handleChange,
                                handleSubmit,
                                handleReset,
                                /* and other goodies */
                            }) => (
                                <>
                                    <View>
                                        <View style={styles.inputContainer}>
                                            <View >
                                            <Text style={styles.question}>Password Length</Text>
                                            {errors.passwordLength&&touched.passwordLength&&(
                                                <Text style={styles.error}>
                                                    {errors.passwordLength}
                                                </Text>
                                            )}
                                            </View>
                                            <TextInput
                                            value={values.passwordLength}
                                            onChangeText={handleChange('passwordLength')}
                                            placeholder='Ex:8'
                                            keyboardType='numeric'
                                            style={styles.input}
                                            />
                                        </View>
                                    </View>
                                    <View style={styles.inputContainer}>
                                        <Text style={styles.question}>Include Lower Case</Text>
                                        <BouncyCheckbox
                                        disableBuiltInState={true}
                                        isChecked={lowercase}
                                        onPress={
                                            ()=>setLowercase(!lowercase)
                                        }
                                        fillColor="red"
                                        >

                                        </BouncyCheckbox>
                                    </View>
                                    <View style={styles.inputContainer}>
                                        <Text style={styles.question}>Include Upper Case</Text>
                                        <BouncyCheckbox
                                        disableBuiltInState={true}
                                            isChecked={uppercase}
                                            onPress={()=>setUppercase(!uppercase)}
                                        >

                                        </BouncyCheckbox>
                                    </View>
                                    <View style={styles.inputContainer}>
                                    <Text style={styles.question}>Include Number</Text>
                                        <BouncyCheckbox
                                        disableBuiltInState={true}
                                            isChecked={numbers}
                                            onPress={()=>setNumbers(!numbers)}
                                            fillColor='green'
                                        >

                                        </BouncyCheckbox>
                                    </View>
                                    <View style={styles.inputContainer}>
                                    <Text style={styles.question}>Include Symbols</Text>
                                        <BouncyCheckbox
                                        disableBuiltInState={true}
                                            isChecked={symbols}
                                            onPress={()=>setSymbols(!symbols)}
                                            fillColor='blue'
                                        >
                                        </BouncyCheckbox>
                                    </View>

                                    
                                    <View style={styles.button}>
                                        <TouchableOpacity disabled={!isValid}
                                            onPress={handleSubmit}
                                            style={styles.generateButton}
                                        >
                                            <Text style={styles.btntext}>Generate</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                        onPress={()=>{
                                            handleReset();
                                            resetPasswordState();
                                        }}
                                        style={styles.resetButton}
                                        >
                                            <Text style={styles.btntext}>Reset</Text>
                                        </TouchableOpacity>
                                    </View>
                                </>
                            )}
                        </Formik>
                    </View>
                    {isGenerated?(
                        <View style={styles.pass}>
                            <Text>Long press to copy</Text>
                            <Text selectable style={styles.text} >{password}</Text>
                        </View>
                    ):null}
                </SafeAreaView>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    pass:{
        alignItems:'center',
        justifyContent:'space-between',
        height:200,
        backgroundColor:'lightyellow',
        margin:20,
        flex:1,
        flexDirection:'column',
        padding:60,
        borderRadius:24
        
    },
    text:{
        color:'black',
        fontSize:24,
        
    },

    heading:{
        fontSize:26,
        fontWeight:'bold',
        textAlign:'center',
    },
    inputContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        margin:10
    },
    container:{
        flex:1,
        flexDirection:'column',
        margin:10,
        padding:4
    },
    question:{
        fontSize:18,
        fontWeight:'semibold',
        fontStyle:'normal'
    },
    generateButton:{
        backgroundColor:'lightgreen',
        justifyContent:'center',
        alignItems:'center',
        padding:20,
        borderRadius:12,
        
    },
    resetButton:{
        backgroundColor:'grey',
        justifyContent:'center',
        alignItems:'center',
        padding:20,
        borderRadius:12,
       
    },
    button:{
        flex:1,
        flexDirection:'row',
        padding:12,
        justifyContent:'space-around'
    },
    btntext:{
         color:'white'
    },
    input:{
        width:'20%',
        borderColor:'grey',
        borderWidth:1,
        textAlign:'center',
        padding:13,
        borderRadius:12
    },
    error:{
        color:'red',
        fontWeight:'condensed'
    }
})