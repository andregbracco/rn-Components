import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {Button} from '../../components/ui/Button';
import {ThemeContext} from '../../context/ThemeContext';
import {useContext} from 'react';
import {Text, View} from 'react-native';

export const ChangeThemeScreen = () => {
  const {setTheme, currentTheme, colors} = useContext(ThemeContext);
  return (
    <CustomView margin>
      <Title text={`Cambiar tema: ${currentTheme}`} safe />
      <Button text="Light" onPress={() => setTheme('light')} />
      <View style={{marginVertical: 5}} />
      <Button text="Dark" onPress={() => setTheme('dark')} />
      <View style={{marginVertical: 20}} />

      <Text style={{color: colors.text}}>
        {JSON.stringify(colors, null, 2)}
      </Text>
    </CustomView>
  );
};