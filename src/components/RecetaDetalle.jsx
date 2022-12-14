import { View, Text, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import { Grid } from 'react-native-easy-grid';
var styles = require('../../assets/files/Styles');
import recetarioBD from '../api/recetarioBD'
const RecetaDetalle = (props) => {
    const [recipe, setRecipe] = useState()
    let ByIdReceta = props.route.params
    useEffect(() => {                    
            setRecipe(ByIdReceta)            
    }, [])
    
    
    let repRecipe = 'https://intranet.dietservice.pe/appdiet/images/';
    return (
        <View style={{backgroundColor: 'white'}}>
            <ScrollView>
                <Image source={{ uri: repRecipe + recipe?.recipe_image}}
                    style={{ width: '100%', height: 350 }} />
                <View style={{ marginTop: 20, marginHorizontal: 25 }}>
                    <Text style={{ fontSize: 30, color: '#040404',fontWeight: 'bold'}}>{recipe?.recipe_title}</Text>
                    <Text>{recipe?.recipe_description}</Text>
                    <View style={{ marginTop: 20, flex: 2, flexDirection: 'row', alignContent: 'center',flexWrap: "wrap", marginBottom: 30}}>
                        <Entypo name='back-in-time' style={{ fontSize: 40, color: '#E5B45B', marginRight:5}}/>
                        <View style={{marginRight: 50,  marginBottom: 20}}>
                            <Text>Tiempo</Text>
                            <Text style={{ color: '#040404'}}>{recipe?.recipe_time} minutos</Text>
                        </View>
                        <SimpleLineIcons name='pie-chart' style={{ fontSize: 40, color: '#E5B45B', marginRight:5}}/>
                        <View style={{marginRight: 50,  marginBottom: 20}}>
                            <Text>Porciones</Text>
                            <Text style={{ color: '#040404'}}>{recipe?.recipe_servings}</Text>
                        </View>
                        
                        <SimpleLineIcons name='fire' style={{ fontSize: 40, color: '#E5B45B', marginRight:5}}/>
                        <View>
                            <Text>Calorias</Text>
                            <Text style={{ color: '#040404'}}>{recipe?.recipe_cals} kcal</Text>
                        </View>
                    </View>
                    <View style={{marginTop: 20, borderTopWidth: 1, borderColor: '#F0F0F0'}}>
                        <Text style={{fontSize: 30,fontWeight: 'bold', marginTop: 20}}>Ingredientes</Text>
                        <Text>{recipe?.recipe_ingredients}</Text>
                    </View>
                    <View style={{marginTop: 20}}>
                        <Text style={{fontSize: 30,fontWeight: 'bold'}}>Intrucciones</Text>
                        <Text>{recipe?.recipe_directions}</Text>
                    </View>

                </View>
            </ScrollView>
        </View>
    )
}

export default RecetaDetalle