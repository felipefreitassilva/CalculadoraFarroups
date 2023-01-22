import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import Main from './app/screens/Main'

import Medias from './app/screens/Medias/Medias'
import Media6 from './app/screens/Medias/Media6'
import Media8 from './app/screens/Medias/Media8'
import Media9 from './app/screens/Medias/Media9'

import GPrompt from './app/screens/Geral/Prompt'
import geral9ano from "./app/screens/Geral/geral9ano"
import geral1ano from "./app/screens/Geral/geral1ano"
import geral2ano from "./app/screens/Geral/geral2ano"
import geral3ano from "./app/screens/Geral/geral3ano"

import Prompt from "./app/screens/GPA/Prompt"
import media9ano from "./app/screens/GPA/media9ano"
import media1ano from "./app/screens/GPA/media1ano"
import media2ano from "./app/screens/GPA/media2ano"
import media3ano from "./app/screens/GPA/media3ano"
import gpafinal from "./app/screens/GPA/gpafinal"


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
          name="geral9ano"
          component={geral9ano}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="geral1ano"
          component={geral1ano}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="geral2ano"
          component={geral2ano}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="geral3ano"
          component={geral3ano}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Prompt"
          component={Prompt}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="media9ano"
          component={media9ano}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="media1ano"
          component={media1ano}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="media2ano"
          component={media2ano}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="media3ano"
          component={media3ano}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="gpafinal"
          component={gpafinal}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}