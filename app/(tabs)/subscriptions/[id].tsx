import React from 'react';
import { View, Text } from 'react-native';
import {useLocalSearchParams} from "expo-router";

const SubscriptionDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View>
      <Text>Subscription Details: {id}</Text>
    </View>
  );
};

export default SubscriptionDetails;