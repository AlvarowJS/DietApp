import { Button, View, Text, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";
import React from 'react'
import Strings from '../utils/Strings';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

var styles = require('../../assets/files/Styles');

const Dashboard = ({navigation}) => {
  return (
    <ScrollView>
        <View style={styles.headersContainer}>
          <Grid>
            <Col size={2} style={{ alignContent: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 16, color: '#8D8C8C', fontWeight: 'bold' }}>{Strings.STWELCOME} {Strings.STUSER} </Text>
              <Text style={{ fontSize: 24, color: '#E4C07E', fontWeight: 'bold' }}>{Strings.ST2}</Text>

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
        <View style={styles.headersContainer}>
          <View style={{ flex: 2, flexDirection: 'row' }}>
            <SimpleLineIcons name="heart" style={styles.iconDashboard} />
            <Text>Evolución nutricional</Text>
          </View>
          
          <View style={{ flex: 2, flexDirection: 'row' }}>
            <FontAwesome5 name="weight" style={styles.iconDashboard} />
            <Text>Evolución de su peso</Text>
          </View>
          
          <View style={{ flex: 2, flexDirection: 'row' }}>
            <Ionicons name="fast-food-outline" style={styles.iconDashboard} />
            <Text>Plan del día</Text>      
          </View>
          
        </View>
      </ScrollView>
  )
}

export default Dashboard