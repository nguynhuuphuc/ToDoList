import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 10,
    flex: 1,
    backgroundColor: '#eff2f3',
  },
  title: {
    color: '#569edb',
    fontSize: 24,
    fontWeight: '500',
  },
  task: {
    marginTop: 8,
    marginBottom: 8,
    paddingTop: 18,
    paddingBottom: 18,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: 'white',
    borderRadius: 16,
    borderColor: '#CCC',
    borderWidth: 1,
  },
  textColor: {
    color: '#292929',
  },
  mr8: {
    marginRight: 8,
  },
  ml8: {
    marginLeft: 8,
  },
  mt32: {
    marginTop: 32,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
