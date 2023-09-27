import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, TouchableOpacity, Text } from "react-native";

// ======icon==============
import { Octicons } from '@expo/vector-icons';

//////components--------
import {
    StyledContainer,
    Colors,
    MainContainer,
    ScreenTitles,
    ContentMarginTop,
    GenContainer,
    GenContent,
    GenContentLeft,
    GenContenLeftTextBig,
    GenContenLeftTextSmall,
    GenContentRight,
    GenThemeToggle,
    GenTogleText

} from '../styles/styles';
import { SafeAreaView } from "react-native-safe-area-context";

const { backgroundColor, inputPlaceholder} = Colors;
const GeneralSettings = ({navigation}) => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
        <StyledContainer>
            <StatusBar style="light" backgroundColor= {backgroundColor}/>
            <MainContainer>
                <ScreenTitles>General Settings</ScreenTitles>
                <ContentMarginTop/>
                <GenContainer>
                    <GenContent>
                        <GenContentLeft>
                        <GenContenLeftTextSmall>Theme settings</GenContenLeftTextSmall>
                            <GenContenLeftTextBig>Light & dark theme</GenContenLeftTextBig>
                        </GenContentLeft>
                        <GenContentRight>
                            <GenTogleText>Light</GenTogleText>
                            <GenTogleText>Dark</GenTogleText>
                        </GenContentRight>
                    </GenContent>
                    <GenContent>
                        <GenContentLeft>
                        <GenContenLeftTextSmall>Notification settings</GenContenLeftTextSmall>
                            <GenContenLeftTextBig>Turn on notifications</GenContenLeftTextBig>
                        </GenContentLeft>
                        <GenContentRight>
                            <GenTogleText>Light</GenTogleText>
                            <GenTogleText>Dark</GenTogleText>
                        </GenContentRight>
                    </GenContent>
                </GenContainer>
            </MainContainer>
        </StyledContainer>
        </SafeAreaView>
    );
};


export default GeneralSettings;
