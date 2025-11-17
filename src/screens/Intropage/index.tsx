import React from 'react'
import { Image, Text, View, TouchableOpacity } from 'react-native'
import { styles } from '../../../styles'
import duopencil from '../../../assets/duopencil-remove.png'

export const intropage = () => {
  return (
     <View style={styles.containerintro}>
       <Image source={duopencil} style={styles.imageintro} />
       <Text style={styles.textintro}> Vamos reforçar o conceito gramatical que voce mais  precisa estudar!</Text>
 
       <Text style={styles.textboxintern}> "These" e "those"</Text>
       <Text style={styles.textbox}> I love those hats</Text>
 
       <TouchableOpacity activeOpacity={0.5}>
         <Text style={styles.BlueButton}> COMEÇAR LIÇÃO</Text>
       </TouchableOpacity>
     </View>
   )}

export default intropage