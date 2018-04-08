/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { SheetsRegistry } from 'react-jss/lib/jss';
import JssProvider from 'react-jss/lib/JssProvider';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
  MuiThemeProvider,
  createMuiTheme,
  createGenerateClassName,
} from 'material-ui/styles';

// external-global styles must be imported in your JS.
import normalizeCss from '../../../../node_modules/normalize.css/normalize.css';

import s from './Layout.css';
import appTheme from '../../../theme/AppTheme';
import Header from '../Header';
import SideNav from '../SideNav';
import Footer from '../Footer';

const h2nTheme = createMuiTheme(appTheme);

const generateClassName = createGenerateClassName();

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    cssReg: PropTypes.shape(SheetsRegistry),
    mainSection: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.wrapper}>
        <JssProvider
          registry={this.props.cssReg}
          generateClassName={generateClassName}
        >
          <MuiThemeProvider theme={h2nTheme} sheetsManager={new Map()}>
            <Header />
            <SideNav current={this.props.mainSection} />
            {this.props.children}
          </MuiThemeProvider>
        </JssProvider>
      </div>
    );
  }

}

export default withStyles(normalizeCss, s)(Layout);
