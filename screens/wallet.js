import React, { useContext, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, TouchableOpacity, Text } from "react-native";

//icons ========
import { Octicons } from "@expo/vector-icons";

//////components--------
import {
  Colors,
  UserWalletScreen,
  UserWalletContainer,
  WalletTitle,
  WalletBalanceTitle,
  WalletBalanceContent,
  WalletBalance,
  WalletButtonContainer,
  WalletButton,
  WalletButtonText,
  // BreakDownContainer,
  // BreakDownText,
  WithdrawalHistoryContainer,
  WithdrawalText,
  WithdrawalHistory,
  ReceiptImage,
  WithdrawalReceiptContainer,
  ReceiptText,
} from "../styles/styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Context } from "../store/context";

const { backgroundColor, inputPlaceholder, white, darkBlue } = Colors;

const Wallet = ({ navigation }) => {
  const ctx = useContext(Context);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: darkBlue }}>
      <UserWalletScreen>
        <StatusBar style="light" backgroundColor={darkBlue} />
        <UserWalletContainer>
          <WalletTitle>Wallet</WalletTitle>
          <WalletBalanceTitle>Account Balance</WalletBalanceTitle>
          <WalletBalanceContent>
            <WalletBalance>{ctx.wallet_Balance}</WalletBalance>
          </WalletBalanceContent>
          <WalletButtonContainer>
            <WalletButton onPress={() => navigation.navigate("WithdrawFund")}>
              <WalletButtonText>Withdraw Funds</WalletButtonText>
            </WalletButton>
            <WalletButton onPress={() => navigation.navigate("AddBankAccount")}>
              <WalletButtonText>Bank Accounts</WalletButtonText>
            </WalletButton>
          </WalletButtonContainer>
          {/* <BreakDownContainer>
                        <BreakDownText>View Breakdown</BreakDownText>
                    </BreakDownContainer> */}
        </UserWalletContainer>
        <WithdrawalHistoryContainer>
          <WithdrawalText>Withdrawals</WithdrawalText>
          <WithdrawalHistory>
            <WithdrawalReceiptContainer>
              <ReceiptImage source={require("../assets/icons/receipt.png")} />
              <ReceiptText>No withdrawal record found</ReceiptText>
            </WithdrawalReceiptContainer>
          </WithdrawalHistory>
        </WithdrawalHistoryContainer>
      </UserWalletScreen>
    </SafeAreaView>
  );
};

export default Wallet;
