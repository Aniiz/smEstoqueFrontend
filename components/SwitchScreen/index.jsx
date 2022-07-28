import {ScrollView} from 'react-native';
import { style } from './style';

export default ({conteudo}) => (
  <ScrollView style={style.switchscreen}>{conteudo}</ScrollView>
);