import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, Dimensions, TouchableOpacity, FlatList } from 'react-native'
import Strings from '../utils/Strings';
import { Col, Row, Grid } from "react-native-easy-grid";
import Ionicons from 'react-native-vector-icons/Ionicons'
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
var { height, width } = Dimensions.get('window');
var styles = require('../../assets/files/Styles');


const Plan = () => {

  const navigation = useNavigation()
  const [hisotrial, setHisotrial] = useState([])
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  useEffect(() => {
    setNombre(global.Id.persona_id.nombre)
    setApellido(global.Id.persona_id.apellido)
  }, [])

  let getId = global.Id == undefined ? null : global.Id?.id

  useEffect(() => {

    axios.get(`https://dietservice.bitjoins.pe/api/plan_alimentacion/${getId}`)
      .then(resp => {
        setHisotrial(resp.data.data)
      })

  }, [])

  return (
    <View style={{ backgroundColor: 'white' }}>

      <ScrollView>
        <View style={{ paddingTop: 45, paddingHorizontal: 30, width: width, marginBottom: 5 }}>
          <Grid>
            <Col size={2} style={{ alignContent: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 16, color: '#8D8C8C', fontWeight: 'bold' }}>{Strings.STWELCOME} {nombre} {apellido} </Text>
              <Text style={{ fontSize: 24, color: '#E4C07E', fontWeight: 'bold' }}>Plan Alimentación </Text>

            </Col>
            <Col style={{ alignItems: 'flex-end', alignContent: 'flex-end', justifyContent: 'flex-end' }}>
              <Grid>
                <TouchableOpacity activeOpacity={1}>
                  <Ionicons name="search" style={{ fontSize: 27, color: '#AAA9A9', marginRight: 5 }} />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={1}>
                  <Ionicons name="menu" onPress={() => navigation.openDrawer()} style={{ fontSize: 27, color: 'white', backgroundColor: '#DCAC55', borderRadius: 30 }} />
                </TouchableOpacity>
              </Grid>
            </Col>
          </Grid>
        </View>

        <Grid style={{ marginHorizontal: 30 }}>
          <Col>
            <Text>Todas las rutinas ({hisotrial.length}) </Text>
          </Col>
          <Col style={{ alignItems: 'flex-end' }}>
            <Text>Fechas </Text>
          </Col>
        </Grid>

        </ScrollView>

        <FlatList
          data={hisotrial.reverse()}
          refreshing="false"
          numColumns={1}
          renderItem={({ item }) =>
            <TouchableOpacity
              onPress={() => navigation.navigate('Tabs', global.idPlan=item)}
              style={styles.planRutina}
            >
              <Grid >
                <Col>
                  <Text style={{ color: 'white' }}>{item?.nombre} </Text>
                </Col>
                <Col style={{ alignItems: 'flex-end' }}>
                  <Text style={{ color: 'white' }}>{item?.fecultimaact}</Text>
                </Col>
              </Grid>
            </TouchableOpacity>
          }
        />

     
    </View>
  )
}

export default Plan