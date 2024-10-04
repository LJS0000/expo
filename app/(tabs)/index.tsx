import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function Index() {
  return (
    <View style={style.container}>
      <View style={style.city}>
        <Text style={style.cityName}>Seoul</Text>
      </View>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={style.weather}
      >
        <View style={style.day}>
          <Text style={style.temp}>13</Text>
          <Text style={style.description}>Sunny</Text>
        </View>
        <View style={style.day}>
          <Text style={style.temp}>13</Text>
          <Text style={style.description}>Sunny</Text>
        </View>
        <View style={style.day}>
          <Text style={style.temp}>13</Text>
          <Text style={style.description}>Sunny</Text>
        </View>
        <View style={style.day}>
          <Text style={style.temp}>13</Text>
          <Text style={style.description}>Sunny</Text>
        </View>
        <View style={style.day}>
          <Text style={style.temp}>13</Text>
          <Text style={style.description}>Sunny</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
  },
  city: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cityName: {
    fontSize: 68,
    fontWeight: '500',
  },
  weather: {},
  day: {
    width: SCREEN_WIDTH,
    alignItems: 'center',
  },
  temp: {
    marginTop: 50,
    fontSize: 178,
  },
  description: {
    marginTop: -30,
    fontSize: 60,
  },
});
