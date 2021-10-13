import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {ILGetStarted, ILLogo} from '../../assets';
import {Button, Gap} from '../../components';
<<<<<<< HEAD
import {colors, fonts} from '../../utils';

function GetStarted({navigation}) {
=======

function GetStarted() {
>>>>>>> 20a98ddac87308b684aa0a142bf1acb470177752
  return (
    <ImageBackground source={ILGetStarted} style={styles.page}>
      <View>
        <ILLogo />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
<<<<<<< HEAD
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('Register')}
        />
        <Gap height={16} />
        <Button
          type="secondary"
          title="Sign In"
          onPress={() => navigation.navigate('Login')}
        />
=======
        <Button title="Get Started" />
        <Gap height={16} />
        <Button type="secondary" title="Sign In" />
>>>>>>> 20a98ddac87308b684aa0a142bf1acb470177752
      </View>
    </ImageBackground>
  );
}

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 28,
    fontFamily: fonts.primary[600],
    color: colors.white,
    marginTop: 91,
  },
});
