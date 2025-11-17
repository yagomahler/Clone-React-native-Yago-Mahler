
import React from "react"
import { Image, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import duoduo from './assets/duoduo.png'
import tentativa from './assets/tentativa.png'


export const App = () => {

  return( 
  <View style={styles.containersplash}>
    <Image source={duoduo} style={styles.image1splash} />
    <TouchableOpacity activeOpacity={0.5} >
      <Image source={tentativa} style={styles.image2splash} />
    </TouchableOpacity >
  </View>
  )}

export default App;
