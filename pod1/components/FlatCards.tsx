import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const FlatCards = () => {
  return (
    <View>
        <Text style={style.headingText}>Flat Cards Component</Text>
        <View style={style.container}>
            <View style={[style.card,style.card1]}>
                <Text style={style.cardText} >Red</Text>
            </View>
            <View style={[style.card,style.card2]}>
                <Text style={style.cardText} >Blue</Text>
            </View>
            <View style={[style.card,style.card3]}>
                <Text  style={style.cardText}>Green</Text>
            </View>
            {/* <View style={[style.card,style.card1]}>
                <Text style={style.cardText} >Red</Text>
            </View> */}
        </View>
    </View>
  )
}

export default FlatCards;

const style = StyleSheet.create({
    headingText:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:10,
        textAlign:'center'
    },
    card:{
    width:100,
    height:100,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    margin:8
    },
    container:{
        flexDirection:'row',
        padding:10,
        justifyContent:'space-around',
        
    },
    card1:{
        backgroundColor:'red'
    },
    card2:{
        backgroundColor:'blue'
    },
    card3:{
        backgroundColor:'green'
    },
    cardText:{
        color:'white',
    }
});
