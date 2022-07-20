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
  const [isLoading, setIsLoading] = useState(false);

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

  async function handleSubscribe() {
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(() => {
      setIsLoading(false);
      setEmailSent(true);

      return resolve;
    }, 3000));
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
            testID="option-basic"
          />
        </View>

        <Input
          placeholder="seu e-mail"
          testID="input-email"
          keyboardType="email-address"
        />

        {
          emailSent && !isLoading &&
          <Text style={styles.confirmation} testID="confirmation-message">
            Nós enviamos um e-mail de confirmação para você.
          </Text>
        }

        {
          !emailSent &&
          < Button
            title="Confirmar"
            onPress={handleSubscribe}
            testID="button-subscribe"
            isLoading={isLoading}
          />
        }

        <Text style={styles.details} testID="plan-note">
          Se o preço mudar, iremos notificá-lo com antecedência.
          Você pode verificar sua data de renovação ou cancelar a qualquer momento na página da sua conta.
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}