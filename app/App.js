import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import Main from './app/screens/Main'

import Medias from './app/screens/Medias/Medias'
import Media6 from './app/screens/Medias/Media6'
import Media8 from './app/screens/Medias/Media8'
import Media9 from './app/screens/Medias/Media9'

import GPrompt from './app/screens/Geral/Prompt'
import Geral9ano from "./app/screens/Geral/Geral9ano"
import Geral1ano from "./app/screens/Geral/Geral1ano"
import Geral2ano from "./app/screens/Geral/Geral2ano"
import Geral3ano from "./app/screens/Geral/Geral3ano"

import Prompt from "./app/screens/GPA/Prompt"
import Media9ano from "./app/screens/GPA/Media9ano"
import Media1ano from "./app/screens/GPA/Media1ano"
import Media2ano from "./app/screens/GPA/Media2ano"
import Media3ano from "./app/screens/GPA/Media3ano"
import Gpafinal from "./app/screens/GPA/Gpafinal"


export default function App() {

  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Medias"
          component={Medias}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Media6"
          component={Media6}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Media8"
          component={Media8}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Media9"
          component={Media9}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="GPrompt"
          component={GPrompt}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Geral9ano"
          component={Geral9ano}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Geral1ano"
          component={Geral1ano}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Geral2ano"
          component={Geral2ano}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Geral3ano"
          component={Geral3ano}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Prompt"
          component={Prompt}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Media9ano"
          component={Media9ano}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Media1ano"
          component={Media1ano}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Media2ano"
          component={Media2ano}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Media3ano"
          component={Media3ano}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Gpafinal"
          component={Gpafinal}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}