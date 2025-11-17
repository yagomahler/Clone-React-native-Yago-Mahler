import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../../../styles'
import OscarDuolingo from '../../../assets/OscarDuolingo.png'
import BarraDuolingo from '../../../assets/BarraDuolingo.png'
import EnergyDuolingo from '../../../assets/EnergyDuolingo.png'

export const writepage = () => {
    
  const [texto, setTexto] = useState<String>("");
return (
        <View style={styles.containerwrite}>

          <View style={styles.completeBar}>
            <Image source={BarraDuolingo} style={styles.imgbar1}/>
            <Image source={EnergyDuolingo} style={styles.imgbar2}/>
            <Text style={styles.textbar}>22</Text>
          </View>
            <Text style={styles.textlicao}>Complete a tradução</Text>


            <View style={styles.alinharimg}>
                <Image source={OscarDuolingo} style={styles.imagewrite} />
                <Text style={styles.writebox}> Eu quero o outro.</Text>
            </View>
            <View  style={styles.writeboxintern}>

               <Text style={styles.textwritebox}>I want the other </Text>
            <TextInput 
            style={styles.textInput}
            value={texto}
            onChangeText={text => setTexto(text)}/>
            </View>

            <TouchableOpacity
                activeOpacity={0.9}>
                <Text style={styles.GreyButton}> VERIFICAR</Text>
            </TouchableOpacity>
        </View>
    )
}

export default writepage;