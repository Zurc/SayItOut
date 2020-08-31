import React, { useState, useContext } from 'react';
import { Context as PhraseContext } from '../context/PhraseContext';
import { View, FlatList, Dimensions } from 'react-native';
import s from '../css/styles';
import Card from '../components/Card';
import { Data } from '../assets/cardsPng/index';
import { TouchableOpacity } from 'react-native-gesture-handler';



const CardsGrid = () => {
    const screenWidth= Dimensions.get("window").width;
    const [column, setColumn] = useState(parseInt(screenWidth/(s.image.width+10),10))
    const { showPhrase } = useContext(PhraseContext);

    const onLayout = (event) =>{
        setColumn(parseInt(event.nativeEvent.layout.width/(s.image.width+10),10))
    };

    return (
        <View  style={{alignItems:'center'}} onLayout={onLayout} >
             <FlatList
                data={Data}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => showPhrase(item.name)}>
                        <Card item={item} />
                    </TouchableOpacity>  
                )}
                keyExtractor={item => item.name}
                numColumns={column}
                key={column}
                
            /> 
        </View>
    )
};

export default CardsGrid;