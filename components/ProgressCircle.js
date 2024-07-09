import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const ProgressCircle = ({ units, progress }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const progressAngle = progress * 360;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: progressAngle,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [progressAngle]);

  const firstHalfAngle = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
    extrapolate: 'clamp',
  });

  const secondHalfAngle = animatedValue.interpolate({
    inputRange: [180, 360],
    outputRange: ['0deg', '180deg'],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.circleContainer}>
      <View style={styles.outerCircle}>
        <Animated.View
          style={[
            styles.halfCircle,
            {
              transform: [{ rotate: firstHalfAngle }],
              borderTopColor: 'red',
            },
          ]}
        />
        {progressAngle > 180 && (
          <Animated.View
            style={[
              styles.halfCircle,
              {
                transform: [{ rotate: secondHalfAngle }],
                borderTopColor: 'red',
                zIndex: 0,
              },
            ]}
          />
        )}
        <View style={styles.innerCircle}>
          <Text style={styles.circleText}>{units}</Text>
          <Text style={styles.circleSubText}>Average Units</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  circleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 50,
  },
  outerCircle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 10,
    borderColor: '#e6e6e6',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  innerCircle: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 3,
  },
  halfCircle: {
    width: 200,
    height: 100,
    position: 'absolute',
    top: 0,
    left: 0,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderWidth: 10,
    borderTopWidth: 10,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 0,
    borderColor: 'transparent',
    zIndex: 1,
  },
  circleText: {
    fontSize: 48,
    color: 'gold',
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%',
  },
  circleSubText: {
    fontSize: 18,
    color: 'gray',
    textAlign: 'center',
    width: '100%',
  },
});

export default ProgressCircle;
