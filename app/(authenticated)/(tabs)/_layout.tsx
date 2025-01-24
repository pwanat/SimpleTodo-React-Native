import { FontAwesome } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

const TabLayout = () => {
  return (
      <Tabs
      
      >
        <Tabs.Screen
          name="today"
          options={{
            title: "Today",
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
            headerShown: false
          }}
        />
        <Tabs.Screen
          name="upcoming"
          options={{
            title: "Upcoming",
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="calendar" color={color} />,
            headerShown: false
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            title: "Search",
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="search" color={color} />,
            headerShown: false
          }}
        />
        <Tabs.Screen
          name="browse"
          options={{
            title: "Browse",
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="th-list" color={color} />,
            headerShown: false
          }}
        />
      </Tabs>
  );
};
export default TabLayout;
