import { Button, View, Text, Dimensions, ScrollView, TouchableOpacity, Image } from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";
import React from 'react'
import Strings from '../../utils/Strings';
import Ionicons from 'react-native-vector-icons/Ionicons';
var styles = require('../../../assets/files/Styles');

const Consejos = ({ navigation }) => {
  return (
    <View style={{ marginTop: 30 }}>
      <ScrollView >
        <View style={styles.headersContainer}>
          <Grid>
            <Col size={2} style={{ alignContent: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 16, color: '#8D8C8C', fontWeight: 'bold' }}>{Strings.STWELCOME} {Strings.STUSER} </Text>
              <Text style={{ fontSize: 24, color: '#E4C07E', fontWeight: 'bold' }}>{Strings.ST4}</Text>

            </Col>
            <Col style={{ alignItems: 'flex-end', alignContent: 'flex-end', justifyContent: 'flex-end' }}>
              <Grid>
                <TouchableOpacity activeOpacity={1}>
                  <Ionicons name="search" style={{ fontSize: 27, color: '#AAA9A9', marginRight: 5 }} />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={1}>
                  <Ionicons name="menu" onPress={() => navigation.openDrawer()} style={styles.headerMenu} />
                </TouchableOpacity>
              </Grid>
            </Col>
          </Grid>
        </View>
        <View>
          
          <Text>Pautas Generales</Text>
          <Text>La ingesta de Intermedios es importante porque favorece la adaptación al nuevo plan de alimentación (NO OMITIR NINGUNA COMIDA). No pasar más de 3 o 4 horas sin comer porque favorecerá la descompensación de los niveles de azúcar en sangre y por ende de la insulinas</Text>
        </View>
        <View>
          <Text>Alimentos Permitidos</Text>
          <Text>La ingesta de Intermedios es importante porque favorece la adaptación al nuevo plan de alimentación (NO OMITIR NINGUNA COMIDA). No pasar más de 3 o 4 horas sin comer porque favorecerá la descompensación de los niveles de azúcar en sangre y por ende de la insulinas</Text>
        </View>
        <View>
          <Text>Prohibidos (Consumo mensual)</Text>
          <Text>La ingesta de Intermedios es importante porque favorece la adaptación al nuevo plan de alimentación (NO OMITIR NINGUNA COMIDA). No pasar más de 3 o 4 horas sin comer porque favorecerá la descompensación de los niveles de azúcar en sangre y por ende de la insulinas</Text>
        </View>
        <View>
          <Text>No Olvidar</Text>
          <Text>La ingesta de Intermedios es importante porque favorece la adaptación al nuevo plan de alimentación (NO OMITIR NINGUNA COMIDA). No pasar más de 3 o 4 horas sin comer porque favorecerá la descompensación de los niveles de azúcar en sangre y por ende de la insulinas</Text>
        </View>

      </ScrollView>
    </View>
  )
}

export default Consejos