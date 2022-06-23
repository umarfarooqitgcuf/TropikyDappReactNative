import React, {useState, createRef} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Clipboard,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useMoralisDapp} from '../providers/MoralisDappProvider/MoralisDappProvider';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCopy} from '@fortawesome/free-solid-svg-icons';
import {Tooltip} from '@ui-kitten/components';
import Blockie from './Blockie';

export default function Address() {
  const {walletAddress, chainId} = useMoralisDapp();
  const [tipVisible, setTipVisible] = useState(false);

  const copyToClipboard = () => {
    console.log('Address.js : ' + walletAddress);
    Clipboard.setString(walletAddress);
    setTipVisible(true);
  };

  const renderAddress = () => (
    // <View style={styles.container}></View>

    <View style={styles.viewContainer}>
      <TouchableOpacity
        style={styles.viewContainerTouchable}
        onPress={() => copyToClipboard()}>
        <Blockie address={walletAddress} size={100} />

        <Text
          style={styles.headerText}
          ellipsizeMode={'middle'}
          numberOfLines={1}>
          {walletAddress}
        </Text>

        <FontAwesomeIcon
          style={{alignSelf: 'center'}}
          icon={faCopy}
          size={15}
          color="darkgreen"
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <Tooltip
      anchor={renderAddress}
      visible={tipVisible}
      onBackdropPress={() => setTipVisible(false)}>
      Copied Address 😻
    </Tooltip>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewContainerTouchable: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'yellow',
  },
  imageContainer: {
    height: 20,
    width: 20,
    borderRadius: 20,
  },
  headerText: {
    //flex: 1,
    width: 130,
    paddingHorizontal: 10,
    fontSize: 18,
    color: '#414a4c',
    fontWeight: '600',
    color: 'red',
    alignSelf: 'center',
  },
});
