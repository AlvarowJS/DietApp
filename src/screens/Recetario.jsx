import React, { useEffect, useState } from 'react'
import { Button, View, Text, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";
import Strings from '../utils/Strings';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Categorias from '../components/Categorias';
import Recetas from '../components/Recetas';
var { height, width } = Dimensions.get('window');
var styles = require('../../assets/files/Styles');

const Recetario = ({navigation}) => {
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  useEffect(() => {
    setNombre(global.Id.persona_id.nombre)
    setApellido(global.Id.persona_id.apellido)
  }, [])
  
  return (
    <View style={{ backgroundColor: '#F4F5FA' }}>
      <ScrollView>
        <View style={{ paddingTop: 45, paddingHorizontal: 30, width: width, marginBottom: 5 }}>
          <Grid>
            <Col size={2} style={{ alignContent: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 16, color: '#8D8C8C', fontWeight: 'bold' }}>{Strings.STWELCOME} {nombre} {apellido} </Text>
              <Text style={{ fontSize: 24, color: '#E4C07E', fontWeight: 'bold' }}>{Strings.STRECETARIO}</Text>

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
        <Grid>
          <Text style={{ color: 'black', paddingLeft: 30, marginBottom: 20 }}>{Strings.STCATEGORIA}</Text>
          <Col style={{ alignItems: 'flex-end', marginRight: 10 }}>
            <Text style={{ color: '#A5A1A1', borderBottomWidth: 1, borderBottomColor: '#A5A1A1' }}>{Strings.STTODAS}</Text>
          </Col>
        </Grid>

        <Categorias />

        <Recetas />

        <View style={{ height: height * 0.10 }} />


      </ScrollView>
    </View>
  )
}

export default Recetario