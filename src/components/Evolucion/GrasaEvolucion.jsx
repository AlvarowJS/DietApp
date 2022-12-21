import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
import axios from 'axios';

const GrasaEvolucion = ({ GrasaEv }) => {
    const [labelData, setLabelData] = useState([])
    const [evoData, setEvoData] = useState([])

    let getId = GrasaEv == undefined ? null : GrasaEv?.id

    useEffect(() => {


        axios.get(`http://dietservice.bitjoins.pe/api/evolucion/${getId}`)
            .then(resp => {
                // setEvolPeso(resp?.data.data)
                let evoNuevaData = resp.data.data

                const nuevoArray = evoNuevaData.map(e => parseInt(e?.p_grasa))
                const nuevoLabel = evoNuevaData.map(x => parseInt(x?.fecha.slice(5, 7)) - 1)
                const converLabel = nuevoLabel.map(function (y) {
                    const fechas = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Set', 'Oct', 'Nov', 'Dic']
                    return fechas[y]
                })
                setEvoData(nuevoArray)
                setLabelData(converLabel)
            })

    }, [])
    
    return (
        <View style={{marginHorizontal: 20}}>
            {labelData.length != 0 && evoData.length != 0?
            <LineChart
                data={{
                    labels: labelData,
                    // labels: ['Ene', 'Feb','Mar','Abr','May','Jun'],
                    datasets: [
                        {
                            // data: [
                            //     Math.random() * 100,
                            //     Math.random() * 100,
                            //     Math.random() * 100,
                            //     Math.random() * 100,
                            //     Math.random() * 100,
                            //     Math.random() * 100
                            // ]
                            data: evoData
                        }
                    ]
                }}
                width={Dimensions.get("window").width} // from react-native
                height={220}

                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                    backgroundColor: "#E5B359",
                    backgroundGradientFrom: "#E5B359",
                    backgroundGradientTo: "#E5B359",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "4",
                        stroke: "#E46960"
                    }
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16
                }}
            />
            : null}
        </View>
    )
}
const styles = StyleSheet.create({
    peso: {
        marginLeft: 30
    }

})
export default GrasaEvolucion