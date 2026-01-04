import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card,styles.cardElevation]}>
        <Image 
        source={{
            uri:'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsJTIwcGxhY2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80'
        }}
        style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardBodyTitle}>Sunset</Text>
            <Text style={styles.cardBodyLabel}>Location</Text>
            <Text style={styles.cardBodyDescription}>This is the image of a beautiful sunset.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Pariatur nemo laborum ratione quasi recusandae, 
            </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:20,
        fontWeight:'bold',
        padding:20,
        textAlign:'center'
    },
    card:{
        margin:16,
        borderRadius:10,
        minHeight:300,
    },
    cardElevation:{
        backgroundColor:'teal',
        elevation:10,
        shadowColor:'black',
        shadowOffset:{width:1,height:1},
        shadowOpacity:0.4,
        shadowRadius:3,
    },
    cardImage:{
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        width:'100%',
        height:200
    },
    cardBody:{

    },
    cardBodyTitle:{
        fontSize:18,
        fontWeight:'bold',
        color:'white',
        marginTop:8,
        marginLeft:8
    },
    cardBodyLabel:{
        marginTop:4,
        fontSize:14,
        color:'white',
        marginLeft:8,
        marginBottom:4
    },
    cardBodyDescription:{
        fontSize:12,
        color:'white',
        marginLeft:8,
        marginRight:8,
        textAlign:'justify',
        marginBottom:12
    }
})