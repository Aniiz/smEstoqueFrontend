import { Text, View } from 'react-native';
import BarraPesquisa from '../BarraPesquisa';
import { style } from './style';

export default ({val, eventChange, eventPress}) => (
    <View style={style.container}>
        <View style={style.row}>
            <Text style={style.textaling}> smEstoque </Text>
            <BarraPesquisa 
                val={val}
                eventChange={eventChange}
                eventPress={eventPress}
            />
        </View>
    </View>
);