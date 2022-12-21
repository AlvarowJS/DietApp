import { Button, View, Text, Dimensions, ScrollView, TouchableOpacity, Image, FlatList, StyleSheet } from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";
import React, { useEffect, useState } from 'react'
import Strings from '../../utils/Strings';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';


const Consejos = ({ navigation }) => {
  const [consejos, setConsejos] = useState('')

  
  let idConsejo = global.idPlan.id
  let imgPermitidos = '../../../assets/images/consejos/permitidos.png'
  let imgProhibidos = '../../../assets/images/consejos/prohibidos.png'
  let imgNoOlvidar = '../../../assets/images/consejos/no_olvidar.png'

  useEffect(() => {
    axios.get(`https://dietservice.bitjoins.pe/api/plan-alimentacion/recomendaciones/${idConsejo}`)
      .then(resp => {
        setConsejos(resp.data.data)
      })
  }, [])

  
  return (
    <View style={{ marginTop: 30 }}>
      <FlatList
        data={consejos}
        refreshing="false"
        numColumns={1}
        renderItem={({ item }) =>
          <View style={styles.container}>
            {/* <Image source={require(
              item.tipo == 1 || item.tipo == 2 ? imgPermitidos :                
              item.tipo == 3 ? imgProhibidos : 
              imgNoOlvidar
              )} 
              style={{ width: 50, height: 50 }} /> */}
            
            {/* <Image source={require(imgPermitidos)} style={{ width: 150, height: 150 }} /> */}
            <Text style={styles.titulo}>{
              item.tipo == 1 ? 'Pautas Generales' :
                item.tipo == 2 ? 'Alimentos Permitidos' :
                  item.tipo == 3 ? 'Prohibidos(Consumo mensual)' :
                    'No olvidar'}
            </Text>
            <Text>{item.recomendacion}</Text>
          </View>

        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    
  },
  container: {
    marginHorizontal: 30
  }
})

export default Consejos