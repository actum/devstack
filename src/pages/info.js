// @flow
import React from 'react';
import Page from '../browser/layout/Page';
import app from '../browser/app';
import { FormattedMessage, defineMessages } from 'react-intl';

const messages = defineMessages({
  devTasks: {
    defaultMessage: 'Dev Tasks',
    id: 'info.dev-tasks',
  },
});

const InfoPage = () => (
  <Page>
    <div className="message">
      <article>
        <h2>Start Development</h2>
        <ul>
          <li className="list-item">run <span className="code">gulp</span></li>
          <li className="list-item">point your browser to localhost:3000</li>
          <li className="list-item">build something beautiful</li>
        </ul>
      </article>
      <article>
        <h2><FormattedMessage {...messages.devTasks} /></h2>
        <ul>
          <li className="list-item">
            <span className="code">gulp</span>
            <span> run web app in development mode</span>
          </li>
          <li className="list-item">
            <span className="code">gulp ios</span>
            <span> run iOS app in development mode</span>
          </li>
          <li className="list-item">
            <span className="code">gulp ios -p</span>
            <span> run iOS app in production mode</span>
          </li>
          <li className="list-item">
            <span className="code">gulp android</span>
            <span> run Android app in development mode</span>
          </li>
          <li className="list-item">
            <span className="code">gulp eslint  --fix</span>
            <span>fix fixable eslint issues</span>
          </li>
          <li className="list-item">
            <span className="code">gulp messages-export</span>
            <span>export messages for translators (with `MISSING` prefix when untranslated)</span>
          </li>
          <li className="list-item">
            <span className="code">gulp messages-check</span>
            <span> check missing and unused translations</span>
          </li>
          <li className="list-item">
            <span className="code">yarn run build-size-check</span>
            <span>build-size-check display info about latest build</span>
          </li>
          <li className="list-item">
            <span className="code">yarn run devtools</span>
            <span>start standalone React devtools for native apps</span>
          </li>
        </ul>
      </article>
      <a href="https://github.com/actum/devstack">more info...</a>
    </div>
    <style jsx>
      {`
      .code {
        background-color: #908483;
        color: #fff;
        padding: 2px;
      }
      .list-item {
        margin: 7px 0;
      }
      .message {
        color: #908483;
      }
    `}
    </style>
  </Page>
);

export default app(InfoPage);
