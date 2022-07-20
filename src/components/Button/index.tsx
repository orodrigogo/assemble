import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text, ActivityIndicator } from 'react-native';

import { styles } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  isLoading?: boolean;
}
export function Button({ title, isLoading = false, ...rest }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={.8}
      style={styles.container}
      disabled={isLoading}
      {...rest}
    >
      <Text style={styles.title}>
        {
          isLoading ? <ActivityIndicator color="#FFF" size="small" /> : title
        }
      </Text>
    </TouchableOpacity>
  );
}