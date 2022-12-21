import { Button, View, Text, Dimensions, ScrollView, TouchableOpacity, Image, ImageBackground } from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";
import React, { useEffect, useState } from 'react'
import Strings from '../utils/Strings';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
var { height, width } = Dimensions.get('window');
var styles = require('../../assets/files/Styles');
import LinearGradient from 'react-native-linear-gradient';
import EvolucionTratamiento from '../components/Evolucion/EvolucionTratamiento';
import GrasaEvolucion from '../components/Evolucion/GrasaEvolucion';
import PesoEvolucion from '../components/Evolucion/PesoEvolucion';
import ImcEvolucion from '../components/Evolucion/ImcEvolucion';
const Evolucion = ({ navigation }) => {
  
  const [registroControl, setRegistroControl] = useState(false)
  const [pesoControl, setPesoControl] = useState(false)
  const [imcControl, setImcControl] = useState(false)
  const [grasaControl, setGrasaControl] = useState(false)
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  useEffect(() => {
    setNombre(global.Id.persona_id.nombre)
    setApellido(global.Id.persona_id.apellido)
  }, [])
  return (
    <View style={{backgroundColor: 'white'}}>

    <ScrollView>
      <View style={{ paddingTop: 45, paddingHorizontal: 30, width: width, marginBottom: 5 }}>
        <Grid>
          <Col size={2} style={{ alignContent: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 16, color: '#8D8C8C', fontWeight: 'bold' }}>{Strings.STWELCOME} {nombre} {apellido} </Text>
            <Text style={{ fontSize: 24, color: '#E4C07E', fontWeight: 'bold' }}>{Strings.ST3}</Text>

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

      <ImageBackground source={require('../../assets/images/man_run.png')} style={styles.man_run} imageStyle={{ borderRadius: 30 }}>
        <LinearGradient colors={['rgba(50,170,150,0.5)', 'rgba(rgba(50,170,150,0.5)']} style={styles.evolucionMonit} >
          <Text style={{ color: 'white', fontSize: 20 }}>Monitoreo tu progreso</Text>
          <Text style={{ color: 'white' }}>Consulta todo tu historial aqui</Text>
        </LinearGradient>
      </ImageBackground>

      <TouchableOpacity style={styles.evolucionDatos} onPress={() => setRegistroControl(!registroControl)}>
        <View style={{ marginRight: 30 }}>
          <AntDesign name='wechat' style={{ fontSize: 30, color: 'white' }} />
        </View>
        <View>
          <Text style={{ fontSize: 20, color: 'white' }}>Registro de controles</Text>
          <Text style={{ fontSize: 15, color: 'white' }}>Sigue todas tus actividades</Text>
        </View>
      </TouchableOpacity>
      {registroControl ? (<EvolucionTratamiento EvolucionP={global.Id}/>) : null}
      
      <TouchableOpacity style={styles.evolucionDatos} onPress={() => setPesoControl(!pesoControl)}>
        <View style={{ marginRight: 30 }}>
          <FontAwesome5 name='weight' style={{ fontSize: 30, color: 'white' }} />
        </View>
        <View>
          <Text style={{ fontSize: 20, color: 'white' }}>Peso</Text>
          <Text style={{ fontSize: 15, color: 'white' }}>Historial de su peso</Text>
        </View>
      </TouchableOpacity>
      {pesoControl ? (<PesoEvolucion PesoEv = {global.Id}/>) : null}
      <TouchableOpacity style={styles.evolucionDatos} onPress={() => setImcControl(!imcControl)}>
        <View style={{ marginRight: 30 }}>
          <MaterialCommunityIcons name='heart-pulse' style={{ fontSize: 30, color: 'white' }} />
        </View>
        <View>
          <Text style={{ fontSize: 20, color: 'white' }}>IMC</Text>
          <Text style={{ fontSize: 15, color: 'white' }}>Indice de masa corporal</Text>
        </View>
      </TouchableOpacity>
      {imcControl ? (<ImcEvolucion ImcEv = {global.Id}/>) : null}
      <TouchableOpacity style={styles.evolucionDatos} onPress={() => setGrasaControl(!grasaControl)}>
        <View style={{ marginRight: 30 }}>
          <MaterialCommunityIcons name='human-handsup' style={{ fontSize: 30, color: 'white' }} />
        </View>
        <View>
          <Text style={{ fontSize: 20, color: 'white' }}>Grasa</Text>
          <Text style={{ fontSize: 15, color: 'white' }}>Indice de porcentaje de grasa</Text>
        </View>
      </TouchableOpacity>
      
      {grasaControl ? (<GrasaEvolucion GrasaEv = {global.Id}/>) : null}
    </ScrollView>
  </View>
  )
}

export default Evolucion