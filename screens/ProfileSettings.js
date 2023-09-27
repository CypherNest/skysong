import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Image, StyleSheet, Alert, Platform, Button} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

// ======icon==============
import { Octicons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesignIcons from "react-native-vector-icons/AntDesign";
import { Ionicons } from "@expo/vector-icons"


//////components--------
import {
    StyledContainer,
    Colors,
    MainContainer,
    ScreenTitles,
    ContentMarginTop,
    ProfileImageContainer,
    UploadProfileImage,
    ProfilePicture,
    SmallInputContainer,
    ProfileInputSmall,
    StyledTextInputLabel,
    StyledTextInput,
    ButtonText,
    StyledFormArea,
    ProfileInputField,
    ProfleInputfieldContainer,
    StyledButton,
    ProfileNameContainer,
    ProfileNameText,
    UserNameText,
    ImageContainer,
    CameraIconBg,
    CameraIconContainer
} from '../styles/styles';

const defaultProfileImage = require("../assets/images/nopicture.png");

const { backgroundColor, inputPlaceholder, primary, inputBg, white} = Colors;

const ProfileSettings = () => {
  const [image, setImage] = useState(null);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

        return (
            <SafeAreaView style={{ flex: 1 }}>
            <StyledContainer>
                <StatusBar style="light" backgroundColor= {backgroundColor}/>
                <MainContainer>
                    <ScreenTitles>Update Profile</ScreenTitles>
                    <ContentMarginTop/> 
                       
                    <ProfileImageContainer>
                      <ImageContainer>
                        <CameraIconContainer onPress={pickImage}>
                          <CameraIconBg>
                            <Ionicons name="camera" size={27} color={white} />
                          </CameraIconBg>
                        </CameraIconContainer>
                        <UploadProfileImage>
                          <ProfilePicture>
                            {image ? (
                              <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />
                            ) : (
                              <Image source={defaultProfileImage} style={{ width: 100, height: 100 }} />
                              
                            )}
                          </ProfilePicture>
                        </UploadProfileImage>
                      </ImageContainer>

                      <ProfileNameContainer>
                          <ProfileNameText>Rachael Anderson</ProfileNameText>
                          <UserNameText>@Rachael</UserNameText>
                    </ProfileNameContainer>
                    </ProfileImageContainer>
                    {/* input fields=============== */}
                    <StyledFormArea>
                        <SmallInputContainer>
                            <ProfileInputSmall
                              placeholder="First name"
                              placeholderTextColor={inputPlaceholder}
                              />
                          <ProfileInputSmall
                              placeholder="Last name"
                              placeholderTextColor={inputPlaceholder}
                              />
                        </SmallInputContainer>
                        <ProfleInputfieldContainer>
                              <ProfileInputField
                              placeholder="Username"
                              placeholderTextColor={inputPlaceholder}
                              />
                              <ProfileInputField
                              placeholder="Email"
                              placeholderTextColor={inputPlaceholder}
                              />
                        </ProfleInputfieldContainer>
                        <StyledButton>
                          <ButtonText>UPDATE</ButtonText>
                        </StyledButton>
                    </StyledFormArea>
                 
                </MainContainer>
            </StyledContainer>
            </SafeAreaView>

        );
        };

const styles = StyleSheet.create({

  cameraIcon: {
    flex: 1,
    position: 'absolute',
    marginTop: 30,
  },
});

export default ProfileSettings;
