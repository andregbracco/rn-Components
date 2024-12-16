import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Animated,
  Easing,
} from 'react-native';
import {colors} from '../../../config/theme/theme';
import {useAnimation} from '../../hooks/useAnimation';

export const Animation101Screen = () => {
  const {
    animatedOpacity,
    startMovingTopPosition,
    animatedTop,
    fadeIn,
    fadeOut,
  } = useAnimation();
  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.purpleBox,
          {
            opacity: animatedOpacity,
            transform: [
              {
                translateY: animatedTop,
              },
            ],
          },
        ]}
      />
      <Pressable
        style={{marginTop: 10}}
        onPress={() => {
          fadeIn({});
          startMovingTopPosition({
            initialPosition: -100,
            easing: Easing.elastic(1),
            duration: 850,
          });
        }}>
        <Text>FadeIn</Text>
      </Pressable>
      <Pressable style={{marginTop: 10}} onPress={() => fadeOut({})}>
        <Text>FadeOut</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  purpleBox: {
    backgroundColor: colors.primary,
    width: 150,
    height: 150,
  },
});
