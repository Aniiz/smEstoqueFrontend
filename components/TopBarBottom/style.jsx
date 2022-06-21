import { StyleSheet, Dimensions} from 'react-native';

export const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

export const styles = StyleSheet.create({
  barchildrenbottom: {
    width: '100%',
    height: 60,
    backgroundColor: "#3D5A95",
    display:'flex',
    flexWrap:'wrap'
  },
  barchildrenbottombuttom: {
      width: '50%',
      alignItems: 'center'
  },
  textaling: {
    textAlignVertical: 'center',  
    height: '100%',
  },
  text: {
    fontFamily: 'Roboto',
    color: 'white',
    fontSize: 20,
  },
  switchscreen: {
    backgroundColor: 'white',
    width: screenWidth, 
    flex:1, 
    height: screenHeight-140,
  },
});