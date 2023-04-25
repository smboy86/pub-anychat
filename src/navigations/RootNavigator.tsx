import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import LoginNavigator from './LoginNavigator';
import {useTempStore} from 'store/store';
import MainNavigator from './MainNavigator';

export default function RootNavigator() {
  const {isLogin} = useTempStore(state => state);
  const [isAppLoading, setIsAppLoading] = React.useState(true);

  React.useEffect(() => {
    const appLoad = async () => {
      try {
      } catch (e) {
        console.log('RootNavigator error ::: ', e);
      } finally {
        setIsAppLoading(false); // 1) 앱 로딩
      }
    };
    appLoad();
  }, [isAppLoading]);

  if (isAppLoading) {
    return null;
  }

  return (
    <NavigationContainer>
      {!isLogin ? <LoginNavigator /> : <MainNavigator />}
    </NavigationContainer>
  );
}
