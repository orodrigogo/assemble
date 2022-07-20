import { useState } from 'react';
import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';

import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import { Option } from '../../components/Option';
import { Button } from '../../components/Button';
import { PlanInfo, PlanInfoProps } from '../../components/PlanInfo';

import { styles } from './styles';

export function Plan() {
  const [plan, setPlan] = useState<PlanInfoProps>({ name: 'Basic', value: '5.25' });
  const [emailSent, setEmailSent] = useState(false);

  function handleChangePlan(plan: string) {
    if (plan === 'basic') {
      setPlan({
        name: 'Basic',
        value: '5,49'
      });
    } else {
      setPlan({
        name: 'Premium',
        value: '6,99'
      });
    }
  }

  function handleSubscribe() {
    setEmailSent(true);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} testID="keyboard">
      <View style={styles.container}>
        <Header />

        <PlanInfo
          name={plan.name}
          value={plan.value}
        />

        <View style={styles.options}>
          <Option
            title="Premium"
            active={plan.name === 'Premium'}
            onPress={() => handleChangePlan('premium')}
            testID="option-premium"
          />
          <Option
            title="Basic"
            active={plan.name === 'Basic'}
            onPress={() => handleChangePlan('basic')}
          />
        </View>

        <Input
          placeholder="seu e-mail"
          testID="input-email"
          keyboardType="email-address"
        />

        {
          emailSent &&
          <Text style={styles.confirmation} testID="confirmation-message">
            We send you a  {'\n'}
            confirmation email.
          </Text>
        }

        <Button
          title="Continuar"
          onPress={handleSubscribe}
          testID="button-subscribe"
        />

        <Text style={styles.details} testID="plan-note">
          Se o preço mudar, iremos notificá-lo com antecedência.
          Você pode verificar sua data de renovação ou cancelar a qualquer momento na página da sua conta.
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}