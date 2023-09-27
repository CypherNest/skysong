import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, TouchableOpacity } from "react-native";

//////components--------
import {
    StyledContainer,
    InnerContainer,
    ButtonText,
    StyledButton,
    Colors,
    GetStartedImg,
    GetStartedContainer,
    GetStartedTitle
} from '../styles/styles';

const GetStarted = ({navigation}) => {

    return (
        <StyledContainer>
            <StatusBar style="light" />
            <InnerContainer>
                <GetStartedContainer>
                <GetStartedImg source={require("../assets/images/welcome-image.png")} resizeMode="cover" />
                <GetStartedTitle >Trade your gift cards, cryptocurrencies and pay bills. </GetStartedTitle>
                </GetStartedContainer>
                <StyledButton onPress ={() => navigation.navigate("Login")}>
                    <ButtonText>GET STARTED</ButtonText>
                </StyledButton>
            </InnerContainer>
        </StyledContainer>
    );
};


export default GetStarted;
