import {Title} from '../../components/ui/Title';
import {CustomView} from '../../components/ui/CustomView';
import {ScrollView} from 'react-native-gesture-handler';
import {RefreshControl} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useState} from 'react';
import {colors} from '../../../config/theme/theme';

export const PullToRefreshScreen = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const {top} = useSafeAreaInsets();

  const onRefresh = () => {
    setIsRefreshing(true);

    setTimeout(() => {
      setIsRefreshing(false);
    }, 5000);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          progressViewOffset={top}
          refreshing={isRefreshing}
          colors={[colors.primary, 'red', 'orange', 'green']}
          onRefresh={onRefresh}
        />
      }>
      <CustomView margin>
        <Title text="PullToRefreshScreen" safe />
      </CustomView>
    </ScrollView>
  );
};
