import { ScrollView, View } from 'react-native';
import render from 'react-native-web/dist/cjs/exports/render';
import { style } from './style';

export default ({conteudo, hist}) => {
  let render;
  hist ? 
    render = (
      <ScrollView style={style.switchscreen}>
        {conteudo}
        <View style={style.rodape} />
      </ScrollView> )
    : 
    render = (
      <ScrollView style={style.switchscreen}>{conteudo}</ScrollView> )
 
  return render;
};