import React, { useContext, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  TouchableOpacity,
  Text,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { Formik } from "formik";
import { SafeAreaView } from "react-native-safe-area-context";
import Modal from "react-native-modal"; // Import react-native-modal
import { Octicons } from "@expo/vector-icons";

// Import your custom styles and components here
import {
  StyledContainer,
  StyledButton,
  ButtonText,
  Colors,
  MainContainer,
  ScreenTitles,
  BalanceContainer,
  StyledFormArea,
  StyledTextInput,
  StyledTextInputLabel,
  Balance,
  BalanceTitle,
  BalanceAmount,
  NairaIcon,
  ModalContainer,
  InputModal,
  InputModalTitle,
  ItemName,
  CloseButton,
  InputModalHeading,
  SuccessAlertModal,
  AlertModalText,
  AlertModalIcon,
  AlertModalTextSpan,
  CheckIcon,
  MondalSearchBox,
  MsgBox,
} from "../styles/styles";
import { Context } from "../store/context";

const { backgroundColor, inputPlaceholder, white } = Colors;

// Sample bank data
const bankData = [
  { id: 1, name: "ACCESS BANK" },
  { id: 2, name: "GTB PLC" },
  { id: 3, name: "UNITED BANK OF AFRICA (UBA)" },
  { id: 4, name: "STANBIC BANK" },
  { id: 5, name: "FIRST BANK" },
  { id: 6, name: "STERLING BANK PLC" },
  { id: 7, name: "PROVIDUS BANK" },
  { id: 8, name: "MONIE POINT" },
  { id: 9, name: "PAGA MICROFIANCE BANK" },
  { id: 10, name: "FIRST BANK" },
  { id: 11, name: "ACCESS BANK" },
  { id: 12, name: "GTB PLC" },
  { id: 13, name: "UNITED BANK OF AFRICA (UBA)" },
  { id: 14, name: "STANBIC BANK" },
  { id: 15, name: "FIRST BANK" },
  // Add more banks as needed
];

const WithdrawFund = ({ navigation }) => {
  const ctx = useContext(Context);
  const [isBankModalVisible, setBankModalVisible] = useState(false);
  const [storedBanklist, setStoredBanklist] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const [selectedBank, setSelectedBank] = useState("");
  const [userData, setUserData] = useState({ amount: "" });

  const toggleBankModal = () => {
    setBankModalVisible(!isBankModalVisible);
  };

  // State for the success modal
  const [isSuccessModalVisible, setSuccessModalVisible] = useState(false);

  useEffect(() => {
    const data = async () => {
      try {
        const response = await getBankList(ctx.token);
        setStoredBanklist(response.bank);
        // console.log(result);
      } catch (error) {}
    };
    data();
  }, [userData]);

  // Function to show/hide the success modal
  const toggleSuccessModal = () => {
    setSuccessModalVisible(!isSuccessModalVisible);
  };

  const submitHandler = async (values) => {
    console.log(values);
    // toggleSuccessModal();
    try {
      setIsButtonDisabled(true);
      // check if user have enough balance to withdraw
      if (values.amount > 3) throw Error("Insuficeint funds");
      if (values.amount < 3) throw Error("");
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsButtonDisabled(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StyledContainer>
        <StatusBar style="light" backgroundColor={backgroundColor} />
        <MainContainer>
          <ScreenTitles>Withdraw Fund</ScreenTitles>
          {/* Account Balance */}
          <BalanceContainer>
            <BalanceTitle>Account Balance</BalanceTitle>
            <Balance>
              <NairaIcon />
              <BalanceAmount>{ctx.wallet_Balance}</BalanceAmount>
            </Balance>
          </BalanceContainer>
          {/* Form Section */}
          <Formik
            initialValues={userData}
            onSubmit={(values) => {
              values.selectedBank = selectedBank;
              submitHandler(values);
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <StyledFormArea>
                <StyledTextInputLabel>Amount</StyledTextInputLabel>
                <StyledTextInput
                  placeholder="Enter amount here"
                  placeholderTextColor={inputPlaceholder}
                  onChangeText={handleChange("amount")}
                  onBlur={handleBlur("amount")}
                  value={values.amount}
                  keyboardType="numeric"
                />
                <StyledTextInputLabel>Bank Account</StyledTextInputLabel>
                <TouchableOpacity onPress={toggleBankModal}>
                  <StyledTextInput
                    placeholder="Choose bank"
                    placeholderTextColor={inputPlaceholder}
                    value={selectedBank}
                    editable={false}
                  />
                </TouchableOpacity>
                <MsgBox>{errorMessage}</MsgBox>
                <StyledButton
                  onPress={() => {
                    handleSubmit(); // Handle form submission

                    // Show the success modal
                    // toggleSuccessModal();
                  }}
                >
                  <ButtonText>WITHDRAW</ButtonText>
                  {isButtonDisabled && <ActivityIndicator size={"large"} />}
                </StyledButton>
              </StyledFormArea>
            )}
          </Formik>
        </MainContainer>
      </StyledContainer>

      {/*=================== Bank Selection Modal =============== */}
      <Modal
        isVisible={isBankModalVisible}
        style={{ margin: 0 }} // Use this to make the modal cover the entire screen
        onBackdropPress={toggleBankModal}
        backdropOpacity={0.5}
        animationIn="slideInUp" // Specify the animation you want
        animationOut="slideOutDown" // Specify the animation for closing
      >
        <ModalContainer>
          <InputModal>
            <InputModalHeading>
              <InputModalTitle>Select a Bank</InputModalTitle>
              <CloseButton onPress={toggleBankModal}>
                <Octicons name="x" size={24} color="white" />
              </CloseButton>
            </InputModalHeading>
            {/* search box========== */}
            {/* <MondalSearchBox
              placeholder="Search"
              placeholderTextColor={inputPlaceholder}
              keyboardType="default"
            /> */}
            <FlatList
              data={bankData}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    setSelectedBank(item.name);
                    toggleBankModal();
                  }}
                >
                  <ItemName>{item.name}</ItemName>
                </TouchableOpacity>
              )}
            />
          </InputModal>
        </ModalContainer>
      </Modal>

      {/* ==========================Success Modal ============================= */}
      <Modal
        isVisible={isSuccessModalVisible}
        style={{ margin: 0 }}
        backdropOpacity={0.5}
        animationIn="slideInUp"
        animationOut="slideOutDown"
      >
        <SuccessAlertModal>
          <AlertModalIcon onPress={toggleSuccessModal}>
            <Octicons name="x" size={30} color={white} />
          </AlertModalIcon>
          <CheckIcon source={require("../assets/icons/check.png")} />
          <AlertModalText>Withdrawal is successful!</AlertModalText>
          <AlertModalTextSpan>
            Extra cash sure looks good on you
          </AlertModalTextSpan>
        </SuccessAlertModal>
      </Modal>
    </SafeAreaView>
  );
};

export default WithdrawFund;

// style={{ backgroundColor: "white", padding: 20, borderRadius: 10 }}
