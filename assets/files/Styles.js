'use strict';

import { Dimensions } from "react-native";
import { Row } from "react-native-easy-grid";
var React = require('react-native');
var { StyleSheet } = React;
var { height, width } = Dimensions.get('window');
module.exports = StyleSheet.create({


  background_general: {
    backgroundColor: '#F4F5FA',
    flex: 1
  },
  girl_start: {
    // position: 'absolute',
    width: 300,
    height: 300,
    marginTop: 0,
    zIndex: -1,
    elevation: -1,
    marginBottom: 50
  },
  inputLogin: {

    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    width: width * 0.80,
    shadowRadius: 5,
    marginBottom: 20,
    paddingLeft: 40,
    borderColor: '#a4a4a4',
    color: '#a4a4a4'

  },
  logo_start: {
    position: 'absolute',
    width: 150,
    height: 150,
    top: 220,
    zIndex: 1,
    elevation: 1
  },
  text_auth: {
    backgroundColor: 'transparent',
    textAlign: 'center',
    maxWidth: 300,
    minWidth: 300,
    marginTop: 5,
    marginBottom: 20,
    fontSize: 13,
    color: '#E5B359',
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
    shadowOffset: {
      width: 0,
      height: 0
    }
  },
  ingresar_button: {
    backgroundColor: '#E5B359',
    color: 'white',
    padding: 8,
    fontSize: 17,
    paddingHorizontal: 140,
    borderRadius: 14
  },
  register: {
    marginTop: 20,
    color: '#BBBBBD',
  },
  container_menu: {
    backgroundColor: '#24AC90'
  },
  sideMenu: {
    backgroundColor: '#24AC90',
    height: '100%',
    paddingHorizontal: 30,

  },
  // Estilos para la cabecera
  headersContainer: {
    paddingTop: 10, 
    paddingHorizontal: 30, 
    width: width, 
    marginBottom: 5
  },
  headerMenu: {
    fontSize: 27, 
    color: 'white', 
    backgroundColor: '#DCAC55', 
    borderRadius: 30
  },
  headerButtons: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'flex-end', 
    alignContent: 'flex-end', 
    justifyContent: 'flex-end'
  },


  item_menu: {
    flex: 2,
    flexDirection: 'row',    
    borderBottomWidth: 0,
    borderBottomColor: '#FFFFFF',
    marginLeft: 0,
    paddingLeft: 0,
    
  },
  text_menu: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    paddingLeft: 20
  },
  iconSidemenu: {
    color: 'white',
    fontSize: 25,
    paddingLeft: 5

  },
  iconSidemenuLogout: {
    color: 'white',
    fontSize: 25    

  },
  logout: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 160, 
    paddingTop: 20, 
    borderTopWidth: 1, 
    borderColor: 'white'
  },

  iconDashboard: {
    fontSize: 15, 
    color: 'white', 
    backgroundColor: '#DCAC55',
    padding: 5, 
    borderRadius: 30,
    marginRight: 10
  },
  manRun: {
    width: 350,
    height: 380,
    borderRadius: 50,
    marginLeft: 30,
    marginBottom: 10,
    

  },
  evolucionDatos: {
    flex: 2,
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 20,
    backgroundColor: '#DCAC55',
    
  },
  evolucionIcon: {
    marginRight: 30
  },
  evolucionMonit: {
    marginTop: 275,
    color: 'white',
    padding: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  planRutina: {
    backgroundColor: '#DCAC55',
    marginHorizontal: 30,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 15

  },
  chefDetalle: {
    width: 300, 
    marginBottom: 20,
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 40,
    backgroundColor: '#F0F0F0'
  },
  platoDetalleNombre: {
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 10
  },
  platoDetalle: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  platoDetalleLinea: {
    borderRightWidth: 1, 
    paddingRight: 35, 
    borderColor: '#D6CFCF'
  },
  platoDetalleCaracteriticasNegrita: {    
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 10
  }


})

