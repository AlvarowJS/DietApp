import { Button, View, Text, Dimensions, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Col, Row, Grid } from "react-native-easy-grid";
import Strings from '../utils/Strings';
import Ionicons from 'react-native-vector-icons/Ionicons'

import { Vimeo } from 'react-native-vimeo-iframe';
import WebView from 'react-native-webview';
import Ejercicio from '../components/Ejercicio';
import EjercicioVideos from '../components/EjercicioVideos';
var { height, width } = Dimensions.get('window');

const Entrenamiento = ({navigation}) => {

  
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  useEffect(() => {
    setNombre(global.Id.persona_id.nombre)
    setApellido(global.Id.persona_id.apellido)
  }, [])

  const videoCallbacks = {
    play: (data) => console.log('play: ', data),
    pause: (data) => console.log('pause: ', data),
    fullscreenchange: (data) => console.log('fullscreenchange: ', data),
    ended: (data) => console.log('ended: ', data),
    controlschange: (data) => console.log('controlschange: ', data),
  }
  return (
    <View style={{backgroundColor: 'white'}}>
      
    <ScrollView>
      <View style={{ paddingTop: 45, paddingHorizontal: 30, width: width, marginBottom: 5 }}>
        <Grid>
          <Col size={2} style={{ alignContent: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 16, color: '#8D8C8C', fontWeight: 'bold' }}>{Strings.STWELCOME} {nombre} {apellido} </Text>
            <Text style={{ fontSize: 24, color: '#E4C07E', fontWeight: 'bold' }}>{Strings.ST5}</Text>

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
      
      <Vimeo
        videoId={'439674617'}
        params={'api=1&autoplay=0'}
        handlers={videoCallbacks}
        style={{width:300, height:300, borderRadius: 30, marginLeft: 50}}
      />

      <Grid style={{ marginHorizontal: 30 }}>
        <Col>
          <Text>Entrena al maximo </Text>
        </Col>
        <Col style={{ alignItems: 'flex-end' }}>
          <Text>Mira todos aqui </Text>
        </Col>
      </Grid>
      <Ejercicio/>
      <EjercicioVideos/>
    </ScrollView>

  </View>
  )
}

export default Entrenamiento