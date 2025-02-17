import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import color from '../../commons/colors';
import CommonButton from '../../components/commonButton';
import HeadingText from '../../components/login/headingText';
import {
  BackgroundImage,
  DoctorImage03,
  TopRightCircleImage,
} from '../../assets/index';
const OnBoardingScreen03 = ({navigation}) => {
  const handleSubmit = () => {
    navigation.navigate('signUpScreen');
  };
  return (
    <ImageBackground source={BackgroundImage}>
      <ScrollView>
        <Image style={styles.firstImage} source={TopRightCircleImage} />
        <View style={styles.drImgBox}>
          <Image style={styles.drImg} source={DoctorImage03} />
        </View>
        <View style={styles.textBox}>
          <HeadingText
            heading="Easy Appointments"
            contain=" Contrary to popular belief, Lorem Ipsum is not simply random text.
          It has roots in a piece of it over 2000 years old."
          />
        </View>
        <View style={styles.box}>
          <CommonButton btnText="Get Started" handleSubmit={handleSubmit} />

          <Text
            onPress={() => {
              navigation.navigate('drawerNavigation');
            }}
            style={styles.skip}>
            Skip
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

OnBoardingScreen03.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  firstImage: {
    height: 300,
    width: 250,
  },
  drImgBox: {
    height: 500,
    justifyContent: 'center',
    position: 'absolute',
    marginLeft: 20,
  },
  drImg: {
    width: 336,
    height: 336,
  },
  textBox: {
    marginTop: 60,
    height: 330,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  skip: {
    color: color.containTextColor,
    marginTop: 15,
    height: 20,
    textAlign: 'center',
  },
  bg: {
    height: 216,
    width: 216,
    position: 'absolute',
    alignSelf: 'flex-end',
    bottom: 0,
    zIndex: -1,
  },
  box: {
    alignSelf: 'center',
    justifyContent: 'flex-start',
  },
});
export default OnBoardingScreen03;
