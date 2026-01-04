import ActionCard from '@/components/ActionCard'
import ElevatedCards from '@/components/ElevatedCards'
import FancyCard from '@/components/FancyCard'
import FlatCards from '@/components/FlatCards'
import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const index = () => {
  return (
    <SafeAreaView style={style.safeArea}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <FlatCards/>
            <ElevatedCards/>
            <FancyCard/>
            <ActionCard/>
        </ScrollView>
    </SafeAreaView>
  )
}

export default index

const style = StyleSheet.create({
    safeArea:{
        flex:1,
    }
})
