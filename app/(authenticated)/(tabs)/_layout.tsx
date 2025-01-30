import { Icon } from '@/components/ui/icon';
import { Tabs } from 'expo-router';
import { House, CalendarDays, Search, List } from "lucide-react-native";

const TabLayout = () => {
  return (
      <Tabs
      
      >
        <Tabs.Screen
          name="today"
          options={{
            title: "Today",
            tabBarIcon: ({ color }) => <Icon as={House} color={color} size='xl' />,
            headerShown: false
          }}
        />
        <Tabs.Screen
          name="upcoming"
          options={{
            title: "Upcoming",
            tabBarIcon: ({ color }) => <Icon as={CalendarDays} color={color} size='xl' />,
            headerShown: false
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            title: "Search",
            tabBarIcon: ({ color }) =>  <Icon as={Search} color={color} size='xl' />,
            headerShown: false
          }}
        />
        <Tabs.Screen
          name="browse"
          options={{
            title: "Browse",
            tabBarIcon: ({ color }) => <Icon as={List} color={color} size='xl' />,
            headerShown: false
          }}
        />
      </Tabs>
  );
};
export default TabLayout;
