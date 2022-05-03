import { View, Text, StyleSheet } from 'react-native';

const Subtitle = ({ children }) => {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subTitleContainer: {
    padding: 6,
    borderBottomColor: '#e2b947',
    borderBottomWidth: 2,
    marginHorizontal: 12,
    marginVertical: 4,
  },
  subTitle: {
    color: '#e2b947',
    fontSize: 18,
    fontWeight: 'bold',
    margin: 4,
    textAlign: 'center',
  },
});
