// @flow
import Header from './Header';
import React from 'react';
import linksMessages from '../../common/linksMessages';
import { Container } from './components';
import { Match } from 'react-router';
import { injectIntl, intlShape } from 'react-intl';

const titles = {
  '/': linksMessages.home,
};

type Props = {|
  component: any,
  intl: intlShape,
  pattern: string,
|};

const Page = ({ component: Component, intl, pattern, ...props }: Props) => (
  <Match
    {...props}
    pattern={pattern}
    render={renderProps => (
      <Container>
        {titles[pattern] &&
          <Header title={intl.formatMessage(titles[pattern])} />}
        <Component {...renderProps} />
      </Container>
    )}
  />
);

export default injectIntl(Page);
