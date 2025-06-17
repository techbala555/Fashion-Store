import React from "react";
import {
  StyleSheet,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
import { Button, ButtonProps } from "react-native-paper";

interface LoginButtonProps extends ButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  buttonStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  variant?: 'primary' | 'secondary' | 'text';
}

const LoginButton: React.FC<LoginButtonProps> = ({
  title,
  onPress,
  buttonStyle,
  labelStyle,
  variant = 'primary',
  ...rest
}) => {
  const getMode = () => {
    if (variant === 'secondary') return 'outlined';
    if (variant === 'text') return 'text';
    return 'contained';
  };

  const combinedButtonStyle = [
    styles.defaultButton,
    variant === 'secondary' && styles.outlineButton,
    variant === 'text' && styles.textButton,
    buttonStyle,
  ];

  const combinedLabelStyle = [
    styles.defaultLabel,
    variant === 'secondary' && styles.outlineLabel,
    variant === 'text' && styles.textLabel,
    labelStyle,
  ];

  return (
    <Button
    key={title}
      mode={getMode()}
      onPress={onPress}
      style={combinedButtonStyle}
      labelStyle={combinedLabelStyle}
      {...rest}
    >
      {title}
    </Button>
  );
};

export default LoginButton;

const styles = StyleSheet.create({
  defaultButton: {
    width: '90%',
    borderRadius: 30,
    paddingVertical: 12,
    marginTop: 20,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#F16023',
    backgroundColor: '#F16023',
  },
  defaultLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderColor: '#F16023',
    borderWidth: 2,
  },
  outlineLabel: {
    color: '#F16023',
  },
  textButton: {
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  textLabel: {
    color: '#F16023',
  },
  disablebutton: {
    backgroundColor: '#F16023',
    opacity: 0.25,
  },
});
