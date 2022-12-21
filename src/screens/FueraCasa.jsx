import { View, Text, Dimensions, ScrollView, TouchableOpacity, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import Strings from '../utils/Strings';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Col, Grid } from 'react-native-easy-grid'
import GridRestaurantes from '../components/GridRestaurantes';
import Restaurantes from '../components/Restaurantes';
var { height, width } = Dimensions.get('window');
var styles = require('../../assets/files/Styles');

const FueraCasa = ({navigation}) => {
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  useEffect(() => {
    setNombre(global.Id.persona_id.nombre)
    setApellido(global.Id.persona_id.apellido)
  }, [])
  
  return (
    <View>

      <ScrollView>

        <View style={{ paddingTop: 45, paddingHorizontal: 30, width: width, marginBottom: 5 }}>

          <Grid >

            <Col size={2} style={{ alignContent: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 16, color: '#8D8C8C', fontWeight: 'bold' }}>{Strings.STWELCOME} {nombre} {apellido} </Text>
              <Text style={{ fontSize: 24, color: '#E4C07E', fontWeight: 'bold' }}>{Strings.STRFUERACASA}</Text>
            </Col>

            <View style={styles.headerButtons}>

              <TouchableOpacity activeOpacity={1}>
                <Ionicons name="search" style={{ fontSize: 27, color: '#AAA9A9', marginRight: 5 }} />
              </TouchableOpacity>

              <Ionicons name="menu" onPress={() => navigation.openDrawer()} style={{ fontSize: 27, color: 'white', backgroundColor: '#DCAC55', borderRadius: 30 }} />

            </View>

          </Grid>
        </View>

        <Restaurantes />

        <Grid style={{ marginHorizontal: 30, marginBottom: 20 }}>
          <Text>Pedido Populares</Text>
          <Col style={{ alignItems: 'flex-end' }}>
            <Text style={{ color: '#B4B2B2', fontSize: 13, borderBottomWidth: 1, borderColor: '#B4B2B2' }}>Ver todas las categorias</Text>
          </Col>
        </Grid>

        <Grid >
          <Col style={{ alignItems: 'center' }}>

            <GridRestaurantes />

          </Col>
        </Grid>

        <View style={{ height: height * 0.10 }} />

      </ScrollView>
    </View>
  )
}

export default FueraCasa