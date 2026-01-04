import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {

    function openWebsite(link:string){
        Linking.openURL(link);
    }

  return (
    <View>
      <Text style={styles.headingText}>Blog</Text>
        <View style={[styles.card,styles.elevatedCard]}>
           <View style={styles.headingContainer}>
           
                <Text style={styles.headingContainerText}>
                    Learn More About React Native
                </Text>
                
           </View>
           <Image
            source={{uri:'https://reactnative.dev/img/tiny_logo.png'}}
            style={styles.image}
           />
           <View style={styles.cardBody}>
                <Text numberOfLines={3}>
                    React Native lets you create truly native apps and doesnt compromise your users experiences. It provides a core set of platform agnostic native components like View, Text, and Image that map directly to the platform’s native UI building blocks.
                </Text>
           </View>
           <View style={{justifyContent:'space-evenly', alignItems:'center',flexDirection:'row',margin:10}}>
           <View style={styles.cardFooter}>
                <TouchableOpacity
                    onPress={()=>openWebsite('https://reactnative.dev/')}
                >

                    <Text>Read More</Text>
                </TouchableOpacity>
           </View>
           <View style={styles.socialLinks}>
                <TouchableOpacity
                    onPress={()=>openWebsite('https://reactnative.dev/')}
                >

                    <Text>Follow Me</Text>
                </TouchableOpacity>
           </View>
           </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:10,
        textAlign:'center'
    },
    card:{
        backgroundColor:'white',
        borderRadius:10,
        padding:15,
        marginVertical:10,
        marginHorizontal:20,
    },
    elevatedCard:{
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:2,
        },
        shadowOpacity:0.25,
        shadowRadius:3.84,
        elevation:5,
    },
    headingContainer:{
        marginBottom:10,
    },
    headingContainerText:{
        fontSize:18,
        fontWeight:'bold',
    },
    image:{
        height:100,
        width:'100%',
        borderRadius:10,
        marginBottom:10,
    },
    cardBody:{
        marginBottom:10,
        flexDirection:'row', 
        alignItems:'center',
        justifyContent:'center',
    },
    cardFooter:{
        marginBottom:10,
        backgroundColor:'#f0f0f0',
        padding:8,
        borderRadius:5,

    },
    socialLinks:{
        alignItems:'center',
        marginBottom:10,
        backgroundColor:'#f0f0f0',
        padding:8,
        borderRadius:5,
    }
})