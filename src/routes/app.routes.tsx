import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home";
import { RegisterScreen } from "../screens/RegisterScreen";
import { useTheme } from "styled-components";
import { Platform } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.COLORS.PRIMARY,
        tabBarInactiveTintColor: theme.COLORS.DISABLED,
        tabBarLabelPosition: "beside-icon",
        tabBarStyle: {
          height: 68,
          paddingVertical: Platform.OS === "ios" ? 20 : 0,
        },
      }}
    >
      <Screen
        name="Transações"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="swap-horiz" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Cadastro"
        component={RegisterScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="library-add" size={size} color={color} />
          ),
        }}
      />

      <Screen
        name="Relatórios"
        component={RegisterScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="bar-chart" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
