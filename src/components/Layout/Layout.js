/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { renderToString } from 'react-dom/server';
import { SheetsRegistry } from 'react-jss/lib/jss';
import JssProvider from 'react-jss/lib/JssProvider';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

// external-global styles must be imported in your JS.
import normalizeCss from 'normalize.css';
import {
  MuiThemeProvider,
  createMuiTheme,
  createGenerateClassName,
} from 'material-ui/styles';
import s from './Layout.css';
import appTheme from '../../theme/AppTheme';
import Header from '../Header';
import Feedback from '../Feedback';
import Footer from '../Footer';

const h2nTheme = createMuiTheme(appTheme);

// Create a sheetsRegistry instance.
const sheetsRegistry = new SheetsRegistry();
const generateClassName = createGenerateClassName();
/*
const themeProvider = new MuiThemeProvider({ theme: h2nTheme }, {});
const jssProvider = new JssProvider(
  {
    registry: sheetsRegistry,
    generateClassName,
    children: themeProvider,
  },
  {},
);

jssProvider.getChildContext();
jssProvider.render();

*/
// Render the component to a string.
/*
const html = renderToString(
  <div>
    <JssProvider
      registry={sheetsRegistry}
      generateClassName={generateClassName}
    >
      <MuiThemeProvider theme={h2nTheme}>
        <div />
      </MuiThemeProvider>
    </JssProvider>
  </div>
)
*/
// Grab the CSS from our sheetsRegistry.
///const css = sheetsRegistry.toString();

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    cssReg: PropTypes.shape(SheetsRegistry).isRequired,
  };

  sheetsRegistry = new SheetsRegistry();

  key = 'Layouty';

  funky() {
    console.log('funkeh!!');
  }

  render() {
    const { cssReg } = this.context;

    return (
      <div>
        <JssProvider
          registry={this.props.cssReg}
          generateClassName={generateClassName}
        >
          <MuiThemeProvider theme={h2nTheme}>
            <Header />
            {this.props.children}
            <Feedback />
            <Footer />
          </MuiThemeProvider>
        </JssProvider>
      </div>
    );
  }

}

// Grab the CSS from our sheetsRegistry.
const muiCss = sheetsRegistry.toString();

function getCss() {
  return sheetsRegistry.toString();
}

const cssWrapper = { _getCss: getCss };

/* TODO:
* Hack an object that has a _getCSS() method that returns the css string
 */

export default withStyles(normalizeCss, s)(Layout);
// export default withStyles(normalizeCss, s, muiCss)(Layout);
