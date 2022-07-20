import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

export type PlanInfoProps = {
  name: string;
  value: string;
}

export function PlanInfo({ name, value }: PlanInfoProps) {
  return (
    <View style={styles.planInfo}>
      <Text style={styles.plan}>
        {name}
      </Text>

      <View style={styles.price}>
        <Text style={styles.currency}>
          R$
        </Text>

        <Text style={styles.value}>
          {value}
        </Text>
        <Text style={styles.recurrence}>
          /mês
        </Text>
      </View>

      <Text style={styles.note}>
        Cancele a qualquer momento. Leia os termos e condições.
      </Text>
    </View>
  );
}