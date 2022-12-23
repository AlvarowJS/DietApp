import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import evolucionBD from '../../api/evolucionBD'
import Pie from 'react-native-pie'
import axios from 'axios'

const Nutricion = ({ EstadoGlobal }) => {

    
    const [evoActual, setEvoActual] = useState([])  
    useEffect(() => {
        
        evolucionBD.get(`${EstadoGlobal?.id}`)
            .then(resp => {               
                setEvoActual(resp.data.data[(resp.data.data).length -1])
            })
    }, [])

    
    return (
        <View style={styles.container}>

            {evoActual.length != 0 ?
            <View style={{ marginLeft: 10, alignItems: 'center' }}>
                <Text>Grasa</Text>
                <Pie
                    radius={50}
                    innerRadius={40}
                    sections={[
                        {
                            percentage: parseInt(evoActual?.p_grasa),
                            color: '#E5B359',
                        },
                    ]}
                    backgroundColor="#ddd"
                />
                <View
                    style={styles.gauge}
                >
                    <Text
                        style={styles.gaugeText}
                    >
                        {evoActual?.p_grasa} %
                        {/* 40 % */}
                    </Text>
                </View>
                <Text style={styles.pie}>GRASA IDEAL: {EstadoGlobal.persona_id.p_grasa_ideal}</Text>
            </View>
        : null}

            {evoActual.length != 0 ?
            <View style={{ marginLeft: 10, alignItems: 'center' }}>
                <Text>IMC</Text>
                <Pie
                    radius={50}
                    innerRadius={40}
                    sections={[
                        {
                            percentage: parseInt(evoActual?.p_grasa),
                            
                            color: '#24AC90',
                        },
                    ]}
                    backgroundColor="#ddd"
                />
                <View
                    style={styles.gauge}
                >
                    <Text
                        style={styles.gaugeText}
                    >
                        {evoActual?.imc} %
                        {/* 40% */}
                    </Text>
                </View>
                <Text style={styles.pie}>IMC ACTUAL: {(evoActual.peso / Math.pow(EstadoGlobal.persona_id.talla/100, 2)).toFixed(2)}</Text>
            </View>
            : null}

            {evoActual.length != 0 ?
            <View style={{ marginLeft: 10, alignItems: 'center' }}>
                <Text>Masa Muscular</Text>
                <Pie
                    radius={50}
                    innerRadius={40}
                    sections={[
                        {
                            percentage: parseInt(evoActual?.p_masa),
                            
                            color: '#E46960',
                        },
                    ]}
                    backgroundColor="#ddd"
                />
                <View
                    style={styles.gauge}
                >
                    <Text
                        style={styles.gaugeText}
                    >
                        {evoActual?.p_masa} %
                        {/* 40% */}
                    </Text>
                </View>
                <Text style={styles.pie}>PORCENTAJE IDEAL: {EstadoGlobal.persona_id.p_masa_muscular}</Text>
            </View>
            : null}



        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F4F5FA',
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 20,

    },
    pie: {
        fontSize: 8,
        marginTop: 5,
        fontWeight: 'bold'
    },
    gauge: {
        position: 'absolute',
        width: 90,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    gaugeText: {
        backgroundColor: 'transparent',
        color: '#000',
        fontSize: 13,
    },
})

export default Nutricion