import { Button, Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import DiceOne from '../assets/images/1.png';
import DiceTwo from '../assets/images/2.png';
import DiceThree from '../assets/images/3.png';
import DiceFour from '../assets/images/4.png';
import DiceFive from '../assets/images/5.png';
import DiceSix from '../assets/images/6.png';
import type { JSX, PropsWithChildren } from 'react';

type DiceProps =PropsWithChildren<{
  imageUrl:ImageSourcePropType
}>

const Dice = ({imageUrl}:DiceProps)=>{
  return(
    <View>
      <Image
        source={imageUrl}
        style={styles.diceImage}
      />
    </View>
  );
}



export default function Index() {

  const [diceImage,setDiceImage] = useState<ImageSourcePropType>(DiceOne);


  const rollDiceOnTap = ()=>{
    let randomNumber=Math.floor(Math.random()*6)+1;
    switch(randomNumber){
      case 1: setDiceImage(DiceOne)
      break
      case 2: setDiceImage(DiceTwo)
      break
      case 3: setDiceImage(DiceThree)
      break
      case 4: setDiceImage(DiceFour)
      break
      case 5: setDiceImage(DiceFive)
      break
    
      case 6: setDiceImage(DiceSix)
      break

      
    }
  }

  return (
    <SafeAreaView style={styles.container}>
              <Text style={styles.heading}>Roll Dice</Text>
      <View style={styles.innerContainer}>
        <Dice imageUrl={diceImage}/>
        <TouchableOpacity style={styles.button} onPress={()=>rollDiceOnTap()}>
          <Text style={styles.btntxt}>Roll Dice</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
      flexDirection:'column',
      
    },
    heading:{
        fontSize:24,
        fontWeight:'bold',
        margin:20,
        textAlign:'center'

    },
    innerContainer:{
      alignItems:'center',
      flexDirection:'column',
      justifyContent:'space-evenly',
      
      flex:1
    },
    diceImage:{
      height:200,
      width:200
    },
    button:{
      padding:16,
      borderRadius:12,
      borderWidth:1,
      borderColor:'blue',
      backgroundColor:'lightblue'
    },
    btntxt:{
      fontSize:18,
      fontWeight:'semibold'
    }
})