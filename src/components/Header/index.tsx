import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text } from 'react-native';

import { styles } from './styles';

export function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Planos
      </Text>

      <View style={styles.button}>
        <Feather
          name="inbox"
          size={24}
        />
      </View>
    </View>
  );
}