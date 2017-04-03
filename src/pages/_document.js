import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
// eslint-disable-next-line import/no-extraneous-dependencies
import flush from 'styled-jsx/server';

export default class MyDocument extends Document {
  static getInitialProps(context) {
    const { html, head } = context.renderPage();
    const { req: { localeDataScript } } = context;
    const styles = flush();
    return {
      head,
      html,
      localeDataScript,
      styles,
    };
  }

  render() {
    return (
      <html>
        <Head>
          <style>{this.props.styles}</style>
        </Head>
        <body>
          <Main />
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: this.props.localeDataScript,
            }}
          />
          <NextScript />
        </body>
      </html>
    );
  }
}
