import React, { useState } from 'react';
import { Switch } from 'react-native';
import { colors } from '../../constants/colors';

const CustomSwitch = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <Switch
      style={{ marginLeft: 10 }}
      trackColor={{ false: '#767577', true: colors.golden }}
      thumbColor={enabled ? colors.darkBrown : '#f4f3f4'}
      ios_backgroundColor='#3e3e3e'
      onValueChange={() => setEnabled(!enabled)}
      value={enabled}
    />
  );
};

export default CustomSwitch;