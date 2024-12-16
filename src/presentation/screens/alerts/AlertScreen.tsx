import {Alert} from 'react-native';
import {globalStyles} from '../../../config/theme/theme';
import {Button} from '../../components/ui/Button';
import {CustomView} from '../../components/ui/CustomView';
import {Separator} from '../../components/ui/Separator';
import {Title} from '../../components/ui/Title';
import {showPrompt} from '../../../config/adapters/prompt.adapter';

export const AlertScreen = () => {
  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  const onShowPrompt = () => {
    showPrompt({
      title: 'titulo',
      subtitle: 'subtitulo',
      buttons: [{text: 'ok', onPress: () => console.log('ok')}],
      placeholder: 'placeholder',
    });
  };
  return (
    <CustomView style={globalStyles.globalMargin}>
      <Title text="Alertas" safe />
      <Button text="Alerta - 2 Botones" onPress={createTwoButtonAlert} />
      <Separator />
      <Button text="Alerta - 3 Botones" onPress={createThreeButtonAlert} />
      <Separator />
      <Button text="Propmt - Input" onPress={onShowPrompt} />
    </CustomView>
  );
};
