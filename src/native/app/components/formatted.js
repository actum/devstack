// @flow
import * as reactIntl from 'react-intl';
import React, { Children } from 'react';
import { StyleSheet, Text } from 'react-native';
import TextComponent from './Text';

// Create react-intl component which work in the React Native.
// It replaces the browser span with the styleable native Text.
// github.com/yahoo/react-intl/issues/119
const native = WrappedComponent => class Native extends React.Component {
  props: {
    children?: Children,
    style: StyleSheet.Styles,
  };

  text: Text.text;

  onTextRef(text: Text.text) {
    this.text = text;
  }

  setNativeProps(nativeProps: any) {
    if (typeof this.props.children === 'function') return;
    this.text.setNativeProps(nativeProps);
  }

  render() {
    const { children, style, ...wrappedComponentProps } = this.props;
    const childrenAsFunction = typeof children === 'function';

    return (
      <WrappedComponent {...wrappedComponentProps}>
        {nodes =>
          (children && childrenAsFunction
            ? children(...Children.toArray(nodes))
            : <TextComponent ref={text => this.onTextRef(text)} style={style}>
                {Children.toArray(nodes)}
              </TextComponent>)}
      </WrappedComponent>
    );
  }
};

export const FormattedDate = native(reactIntl.FormattedDate);
export const FormattedMessage = native(reactIntl.FormattedMessage);
export const FormattedNumber = native(reactIntl.FormattedNumber);
export const FormattedPlural = native(reactIntl.FormattedPlural);
export const FormattedRelative = native(reactIntl.FormattedRelative);
export const FormattedTime = native(reactIntl.FormattedTime);
