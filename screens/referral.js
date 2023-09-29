import React, { useContext, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, TouchableOpacity, Text } from "react-native";

// ======icon==============
import { Octicons } from "@expo/vector-icons";

//////components--------
import {
  StyledContainer,
  Colors,
  ButtonStyle,
  ButtonText,
  MainContainer,
  ScreenTitles,
  GenerateCryptoContainer,
  GenerateCryptoIcon,
  GenerateCryptoTitle,
  GenerateCryptoDetails,
  CryptoInputContainer,
  CryptoAddressInput,
  CryptoCopyBtn,
} from "../styles/styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Context } from "../store/context";
import { refer } from "../util/auth";

const { backgroundColor, inputPlaceholder, white } = Colors;
const Referral = ({ navigation }) => {
  const ctx = useContext(Context);
  const [referralLink, setReferralLink] = useState("");
  useEffect(() => {
    const data = async () => {
      try {
        const response = await refer(ctx.token);
        setReferralLink(response.link);
      } catch (error) {
        console.log(error.message);
      }
    };
    data();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StyledContainer>
        <StatusBar style="light" backgroundColor={backgroundColor} />
        <MainContainer>
          <ScreenTitles>Referral</ScreenTitles>
          <GenerateCryptoContainer>
            <GenerateCryptoIcon
              source={require("../assets/icons/cryptowallet.png")}
            />
            <GenerateCryptoTitle>
              Refer your friends and get N200
            </GenerateCryptoTitle>
            <GenerateCryptoDetails>
              Earn referral bonus when your friends signs up {"\n"} and trade
              successfully.
            </GenerateCryptoDetails>
            <CryptoInputContainer>
              <CryptoAddressInput
                placeholder={referralLink}
                placeholderTextColor={white}
                editable={false}
              />
              <CryptoCopyBtn>
                <ButtonText>Copy</ButtonText>
              </CryptoCopyBtn>
            </CryptoInputContainer>
          </GenerateCryptoContainer>
        </MainContainer>
      </StyledContainer>
    </SafeAreaView>
  );
};

export default Referral;
