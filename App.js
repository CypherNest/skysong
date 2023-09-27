import "react-native-gesture-handler";
import React from "react";
import MainNavigators from "./navigation/MainNavigators";
import { NavigationContainer } from "@react-navigation/native";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import Provider from "./store/provider";

export default function App() {
  return (
    <Provider>
      <BottomSheetModalProvider>
        <MainNavigators />
      </BottomSheetModalProvider>
    </Provider>
  );
}
