// @flow
import React from 'react';
import { Container } from './';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  centeredContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

type Props = {
  style?: any,
};

const CenteredContainer = ({ style, ...props }: Props) => (
  <Container
    {...props}
    style={[styles.centeredContainer, style]}
  />
);

export default CenteredContainer;
