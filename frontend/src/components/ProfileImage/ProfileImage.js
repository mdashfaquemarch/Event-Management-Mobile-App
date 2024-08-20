import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const ProfileImage = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/profile.jpg")} // Replace with actual image URL
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

export default ProfileImage;
