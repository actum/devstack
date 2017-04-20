// @flow weak
import React from 'react';
import { StyleSheet } from 'react-native';
import { Match } from 'react-router';
import { Text } from './';

type Context = {|
  router: Object,
|};

type Props = {|
  activeStyle?: StyleSheet.Styles,
  children?: React$Element<any>,
  exactly?: boolean,
  onPress?: null | void,
  style?: StyleSheet.Styles,
  to: string | Object,
|};

const Link = (
  {
    activeStyle = {},
    children,
    exactly = false,
    onPress = null,
    style = {},
    to,
  }: Props,
  { router }: Context,
) => (
  <Match exactly={exactly} pattern={to}>
    {({ matched }) => (
      <Text
        onPress={() => {
          router.transitionTo(to);
          if (!onPress) return;
          onPress();
        }}
        style={[style, matched && activeStyle]}
      >
        {children}
      </Text>
    )}
  </Match>
);

export default Link;
