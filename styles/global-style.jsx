import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
export const colors = { blue: '#3D5A95', gray: '#B8B8B8' }

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: width,
    height: height,
  },
  containerCentralize: {
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 'auto'
  },
  containerwhitepages: {
    width: '100%',
    minHeight: height,
    paddingLeft: '10%',
    paddingRight: '10%',
  },
  containerwhitepagesbuttons: {
    flexDirection: 'row',
    maxHeight: 50,
    width: '100%',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  containerRow: {
    flexDirection: 'row',
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
    marginBottom: 40,
  },
  switchButtons: {
    width: '100%',
    height: 60,
    backgroundColor: colors.blue,
    display: 'flex',
    flexWrap: 'wrap'
  },
  containerscroll: {
    height: '100%',
    width: '100%',
  },
  center: {
    width,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto'
  }
});