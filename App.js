import React, {useState} from 'react'
import {SafeAreaView, StyleSheet, View, Text} from 'react-native'
import Einstein from './components/Einstein'
import Elon from './components/Elon'
import Tesla from './components/Tesla'
import {Button} from 'react-native-paper'
import {useDispatch, useSelector} from 'react-redux'
// import {setTes} from './slices/tesReducer'
// import {setIndex} from './slices/bottomNavSlice'
import BottomNav from './components/MyBottomNav'

export default function App () {
  const dispatch = useDispatch()

  const quotes = Array(<Einstein />, <Elon />, <Tesla />)
  const [quote, setQuote] = useState(quotes[0])
  // const tes = useSelector((state) => state.tes.value)
  const index = useSelector(state => state.bottomNavIndex.value)

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Text>INDEX = {index}</Text>

        {quotes[index]}
      </View>

      <View style={{flexDirection: 'row'}}>
        <BottomNav />
      </View>
    </SafeAreaView>
  )
}
