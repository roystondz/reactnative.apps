import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {

    const contacts=[
        {
            uid:1,
            name:'John Doe',
            status:'Making code awesome!',
            imageUrl:'https://randomuser.me/api/portraits/men/1.jpg'
        },
        {
            uid:2,
            name:'Jane Smith',
            status:'Loving React Native!',
            imageUrl:'https://randomuser.me/api/portraits/women/2.jpg'
        },
        {
            uid:3,
            name:'Mike Johnson',
            status:'Mobile Developer',
            imageUrl:'https://randomuser.me/api/portraits/men/3.jpg'    },


        
    ];

  return (
    <View>
      <Text style={styles.heading}>ContactList</Text>
      <ScrollView
        scrollEnabled={false}
        style={styles.container}
      >
        {
            contacts.map(({name,status,imageUrl,uid})=>(
                <View
                    key={uid}
                    style={{
                        flexDirection:'row',
                        alignItems:'center',
                        margin:6,
                        backgroundColor:'#f9f9f9',
                        padding:10,
                        borderRadius:8,
                    }}
                >
                    <View
                        style={{
                            width:50,
                            height:50,
                            borderRadius:25,
                            overflow:'hidden',
                            marginRight:15,
                        }}
                    >
                        <Image
                            source={{uri:imageUrl}}
                            style={{width:'100%',height:'100%'}}
                        />
                    </View>
                    <View>
                        <Text style={{fontSize:16,fontWeight:'bold'}}>{name}</Text>
                        <Text style={{color:'grey'}}>{status}</Text>
                    </View>
                </View>
            ))
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    heading:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:10,
        textAlign:'center'
    },
    container:{
        marginVertical:10,
        marginHorizontal:20,
        borderWidth:1,
        borderColor:'#ccc',
        borderRadius:10,
        padding:10,
    },
})