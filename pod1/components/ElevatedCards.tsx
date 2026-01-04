import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const ElevatedCards = () => {
  return (
    <View>
        <Text style={style.headingText} >Elevated Cards</Text>
        <ScrollView horizontal={true} style={style.container}>
            <View style={[style.card,style.elevated]}>
                <Text>Tap</Text>
            </View>
            <View style={[style.card,style.elevated]}>
                <Text>Me</Text>
            </View>
            <View style={[style.card,style.elevated]}>
                <Text>to</Text>
            </View>
            <View style={[style.card,style.elevated]}>
                <Text>Scroll</Text>
            </View>
            <View style={[style.card,style.elevated]}>
                <Text>more...</Text>
            </View>
            <View style={[style.card,style.elevated]}>
                <Text>more...</Text>
            </View>
        </ScrollView>
    </View>
  )
}

export default ElevatedCards;

const style = StyleSheet.create({
    headingText:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:10,
        textAlign:'center'},

        card:{
            width:100,
            height:100,
            borderRadius:10,
            justifyContent:'center',
            alignItems:'center',
            margin:8,
            flex:1,
        },
        elevated:{
           backgroundColor:'#CAD5E2',
           elevation:8,
           shadowOffset:{width:1,height:1},
           shadowColor:'grey',
           shadowOpacity:0.3,
        },
        container:{
            padding:8,
        }




    });