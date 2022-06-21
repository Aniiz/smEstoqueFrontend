import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerLogin: {
    alignItems: 'center',
  },

  hearderStyle: {
    backgroundColor: "#3D5A95",
  },
  headerTintColor: "#fff",
  flashMessage: {
    marginTop: 20,
    padding: 20
  },
  titleapp: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#4d4d4d",
    marginBottom: 40    
  }
});

export const styles_home = StyleSheet.create({
  container:{
    width: '100%',
    height: '50%',
  }
})

