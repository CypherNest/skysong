import React, {
  useState,
  useCallback,
  useRef,
  useEffect,
  useLayoutEffect,
} from "react";
import { StatusBar } from "expo-status-bar";
import Modal from "react-native-modal";
import { Text } from "react-native";
import axios from "axios"; // Import Axios

// ===components=========
import LoadingBarScreen from "../components/LoadingBar";

// ======icon==============
import { Octicons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesignIcons from "react-native-vector-icons/AntDesign";

//////components--------
import {
  StyledContainer,
  Colors,
  MainContainer,
  HomeMenuContainer,
  HomeUserContainer,
  HomeUserName,
  HomeWaveIcon,
  HomeMenuIcon,
  WalletContainer,
  WalletLeft,
  WalletRight,
  PriceContainer,
  PriceText,
  IconLeft,
  IconRight,
  WithdrawButton,
  WithdrawButtonText,
  WithdrawButtonIcon,
  CurrencyBtn,
  CurrencyBtnIcon,
  CurrencyBtnText,
  TransactContainer,
  TradeButton,
  TradeButtonIcon,
  TradeButtonTitle,
  TradeButtonDetails,
  HighCardRatesButton,
  HighCardRatesButtonLeft,
  HighCardRatesButtonTitle,
  HighCardRatesButtonDetails,
  HighCardRatesButtonImage,
  NoticeTitle,
  BuyOrSell,
  Buy,
  Sell,
  IwantTo,
  BuyOrSellTitle,
  BuyOrSellDetails,
  ComingSoonBtn,
  ComingSoonBtnText,
  InComingIcon,
  OutGoingIcon,
  TextsContent,
  IconContent,
  CloseButton,
  SheetHeading,
  ShortModalContainer,
  ShortModal,
  ShortModalTitle,
  ShortModalHome,
  ShortModalItemName,
  ShortModalHeading,
  ShortModalItemContainer,
  NoticeModalContainer,
  CloseIcon,
  NoticeTextSmall,
  NoticeBtn,
  NoticeContent,
} from "../styles/styles";
import { SafeAreaView } from "react-native-safe-area-context";
const { backgroundColor, inputPlaceholder, white } = Colors;

const Home = ({ navigation, route }) => {
  // const { name, balance } = route.params || {};
  const { email, phoneNumber } = route.params || {};

  // ===modal functon for selling giftcard=========
  const [isSellGiftCardModalVisible, setSellGiftCardModalVisible] =
    useState(false);
  const toggleGiftCardModal = () => {
    setSellGiftCardModalVisible(!isSellGiftCardModalVisible);
  };

  // ===modal functon for selling cryptocurrency=========
  const [isSellCryptoModalVisible, setSellCryptoModalVisible] = useState(false);
  const toggleCryptoModal = () => {
    setSellCryptoModalVisible(!isSellCryptoModalVisible);
  };

  // ===modal functon for bills payment=========
  const [isBillPaymentsModalVisible, setBillPaymentsModalVisible] =
    useState(false);
  const toggleBillPaymentsModal = () => {
    setBillPaymentsModalVisible(!isBillPaymentsModalVisible);
  };
  // ==========wallet visibility================
  const [isWalletBalanceVisible, setWalletBalanceVisible] = useState(true);
  const toggleWalletBalanceVisibility = () => {
    setWalletBalanceVisible(!isWalletBalanceVisible);
  };

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["bottom", "left", "right"]}>
      <StyledContainer>
        <StatusBar style="light" backgroundColor={backgroundColor} />

        {/* <CustomHeader/> */}

        <MainContainer>
          {/* --------menu icon and username--------- */}
          <HomeMenuContainer>
            <HomeUserContainer>
              <HomeUserName>Hello, {"gyqwq" || email} 👋</HomeUserName>
              {/* <HomeWaveIcon
                source={require("../assets/icons/hand.png")}
                style={{ width: 24, height: 24 }}
              /> */}
            </HomeUserContainer>
            {/* <HomeMenuIcon  onPress={openDrawer}>
                            <Octicons name="three-bars" size={30} color={white} />
                        </HomeMenuIcon> */}
          </HomeMenuContainer>
          {/* --------------------wallet section--------------------- */}
          <WalletContainer>
            <WalletLeft>
              <PriceContainer>
                <IconLeft>
                  <Icon
                    name="currency-ngn"
                    size={20}
                    color={inputPlaceholder}
                  />
                </IconLeft>
                {isWalletBalanceVisible ? (
                  <PriceText color={white}>{"0.00" || balance}</PriceText>
                ) : (
                  <Text>******</Text> // Display asterisks or any other hidden content
                )}
                <IconRight>
                  <Octicons
                    name={isWalletBalanceVisible ? "eye" : "eye-closed"}
                    size={16}
                    color={inputPlaceholder}
                    onPress={toggleWalletBalanceVisibility}
                  />
                </IconRight>
              </PriceContainer>
              <WithdrawButton
                onPress={() => navigation.navigate("WithdrawFund")}
              >
                <WithdrawButtonIcon>
                  <IconRight>
                    <AntDesignIcons
                      name="download"
                      size={16}
                      color={inputPlaceholder}
                    />
                  </IconRight>
                </WithdrawButtonIcon>
                <WithdrawButtonText>Withdraw</WithdrawButtonText>
              </WithdrawButton>
            </WalletLeft>
            <WalletRight>
              <CurrencyBtn>
                <CurrencyBtnText>NGN</CurrencyBtnText>
                <CurrencyBtnIcon>
                  <AntDesignIcons
                    name="caretdown"
                    size={16}
                    color={inputPlaceholder}
                  />
                </CurrencyBtnIcon>
              </CurrencyBtn>
            </WalletRight>
          </WalletContainer>
          {/* --------------------Trade crypto, gift card and airtime section--------------------- */}

          <TransactContainer>
            {/* onPress ={() => navigation.navigate("SellGiftcard")} */}
            <TradeButton onPress={toggleGiftCardModal}>
              <TradeButtonIcon>
                <AntDesignIcons name="eye" size={16} color={inputPlaceholder} />
              </TradeButtonIcon>
              <Text>
                <TradeButtonTitle>Buy &amp; Sell</TradeButtonTitle>
                {"\n"}
                <TradeButtonTitle>Gift Cards</TradeButtonTitle>
              </Text>
              <Text>
                <TradeButtonDetails>Trade like the</TradeButtonDetails>
                {"\n"}
                <TradeButtonDetails>boss you are.</TradeButtonDetails>
              </Text>
            </TradeButton>
            <TradeButton onPress={toggleCryptoModal}>
              <TradeButtonIcon>
                <Octicons name="eye" size={16} color={inputPlaceholder} />
              </TradeButtonIcon>
              <Text>
                <TradeButtonTitle>Buy &amp; Sell</TradeButtonTitle>
                {"\n"}
                <TradeButtonTitle>Cyptocurrency</TradeButtonTitle>
              </Text>
              <Text>
                <TradeButtonDetails>Trade crypto at</TradeButtonDetails>
                {"\n"}
                <TradeButtonDetails>best market rates.</TradeButtonDetails>
              </Text>
            </TradeButton>
            <TradeButton onPress={toggleBillPaymentsModal}>
              <TradeButtonIcon>
                <Octicons name="eye" size={16} color={inputPlaceholder} />
              </TradeButtonIcon>
              <Text>
                <TradeButtonTitle>Buy &amp; Pay</TradeButtonTitle>
                {"\n"}
                <TradeButtonTitle>Bills</TradeButtonTitle>
              </Text>
              <Text>
                <TradeButtonDetails>Never run out</TradeButtonDetails>
                {"\n"}
                <TradeButtonDetails>of data or airtime.</TradeButtonDetails>
              </Text>
            </TradeButton>
          </TransactContainer>

          {/* --------------------Loading bar section--------------------- */}
          {/* <LoadingBarScreen /> */}

          {/* --------------------High card rates section--------------------- */}
          <HighCardRatesButton
            onPress={() => navigation.navigate("HighCardRates")}
          >
            <HighCardRatesButtonLeft>
              <HighCardRatesButtonTitle>
                High card rates
              </HighCardRatesButtonTitle>
              <Text>
                <HighCardRatesButtonDetails>
                  Check out all the gift
                </HighCardRatesButtonDetails>
                {"\n"}
                <HighCardRatesButtonDetails>
                  cards with high rates
                </HighCardRatesButtonDetails>
              </Text>
            </HighCardRatesButtonLeft>
            <HighCardRatesButtonImage
              source={require("../assets/images/graph.png")}
            />
          </HighCardRatesButton>
        </MainContainer>

        {/* =================Sell Gift card modal============ */}
        <Modal
          isVisible={isSellGiftCardModalVisible}
          style={{ margin: 0 }}
          onBackdropPress={toggleGiftCardModal}
          backdropOpacity={0.5}
          animationIn="slideInUp"
          animationOut="slideOutDown"
        >
          <ShortModalContainer>
            <ShortModalHome>
              <ShortModalHeading>
                <IwantTo>I want to?</IwantTo>
                <CloseButton onPress={toggleGiftCardModal}>
                  <Octicons name="x" size={24} color="white" />
                </CloseButton>
              </ShortModalHeading>
              <BuyOrSell>
                <Buy>
                  <IconContent>
                    <InComingIcon>
                      <Octicons name="three-bars" size={24} color={white} />
                    </InComingIcon>
                    <ComingSoonBtn>
                      <ComingSoonBtnText>Coming soon</ComingSoonBtnText>
                    </ComingSoonBtn>
                  </IconContent>
                  <TextsContent>
                    <BuyOrSellTitle>Buy Giftcard</BuyOrSellTitle>
                    <BuyOrSellDetails>
                      Buy local and international gift cards easily on Skyshowng
                    </BuyOrSellDetails>
                  </TextsContent>
                </Buy>
                <Sell
                  onPress={() => {
                    toggleGiftCardModal();
                    navigation.navigate("SellGiftcard");
                  }}
                >
                  <IconContent>
                    <OutGoingIcon>
                      <Octicons name="three-bars" size={24} color={white} />
                    </OutGoingIcon>
                  </IconContent>
                  <TextsContent>
                    <BuyOrSellTitle>Sell Giftcard</BuyOrSellTitle>
                    <BuyOrSellDetails>
                      Sell local and international gift cards easily on
                      Skyshowng
                    </BuyOrSellDetails>
                  </TextsContent>
                </Sell>
              </BuyOrSell>
            </ShortModalHome>
          </ShortModalContainer>
        </Modal>

        {/* =================Sell crypto  modal============ */}
        <Modal
          isVisible={isSellCryptoModalVisible}
          style={{ margin: 0 }}
          onBackdropPress={toggleCryptoModal}
          backdropOpacity={0.5}
          animationIn="slideInUp"
          animationOut="slideOutDown"
        >
          <ShortModalContainer>
            <ShortModalHome>
              <ShortModalHeading>
                <IwantTo>I want to?</IwantTo>
                <CloseButton onPress={toggleCryptoModal}>
                  <Octicons name="x" size={24} color="white" />
                </CloseButton>
              </ShortModalHeading>
              <BuyOrSell>
                <Buy>
                  <IconContent>
                    <InComingIcon>
                      <Octicons name="three-bars" size={24} color={white} />
                    </InComingIcon>
                    <ComingSoonBtn>
                      <ComingSoonBtnText>Coming soon</ComingSoonBtnText>
                    </ComingSoonBtn>
                  </IconContent>
                  <TextsContent>
                    <BuyOrSellTitle>Buy Cryptocurrency</BuyOrSellTitle>
                    <BuyOrSellDetails>
                      Buy and invest in crypto, using Skyshowng instant order
                      feature
                    </BuyOrSellDetails>
                  </TextsContent>
                </Buy>
                <Sell
                  onPress={() => {
                    toggleCryptoModal();
                    navigation.navigate("SellCrypto");
                  }}
                >
                  <IconContent>
                    <OutGoingIcon>
                      <Octicons name="three-bars" size={24} color={white} />
                    </OutGoingIcon>
                  </IconContent>
                  <TextsContent>
                    <BuyOrSellTitle>Sell Cryptocurrency</BuyOrSellTitle>
                    <BuyOrSellDetails>
                      Instantly sell all your cryptos on Skyshowng
                    </BuyOrSellDetails>
                  </TextsContent>
                </Sell>
              </BuyOrSell>
            </ShortModalHome>
          </ShortModalContainer>
        </Modal>

        {/* =================Bills payment  modal============ */}
        <Modal
          isVisible={isBillPaymentsModalVisible}
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          onBackdropPress={toggleBillPaymentsModal}
          backdropOpacity={0.5}
          animationIn="slideInUp"
          animationOut="slideOutDown"
        >
          <NoticeModalContainer>
            <CloseIcon onPress={toggleBillPaymentsModal}>
              <Octicons name="x" size={24} color="white" />
            </CloseIcon>
            <NoticeContent>
              <NoticeBtn>
                <ComingSoonBtnText>Coming soon</ComingSoonBtnText>
              </NoticeBtn>
              <NoticeTitle>
                This service is currently not {"\n"} available
              </NoticeTitle>
              <NoticeTextSmall>
                You'll be notified as soon as it is available
              </NoticeTextSmall>
            </NoticeContent>
          </NoticeModalContainer>
        </Modal>
      </StyledContainer>
    </SafeAreaView>
  );
};

export default Home;
