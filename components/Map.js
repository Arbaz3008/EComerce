import { StyleSheet, View, Dimensions } from 'react-native';
import { useState } from 'react';
import React from 'react';
import MapView, { Marker } from 'react-native-maps';

const Map = () => {
  const [region, setRegion] = useState({
    latitude: 37.78825, // Default latitude
    longitude: -122.4324, // Default longitude
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={region}
        onRegionChangeComplete={(newRegion) => setRegion(newRegion)} // Capture region change
      >
        <Marker coordinate={region} />
      </MapView>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Add background color to fill space if required
  },
  map: {
    flex: 1, // Ensures map takes up full available space
    height: Dimensions.get('window').height, // Dynamically sets height based on the screen size
  },
});
