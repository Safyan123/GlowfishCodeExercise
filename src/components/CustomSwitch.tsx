import React from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';
import colors from '../constants/colors';

interface CustomSwitchProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
  label: string;
}

const CustomSwitch: React.FC<CustomSwitchProps> = ({
  value,
  onValueChange,
  label,
}) => {
  return (
    <View style={styles.switchContainer}>
      <Text style={styles.label}>{label}</Text>
      <Switch
        value={value}
        onValueChange={onValueChange}
        thumbColor={value ? colors.WHITE_ONE : colors.WHITE_TWO}
        trackColor={{ false: colors.GREY_SEVEN, true: colors.GREEN_ONE }}
        ios_backgroundColor={colors.GREY_FOUR}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderRadius: 1,
    backgroundColor: colors.WHITE_TWO,
    elevation: 2, // Subtle shadow on Android
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.BLACK_FOUR,
  },
  switch: {
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }], // Make the switch a bit larger for a modern look
  },
});

export default CustomSwitch;