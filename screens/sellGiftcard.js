
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, TouchableOpacity, Text } from "react-native";
import * as ImagePicker from 'expo-image-picker';


// ======icon==============
import { Octicons } from '@expo/vector-icons';

//////components--------
import {
    StyledContainer,
    StyledButton,
    ButtonText,
    Colors,
    MainContainer,
    ScreenTitles,
    StyledFormArea,
    StyledTextInput,
    StyledTextInputLabel,
    CardRateContainer,
    CardRateTopText,
    CardTotalText,
    BottomTextContainer,
    CardPriceText,
    PromoInput,
    TemporaryImageUpload,
    TemporarypLUS,
    SmallInputAndButtonContainer,
    InputFieldShort,
    ButtonRight,
    ButtonRighText
} from '../styles/styles';
import { SafeAreaView } from "react-native-safe-area-context";
import { Formik } from "formik";
import { ScrollView } from "react-native-gesture-handler";

const { backgroundColor, inputPlaceholder} = Colors;
const SellGiftcard = ({navigation}) => {
    const [userData, setUserData] = useState({ email: '', password: '' });
    return (
        <SafeAreaView style={{ flex: 1 }}>
        <StyledContainer>
            <StatusBar style="light" backgroundColor= {backgroundColor}/>
            <MainContainer>
                <ScrollView>

               
                <ScreenTitles>Sell Gift Card</ScreenTitles> 
             {/* ===============FORM SECTION================ */}
             <Formik initialValues={userData}
                    onSubmit={(values) => {
                        console.log(values)
                        navigation.navigate("WithdrawSuccess"); 
                    }}   
                    >

                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <StyledFormArea>
                            <StyledTextInputLabel>Gift card category</StyledTextInputLabel>
                           <StyledTextInput 
                                placeholder="Select"
                                placeholderTextColor={inputPlaceholder}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                keyboardType="email-address"
                            />
                            <StyledTextInputLabel>Gift card type</StyledTextInputLabel>
                            <StyledTextInput 
                                placeholder="Select"
                                placeholderTextColor={inputPlaceholder}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                keyboardType="email-address"
                            />
                            <StyledTextInputLabel>Amount (minimum amount) </StyledTextInputLabel>
                            <StyledTextInput 
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                keyboardType="email-address"
                            />
                            <StyledTextInputLabel>Comment</StyledTextInputLabel>
                            <StyledTextInput 
                                placeholder="leave a comment here (Optional)"
                                placeholderTextColor={inputPlaceholder}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                keyboardType="email-address"
                            />
                            <StyledTextInputLabel>Upload gift card image</StyledTextInputLabel>
                            <TemporaryImageUpload>
                                <TemporarypLUS>+</TemporarypLUS>
                            </TemporaryImageUpload>
                            <StyledTextInputLabel>Amount (minimum amount) </StyledTextInputLabel>
                            <StyledTextInput 
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                keyboardType="email-address"
                            />
                            <StyledTextInputLabel>Promo code</StyledTextInputLabel>
                            <SmallInputAndButtonContainer>
                                <InputFieldShort
                                placeholder= "Enter Promo code"
                                placeholderTextColor={inputPlaceholder}
                                />
                                <ButtonRight>
                                    <ButtonRighText>Apply</ButtonRighText>
                                </ButtonRight>
                            </SmallInputAndButtonContainer>
                            <CardRateContainer>
                                <CardRateTopText>Rate</CardRateTopText>
                                <BottomTextContainer>
                                    <CardTotalText>Total</CardTotalText>
                                    <CardPriceText>23,400.00</CardPriceText>
                                </BottomTextContainer>
                            </CardRateContainer>
                            <StyledButton>
                                <ButtonText>Proceed</ButtonText>
                            </StyledButton>
                        </StyledFormArea>
                    )}
                </Formik>
                </ScrollView>
            </MainContainer>
        </StyledContainer>
        </SafeAreaView>
    );
};


export default SellGiftcard;
