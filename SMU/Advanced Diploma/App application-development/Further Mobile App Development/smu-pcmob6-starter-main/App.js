import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignInSignUpScreen from "./screens/SignInSignUpScreen";
import LoggedInTabStack from "./components/LoggedInTabStack";
import { Provider, useSelector } from "react-redux";
import store from "./redux/configureStore";
import React, { useState, useEffect } from "react";

const Stack = createStackNavigator();
export default function AppWrapper() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

function App() {
  const token = useSelector((state) => state.auth.token);
  const [loading, setLoading] = useState(true);
  const [signedIn, setSignedIn] = useState(false);

  async function loadToken() {
    if (token) {
      setSignedIn(true);
    }
    setLoading(false);
  }

  useEffect(() => {
    loadToken();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        mode="modal"
        headerMode="none"
        initialRouteName={signedIn ? "Logged In" : "SignInSignUp"}
        animationEnabled={false}
      >
        <Stack.Screen component={LoggedInTabStack} name="Logged In" />
        <Stack.Screen component={SignInSignUpScreen} name="SignInSignUp" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
