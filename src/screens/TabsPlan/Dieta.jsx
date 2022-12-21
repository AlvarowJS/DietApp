import { StyleSheet, View, Text, Dimensions, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";
import React, { useEffect, useState } from 'react'
import Strings from '../../utils/Strings';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import DietaDetalle from '../../components/Plan/DietaDetalle';


const Dieta = () => {
  
  const [comida, setComida] = useState(0)
  const [planDieta, setPlanDieta] = useState()

  
  let idDieta = global.idPlan.id
  
  useEffect(() => {
    axios.get(`https://dietservice.bitjoins.pe/api/plan-alimentacion/dietas/${idDieta}`)
      .then(resp => {
        setPlanDieta(resp.data.data)
      })
  }, [])
  
  
  

  return (
    <View style={{ marginTop: 30, backgroundColor: 'white' }}>
      <FlatList
        data={planDieta}
        refreshing="false"
        numColumns={1}
        renderItem={({ item }) =>
          <View >
            <TouchableOpacity 
            onPress={() => setComida(item.opcion)}
            style={styles.planDieta}
            >
            <Grid >
                <Col>
                  <Text style={{ color: 'white' }}>Opcion #{item.opcion} </Text>
                </Col>
                <Col style={{ alignItems: 'flex-end' }}>
                  <Text style={{ color: 'white' }}>fecha</Text>
                </Col>
              </Grid>
            </TouchableOpacity>
            
            { comida == item.opcion ? (<DietaDetalle idOpcion = {item.opcion}/>) : null}
            
          </View>

        }
      />
    </View>
  )
}
const styles = StyleSheet.create({
  planDieta: {
    backgroundColor: '#DCAC55',
    marginHorizontal: 30,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 15

  },
})

export default Dieta