import React, {useRef} from 'react';
import { Text, View, TouchableOpacity , ScrollView } from 'react-native';
import { styles, screenWidth } from './style';


export default function () { 
    
    const scrollref = useRef()

    return(<View>
        
        <View style={styles.barchildrenbottom} >        
            <TouchableOpacity onPress={() => scrollref.current.scrollTo({x:0})} 
                style={styles.barchildrenbottombuttom} >

                <Text style={[styles.textaling, styles.text, {letterSpacing: 2.4}]}>Produtos</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => scrollref.current.scrollTo({x:screenWidth})}
            style={styles.barchildrenbottombuttom} >
                <Text  style={[styles.textaling, styles.text, {letterSpacing: 2.4}]}>Histórico</Text>
            </TouchableOpacity>
        </View>   

            
        <ScrollView 
            horizontal={true} 
            pagingEnabled={true} 
            showsHorizontalScrollIndicator={false}
            decelerationRate={0.99}
            ref={scrollref}>
            
            <View style={styles.switchscreen}>
                <Text style={{fontSize:20, padding:15,color:'black',textAlign:'center',}}>Produtos</Text>
            </View>
            
            <View style={styles.switchscreen}>
                <Text style={{fontSize:20, padding:15,color:'black',textAlign:'center'}}>Histórico</Text>
            </View>

        </ScrollView>

    </View>)
};
