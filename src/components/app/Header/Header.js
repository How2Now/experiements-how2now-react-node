/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import AccountCircle from 'material-ui-icons/AccountCircle';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import s from './Header.css';

class Header extends React.Component {
  constructor(props, publicContext, updater) {
    super(props, publicContext, updater);
    this.classes = props;
  }

  render() {
    // const { classes } = props;
    return (
      <AppBar position="static" className={s.root} colorPrimary={s.root.color}>
        <Toolbar>
          <IconButton
            className={s.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={s.flex}>
            How2Now
          </Typography>
          <IconButton aria-haspopup="true" color="inherit">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(s)(Header);
