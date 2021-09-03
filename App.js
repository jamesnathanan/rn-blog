import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { BlogProvider } from './src/context/BlogContext';
import IndexScreen from './src/screens/IndexScreen';

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Fuck U Expo Screw U',
    },
  }
);

const App = createAppContainer(navigator);

export default function Component() {
  return <BlogProvider>
    <App />
  </BlogProvider>
};

// export default () => {
//   return <App />;
// };
