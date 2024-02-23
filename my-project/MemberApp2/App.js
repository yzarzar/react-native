import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import HomeScreen from './components/HomeScreen';
import { MemberScreen } from './components/MemberScreen';

const HomeRoute = () => (
  <HomeScreen style={{ }} />
);

const MemberRout = () => (
  <MemberScreen style={{ }} />
);

const renderScene = SceneMap({
  first: HomeRoute,
  second: MemberRout,
});

export default function App() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Home' },
    { key: 'second', title: 'Member' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      style={{paddingTop: 15}}
    />
  );
}


