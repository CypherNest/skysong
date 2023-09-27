import React from "react";
import { View, Text, FlatList, StyleSheet, Image} from "react-native";
// ======dummy data sets===========
import DummyDataSets from "../../constants/DummyDataSets";

//////components--------
import {
    StyledContainer,
    Colors,
    MainContainer,
    ScreenTitles,
    ContentMarginTop,
    TradeButton
} from '../../styles/styles';


const CryptoTransaction = () => {
  const selectedDataSet = 'transactionData';
  const data = DummyDataSets[selectedDataSet];

    const renderItem = ({item}) => (
        <View style={styles.item}>
            <Image source={require("../../assets/images/icon-logo.png")} />
            <View style={styles.transactInfo}>
                <View style={styles.titleContainer} >
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.subtitle}>{item.subtitle}</Text>
                </View>
                <View style={styles.rateContainer}>
                    <Text style={styles.type}>{item.type}</Text>
                    <Text style={styles.rate}>NGN {item.rate}{selectedDataSet === 'transactionData'}</Text>
                </View>
            </View>
        </View>
    );

return (
  <View>
     <View style={styles.TransactionList}>
     <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
          />
     </View>
  </View>
);
};

const styles = StyleSheet.create({
  item: {
    width: '100%',
    padding: 20,
    marginVertical: 8,
    borderRadius: 15,
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  transactInfo: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 80,
  },
  rateContainer: {
      paddingTop: 8,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
      color: '#fff',
  },
  type: {
    fontSize: 14,
    color: '#fff',
  },
  rate: {
    fontSize: 14,
    color: '#fff',
  },
  TransactionList: {
      marginBottom: 10,
  }
});


export default CryptoTransaction;
